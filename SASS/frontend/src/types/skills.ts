export const SKILL_CATEGORIES = [
  "Study Help",
  "CV Writing",
  "Design",
  "Tech Skills",
  "Time Management",
  "New Student Support",
  "Other"
] as const;

export type SkillCategory = (typeof SKILL_CATEGORIES)[number];
