import jsPDF from "jspdf";
import type { CvProfile } from "../types/cv";

export function exportCvAsPdf(profile: CvProfile) {
  const pdf = new jsPDF({ unit: "pt", format: "a4" });
  const pageWidth = pdf.internal.pageSize.getWidth();
  const margin = 40;
  const contentWidth = pageWidth - margin * 2;
  let y = 60;

  // Header - Name
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(24);
  const nameText = profile.fullName.toUpperCase();
  // We can add spacing by splitting and joining if needed, but standard is fine
  pdf.text(nameText, pageWidth / 2, y, { align: "center" });
  y += 20;

  // Header - Contact
  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(10);
  const contactText = `@${profile.utasEmail} - ${profile.phone}`;
  pdf.text(contactText, pageWidth / 2, y, { align: "center" });
  y += 14;
  
  if (profile.linkedIn) {
    pdf.text(`LinkedIn : ${profile.linkedIn}`, pageWidth / 2, y, { align: "center" });
    y += 14;
  }
  y += 6;

  // Thick Line
  pdf.setLineWidth(1.5);
  pdf.line(margin, y, pageWidth - margin, y);
  y += 20;

  // ABOUT ME
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(12);
  pdf.text("ABOUT ME", pageWidth / 2, y, { align: "center" });
  y += 16;
  
  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(9);
  const splitObjective = pdf.splitTextToSize(profile.objective, contentWidth);
  pdf.text(splitObjective, margin, y);
  y += splitObjective.length * 12 + 10;

  // Thin Line
  pdf.setLineWidth(0.5);
  pdf.line(margin, y, pageWidth - margin, y);
  y += 20;

  // SKILLS
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(12);
  pdf.text("SKILLS", pageWidth / 2, y, { align: "center" });
  y += 18;

  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(9);
  if (profile.skills && profile.skills.length > 0) {
    const colWidth = contentWidth / 3;
    profile.skills.forEach((skill, idx) => {
      const col = idx % 3;
      // Start slightly indented for bullets
      const xPos = margin + 15 + col * colWidth;
      // Dot
      pdf.text("•", xPos - 10, y);
      // We can center skill text inside the column or just left align it
      pdf.text(skill, xPos, y, { align: "center" });
      
      if (col === 2 || idx === profile.skills.length - 1) {
        y += 14; // new row
      }
    });
    // Ensure y is updated correctly if the last row was not col 2
    if (profile.skills.length % 3 !== 0) {
      y += 6;
    } else {
      y += 6;
    }
  }

  // Thin Line
  pdf.setLineWidth(0.5);
  pdf.line(margin, y, pageWidth - margin, y);
  y += 20;

  // PROFESSIONAL EXPERIENCE
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(12);
  pdf.text("PROFESSIONAL EXPERIENCE", pageWidth / 2, y, { align: "center" });
  y += 20;

  profile.experience.forEach((exp) => {
    // Org and Date
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(10);
    pdf.text(exp.organization, margin, y);
    pdf.text(`${exp.startDate} - ${exp.endDate}`, pageWidth - margin, y, { align: "right" });
    y += 12;

    // Role
    pdf.text(exp.role, margin, y);
    y += 14;

    // Summary
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(9);
    const splitSummary = pdf.splitTextToSize(exp.summary, contentWidth);
    pdf.text(splitSummary, margin, y);
    y += splitSummary.length * 12 + 6;

    // Accomplishments
    if (exp.accomplishments && exp.accomplishments.length > 0) {
      y += 4;
      pdf.text("Accomplishments:", margin, y);
      y += 12;
      exp.accomplishments.forEach((acc) => {
        pdf.text(`•   ${acc}`, margin + 10, y);
        y += 12;
      });
      y += 4;
    }
    y += 10;
  });

  // Depending on if education is present, we could add it similar to experience.
  if (profile.education && profile.education.length > 0) {
    // Add thin line if education is shown? In template we don't see it, let's keep it simple.
  }

  // Open PDF in a new window/tab instead of just downloading
  const pdfBlobUrl = pdf.output("bloburl");
  window.open(pdfBlobUrl, "_blank");
}
