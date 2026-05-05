export type BadgeTier = "Beginner" | "Helper" | "Champion";

export interface AvailabilitySlot {
  day: string;
  slots: string[];
}

export interface StudentProfile {
  uid: string;
  name: string;
  major: string;
  yearOfStudy: number;
  skillsOffer: string[];
  skillsNeed: string[];
  availability: AvailabilitySlot[];
  sessionCount: number;
  badgeTier: BadgeTier;
}
