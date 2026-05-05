import { useEffect, useState } from "react";
import { Card } from "../components/ui/Card";
import { SectionHeader } from "../components/ui/SectionHeader";
import { AppShell } from "../components/layout/AppShell";
import { getActiveMentors } from "../services/mentor.service";
import type { MentorProfile } from "../types/mentor";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { StarRating } from "../components/ui/StarRating";
import { useLanguage } from "../hooks/useLanguage";

export function MentorDirectoryPage() {
  const [mentors, setMentors] = useState<MentorProfile[]>([]);
  const { t } = useLanguage();

  useEffect(() => {
    getActiveMentors().then(setMentors);
  }, []);

  return (
    <AppShell>
      <section className="py-6 md:py-8">
        <SectionHeader
          label={t.mentorsLabel}
          title={t.mentorsTitle}
          subtext={t.mentorsSubtext}
        />
        <div className="grid gap-5 md:grid-cols-2">
          {mentors.length === 0 && (
            <Card className="md:col-span-2">
              <h3 className="text-xl font-semibold">{t.noMentorsTitle}</h3>
              <p className="mt-2 text-sm text-text-secondary">{t.noMentorsText}</p>
            </Card>
          )}
          {mentors.map((mentor) => (
            <Card key={mentor.uid}>
              <h3 className="text-xl font-semibold md:text-2xl">{mentor.fullName}</h3>
              <p className="mt-2 text-sm text-text-secondary">{mentor.bio}</p>
              <p className="mt-3 text-sm text-text-tertiary">
                {mentor.expertise.join(" • ")}
              </p>
              <div className="mt-3 flex items-center justify-between gap-3">
                <p className="text-sm text-text-tertiary">{mentor.sessionsCompleted} {t.sessionsCount}</p>
                <StarRating value={mentor.ratingAvg} label={t.ratingAria} />
              </div>
              <div className="mt-5">
                <Link to={`/mentors/${mentor.uid}`}>
                  <Button variant="ghost">{t.viewProfile}</Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
