import { useEffect, useState } from "react";
import { AppShell } from "../components/layout/AppShell";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { SectionHeader } from "../components/ui/SectionHeader";
import { useAuth } from "../hooks/useAuth";
import {
  confirmAppointment,
  declineAppointment,
  getAllAppointments,
  getMentorAppointments,
  getStudentAppointments
} from "../services/appointment.service";
import type { Appointment } from "../types/appointment";
import { useLanguage } from "../hooks/useLanguage";

export function MentorAppointmentsPage() {
  const { user } = useAuth();
  const { t } = useLanguage();
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    if (!user) return;
    const loader =
      user.role === "admin"
        ? getAllAppointments()
        : user.role === "mentor"
          ? getMentorAppointments(user.uid)
          : getStudentAppointments(user.uid);
    loader.then(setAppointments);
  }, [user]);

  async function handleConfirm(id: string) {
    await confirmAppointment(id);
    setAppointments((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: "CONFIRMED", meetingLink: `https://peercircle.app/meet/${id}` } : item
      )
    );
  }

  async function handleDecline(id: string) {
    await declineAppointment(id);
    setAppointments((prev) => prev.map((item) => (item.id === id ? { ...item, status: "DECLINED" } : item)));
  }

  return (
    <AppShell>
      <section className="py-6 md:py-8">
        <SectionHeader
          label={t.scheduling}
          title={t.appointmentsTitle}
          subtext={t.appointmentsSubtext}
        />
        <div className="mt-6 grid gap-5">
          {appointments.length === 0 && (
            <Card>
              <p className="text-sm text-text-secondary">{t.noAppointments}</p>
            </Card>
          )}
          {appointments.map((item) => (
            <Card key={item.id}>
              <p className="text-sm text-text-tertiary">{item.slot}</p>
              <h3 className="mt-2 text-2xl font-semibold">{item.topic}</h3>
              <p className="mt-2 text-text-secondary">
                {item.studentName} ({item.studentEmail})
              </p>
              <p className="text-sm text-text-secondary">{t.status}: {item.status}</p>
              {item.status === "CONFIRMED" && (
                <p className="mt-2 text-sm text-success">{t.meetingLink}: {item.meetingLink}</p>
              )}
              {(user?.role === "mentor" || user?.role === "admin") && item.status === "PENDING" && (
                <div className="mt-4 flex gap-3">
                  <Button onClick={() => handleConfirm(item.id)}>{t.accept}</Button>
                  <Button variant="ghost" onClick={() => handleDecline(item.id)}>
                    {t.decline}
                  </Button>
                </div>
              )}
            </Card>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
