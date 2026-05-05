import { mockProfiles } from "./mockData";

export async function getSkillOffers() {
  // TODO: Replace with Firestore-backed skill offers query.
  return Promise.resolve(
    mockProfiles.map((profile) => ({
      uid: profile.uid,
      studentName: profile.name,
      skill: profile.skillsOffer[0] ?? "Other",
      sessionCount: profile.sessionCount,
      badgeTier: profile.badgeTier,
      bio: `${profile.major} student`
    }))
  );
}
