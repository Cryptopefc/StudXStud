import { mockCvProfile } from "./mockData";
import type { CvProfile } from "../types/cv";

export async function getCvProfile(): Promise<CvProfile> {
  return structuredClone(mockCvProfile);
}

export async function saveCvProfile(profile: CvProfile) {
  Object.assign(mockCvProfile, profile);
}
