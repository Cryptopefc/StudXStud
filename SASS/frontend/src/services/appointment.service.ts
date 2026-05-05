import { mockAppointments } from "./mockData";
import type { Appointment } from "../types/appointment";

export async function getStudentAppointments(studentUid: string): Promise<Appointment[]> {
  return mockAppointments.filter((item) => item.studentUid === studentUid);
}

export async function getAllAppointments(): Promise<Appointment[]> {
  return mockAppointments;
}

export async function getMentorAppointments(mentorUid: string): Promise<Appointment[]> {
  return mockAppointments.filter((item) => item.mentorUid === mentorUid);
}

export async function createAppointment(
  payload: Omit<Appointment, "id" | "status" | "meetingLink" | "createdAt">
) {
  mockAppointments.push({
    ...payload,
    id: `ap${mockAppointments.length + 1}`,
    status: "PENDING",
    meetingLink: "",
    createdAt: new Date().toISOString().slice(0, 10)
  });
}

export async function confirmAppointment(id: string) {
  const appointment = mockAppointments.find((item) => item.id === id);
  if (!appointment) return;
  appointment.status = "CONFIRMED";
  appointment.meetingLink = `https://peercircle.app/meet/${id}`;
}

export async function declineAppointment(id: string) {
  const appointment = mockAppointments.find((item) => item.id === id);
  if (!appointment) return;
  appointment.status = "DECLINED";
}
