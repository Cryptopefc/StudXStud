import { mockMentorApplications, mockMentorProfiles } from "./mockData";
import type { MentorApplication, MentorProfile } from "../types/mentor";

export async function getActiveMentors(): Promise<MentorProfile[]> {
  return mockMentorProfiles.filter((mentor) => mentor.isActive);
}

export async function getMentorById(id: string): Promise<MentorProfile | null> {
  return mockMentorProfiles.find((mentor) => mentor.uid === id) ?? null;
}

export async function submitMentorApplication(
  application: Omit<MentorApplication, "id" | "status" | "createdAt">
) {
  mockMentorApplications.push({
    ...application,
    id: `a${mockMentorApplications.length + 1}`,
    status: "PENDING",
    createdAt: new Date().toISOString().slice(0, 10)
  });
}

export async function getMentorApplications(): Promise<MentorApplication[]> {
  return mockMentorApplications;
}

export async function approveMentorApplication(applicationId: string) {
  const target = mockMentorApplications.find((item) => item.id === applicationId);
  if (!target) return;
  target.status = "APPROVED";
  mockMentorProfiles.push({
    uid: target.studentUid,
    fullName: target.fullName,
    utasEmail: target.utasEmail,
    bio: target.bio,
    expertise: target.expertise,
    experienceYears: 1,
    ratingAvg: 5,
    sessionsCompleted: 0,
    availableSlots: ["Sun 09:00"],
    isActive: true
  });
}
