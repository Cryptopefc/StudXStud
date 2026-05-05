import type { AuthUser } from "../types/auth";
import { mockCurrentUser } from "./mockData";

export async function getCurrentUser(): Promise<AuthUser | null> {
  // TODO: Replace with Firebase Auth state in Task 2.
  return Promise.resolve(mockCurrentUser);
}
