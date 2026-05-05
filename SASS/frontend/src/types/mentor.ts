export type MentorApplicationStatus = "PENDING" | "APPROVED" | "REJECTED";

export interface MentorApplication {
  id: string;
  studentUid: string;
  fullName: string;
  utasEmail: string;
  bio: string;
  expertise: string[];
  experienceSummary: string;
  status: MentorApplicationStatus;
  createdAt: string;
}

export interface MentorProfile {
  uid: string;
  fullName: string;
  utasEmail: string;
  bio: string;
  expertise: string[];
  experienceYears: number;
  ratingAvg: number;
  sessionsCompleted: number;
  availableSlots: string[];
  isActive: boolean;
}
