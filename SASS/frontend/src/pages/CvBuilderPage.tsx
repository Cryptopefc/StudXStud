import { useEffect, useState } from "react";
import { AppShell } from "../components/layout/AppShell";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Textarea } from "../components/ui/Textarea";
import { getCvProfile, saveCvProfile } from "../services/cv.service";
import { exportCvAsPdf } from "../services/pdf.service";
import type { CvProfile } from "../types/cv";
import { useLanguage } from "../hooks/useLanguage";

export function CvBuilderPage() {
  const { t } = useLanguage();
  const [profile, setProfile] = useState<CvProfile | null>(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    getCvProfile().then(setProfile);
  }, []);

  if (!profile) {
    return (
      <AppShell>
        <Card>
          <p className="text-sm text-text-secondary">{t.loadingCv || "Loading CV profile..."}</p>
        </Card>
      </AppShell>
    );
  }

  const handleSkillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSkills = e.target.value.split(",").map((s) => s.trim());
    setProfile({ ...profile, skills: newSkills });
  };

  const handleAccomplishmentsChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newAcc = e.target.value.split(",").map((s) => s.trim());
    const newExp = [...profile.experience];
    newExp[index].accomplishments = newAcc;
    setProfile({ ...profile, experience: newExp });
  };

  return (
    <AppShell>
      <section className="py-6 md:py-8">
        <SectionHeader
          label={t.cvBuilderLabel || "CV Builder"}
          title={t.cvBuilderTitle || "Create a polished CV in minutes"}
          subtext={t.cvBuilderSubtext || "Keep your profile current, save drafts, and export a clean PDF for applications."}
        />
      </section>
      <section className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <Card>
          <div className="mt-6 grid gap-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                label={t.fullName || "Full Name"}
                value={profile.fullName}
                onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
              />
              <Input
                label={t.utasEmail || "Email"}
                value={profile.utasEmail}
                onChange={(e) => setProfile({ ...profile, utasEmail: e.target.value })}
              />
              <Input
                label={t.phone || "Phone"}
                value={profile.phone}
                onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
              />
              <Input
                label="LinkedIn"
                value={profile.linkedIn || ""}
                onChange={(e) => setProfile({ ...profile, linkedIn: e.target.value })}
              />
            </div>
            
            <Textarea
              label="ABOUT ME (Objective)"
              value={profile.objective}
              onChange={(e) => setProfile({ ...profile, objective: e.target.value })}
            />

            <Input
              label="SKILLS (comma separated)"
              value={profile.skills.join(", ")}
              onChange={handleSkillsChange}
            />

            <div className="flex flex-col gap-4 border-t border-border pt-4">
              <h3 className="text-lg font-bold">PROFESSIONAL EXPERIENCE</h3>
              {profile.experience.map((exp, index) => (
                <div key={index} className="grid gap-4 rounded-xl border border-border bg-[var(--color-overlay)] p-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Input
                      label="Organization"
                      value={exp.organization}
                      onChange={(e) => {
                        const newExp = [...profile.experience];
                        newExp[index].organization = e.target.value;
                        setProfile({ ...profile, experience: newExp });
                      }}
                    />
                    <Input
                      label="Role"
                      value={exp.role}
                      onChange={(e) => {
                        const newExp = [...profile.experience];
                        newExp[index].role = e.target.value;
                        setProfile({ ...profile, experience: newExp });
                      }}
                    />
                    <Input
                      label="Start Date"
                      value={exp.startDate}
                      onChange={(e) => {
                        const newExp = [...profile.experience];
                        newExp[index].startDate = e.target.value;
                        setProfile({ ...profile, experience: newExp });
                      }}
                    />
                    <Input
                      label="End Date"
                      value={exp.endDate}
                      onChange={(e) => {
                        const newExp = [...profile.experience];
                        newExp[index].endDate = e.target.value;
                        setProfile({ ...profile, experience: newExp });
                      }}
                    />
                  </div>
                  <Textarea
                    label="Summary"
                    value={exp.summary}
                    onChange={(e) => {
                      const newExp = [...profile.experience];
                      newExp[index].summary = e.target.value;
                      setProfile({ ...profile, experience: newExp });
                    }}
                  />
                  <Input
                    label="Accomplishments (comma separated)"
                    value={exp.accomplishments?.join(", ") || ""}
                    onChange={(e) => handleAccomplishmentsChange(e, index)}
                  />
                </div>
              ))}
            </div>
            
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              onClick={async () => {
                await saveCvProfile(profile);
                setStatus(t.draftSaved || "Draft saved locally.");
                setTimeout(() => setStatus(""), 3000);
              }}
            >
              {t.saveDraft || "Save Draft"}
            </Button>
            <Button variant="ghost" onClick={() => exportCvAsPdf(profile)}>
              {t.exportPdf || "Export PDF"}
            </Button>
          </div>
          {status && <p className="mt-3 text-sm text-success">{status}</p>}
        </Card>

        {/* Live Preview */}
        <Card className="flex flex-col items-center border border-border/50 bg-white text-black shadow-lg">
          <p className="mb-4 w-full text-center text-xs uppercase tracking-[0.2em] text-gray-400">{t.preview || "Preview"}</p>
          
          <div className="w-full max-w-[500px] text-center font-sans">
            <h2 className="text-2xl font-bold uppercase tracking-widest">{profile.fullName}</h2>
            <p className="mt-1 text-xs text-gray-600">
              @{profile.utasEmail} - {profile.phone}
            </p>
            {profile.linkedIn && (
              <p className="text-xs text-gray-600">LinkedIn : {profile.linkedIn}</p>
            )}
            
            <div className="my-4 border-t-2 border-black"></div>
            
            <h3 className="text-sm font-bold uppercase tracking-widest">ABOUT ME</h3>
            <p className="mt-2 text-justify text-xs text-gray-700 leading-relaxed">
              {profile.objective}
            </p>
            
            <div className="my-4 border-t border-gray-400"></div>
            
            <h3 className="text-sm font-bold uppercase tracking-widest">SKILLS</h3>
            <ul className="mt-2 grid grid-cols-3 gap-2 text-xs text-gray-700">
              {profile.skills.filter(Boolean).map((skill, i) => (
                <li key={i} className="flex items-center gap-1">
                  <span className="text-[10px]">•</span> <span className="text-center w-full">{skill}</span>
                </li>
              ))}
            </ul>
            
            <div className="my-4 border-t border-gray-400"></div>
            
            <h3 className="text-sm font-bold uppercase tracking-widest">PROFESSIONAL EXPERIENCE</h3>
            <div className="mt-4 flex flex-col gap-4 text-left">
              {profile.experience.map((exp, i) => (
                <div key={i}>
                  <div className="flex justify-between text-xs font-bold text-gray-900">
                    <span>{exp.organization}</span>
                    <span>{exp.startDate} - {exp.endDate}</span>
                  </div>
                  <div className="mt-1 text-xs font-bold text-gray-800">{exp.role}</div>
                  <p className="mt-1 text-xs text-gray-700 leading-relaxed">{exp.summary}</p>
                  {exp.accomplishments && exp.accomplishments.length > 0 && exp.accomplishments[0] !== "" && (
                    <div className="mt-2">
                      <p className="text-xs text-gray-800">Accomplishments:</p>
                      <ul className="mt-1 list-inside list-disc text-xs text-gray-700">
                        {exp.accomplishments.filter(Boolean).map((acc, j) => (
                          <li key={j}>{acc}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Card>
      </section>
    </AppShell>
  );
}
