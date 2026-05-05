import { FormEvent, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { AppShell } from "../components/layout/AppShell";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { StarRating } from "../components/ui/StarRating";
import { Textarea } from "../components/ui/Textarea";
import { getMentorById } from "../services/mentor.service";
import type { MentorProfile } from "../types/mentor";
import { useAuth } from "../hooks/useAuth";
import { createAppointment } from "../services/appointment.service";
import { useLanguage } from "../hooks/useLanguage";

export function MentorProfilePage() {
  const { mentorId } = useParams();
  const { user } = useAuth();
  const { t } = useLanguage();
  const [mentor, setMentor] = useState<MentorProfile | null>(null);
  const [slot, setSlot] = useState("");
  const [topic, setTopic] = useState("");
  const [note, setNote] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!mentorId) return;
    getMentorById(mentorId).then(setMentor);
  }, [mentorId]);

  const available = useMemo(() => mentor?.availableSlots ?? [], [mentor]);
  const groupedSlots = useMemo(() => {
    const order = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const map = new Map<string, string[]>();
    available.forEach((entry) => {
      const [day, time] = entry.split(" ");
      const current = map.get(day) ?? [];
      map.set(day, [...current, time]);
    });
    return order
      .filter((day) => map.has(day))
      .map((day) => ({ day, times: map.get(day) ?? [] }));
  }, [available]);
  const dayLabelMap: Record<string, string> = {
    Sun: t.daySun,
    Mon: t.dayMon,
    Tue: t.dayTue,
    Wed: t.dayWed,
    Thu: t.dayThu,
    Fri: t.dayFri,
    Sat: t.daySat
  };

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!mentor || !user || !slot || !topic) return;
    await createAppointment({
      studentUid: user.uid,
      studentName: user.name,
      studentEmail: user.email,
      mentorUid: mentor.uid,
      mentorName: mentor.fullName,
      mentorEmail: mentor.utasEmail,
      slot,
      topic,
      note
    });
    setDone(true);
    setNote("");
  }

  if (!mentor) {
    return (
      <AppShell>
        <Card>
          <p className="text-sm text-text-secondary">{t.mentorNotFound}</p>
        </Card>
      </AppShell>
    );
  }

  return (
    <AppShell>
      <section className="grid gap-6 py-6 md:py-8 lg:grid-cols-[1fr_1fr]">
        <Card>
          <h1 className="text-3xl font-bold">{mentor.fullName}</h1>
          <p className="mt-3 text-text-secondary">{mentor.bio}</p>
          <div className="mt-4">
            <StarRating value={mentor.ratingAvg} size="md" label={t.ratingAria} />
          </div>
          <p className="mt-4 text-sm text-text-tertiary">{t.expertiseLabel}: {mentor.expertise.join(", ")}</p>
          <p className="text-sm text-text-tertiary">
            {t.contactLabel}: {mentor.utasEmail}
          </p>
        </Card>
        <Card>
          <h2 className="text-2xl font-semibold">{t.bookAppointment}</h2>
          <p className="mt-2 text-sm text-text-secondary">{t.calendarHelp}</p>
          <form className="mt-4 flex flex-col gap-4" onSubmit={onSubmit}>
            <div>
              <p className="text-sm text-text-secondary">{t.availableTimes}</p>
              <div className="mt-2 grid gap-3 sm:grid-cols-2">
                {groupedSlots.map((group) => (
                  <div key={group.day} className="glass-surface rounded-xl p-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">{dayLabelMap[group.day] ?? group.day}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {group.times.map((time) => {
                        const slotValue = `${group.day} ${time}`;
                        const active = slotValue === slot;
                        return (
                          <button
                            key={slotValue}
                            type="button"
                            className={`rounded-full border px-3 py-1 text-xs transition ${
                              active
                                ? "border-primary bg-[var(--color-primary-soft)] text-text-primary"
                                : "border-border text-text-secondary hover:text-text-primary"
                            }`}
                            onClick={() => setSlot(slotValue)}
                          >
                            {time}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
              {slot ? <p className="mt-2 text-xs text-success">{t.selectedSlot}: {slot}</p> : null}
            </div>
            <Input label={t.topic} value={topic} onChange={(event) => setTopic(event.target.value)} />
            <Textarea label={t.notes} value={note} onChange={(event) => setNote(event.target.value)} />
            <Button type="submit">{t.requestSession}</Button>
            {done && <p className="text-sm text-success">{t.requestSubmitted}</p>}
          </form>
        </Card>
      </section>
    </AppShell>
  );
}
