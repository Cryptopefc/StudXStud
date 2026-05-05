export type AppLanguage = "ar" | "en";
export type UserRole = "student" | "mentor" | "admin";

export interface AuthUser {
  uid: string;
  name: string;
  email: string;
  studentId: string;
  role: UserRole;
}
