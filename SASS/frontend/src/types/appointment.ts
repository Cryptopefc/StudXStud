export type AppointmentStatus = "PENDING" | "CONFIRMED" | "DECLINED" | "DONE";

export interface Appointment {
  id: string;
  studentUid: string;
  studentName: string;
  studentEmail: string;
  mentorUid: string;
  mentorName: string;
  mentorEmail: string;
  slot: string;
  topic: string;
  note: string;
  status: AppointmentStatus;
  meetingLink: string;
  createdAt: string;
}
