import type { StudentProfile } from "../types/profile";
import { mockProfiles } from "./mockData";

export async function getMyProfile(): Promise<StudentProfile | null> {
  // TODO: Replace with Firestore query for current user profile.
  return Promise.resolve(mockProfiles[0] ?? null);
}
