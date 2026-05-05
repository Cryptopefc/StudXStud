export type SessionStatus = "PENDING" | "CONFIRMED" | "DECLINED" | "DONE";

export interface SessionRequest {
  id: string;
  requesterUid: string;
  providerUid: string;
  skillCategory: string;
  status: SessionStatus;
}
