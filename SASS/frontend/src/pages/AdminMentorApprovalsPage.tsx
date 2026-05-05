import { useEffect, useState } from "react";
import { AppShell } from "../components/layout/AppShell";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { SectionHeader } from "../components/ui/SectionHeader";
import {
  approveMentorApplication,
  getMentorApplications
} from "../services/mentor.service";
import type { MentorApplication } from "../types/mentor";
import { useLanguage } from "../hooks/useLanguage";

export function AdminMentorApprovalsPage() {
  const [applications, setApplications] = useState<MentorApplication[]>([]);
  const { t } = useLanguage();

  useEffect(() => {
    getMentorApplications().then(setApplications);
  }, []);

  async function handleApprove(id: string) {
    await approveMentorApplication(id);
    setApplications((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: "APPROVED" } : item))
    );
  }

  return (
    <AppShell>
      <section className="py-6 md:py-8">
        <SectionHeader
          label={t.adminLabel}
          title={t.mentorApprovalsTitle}
          subtext={t.mentorApprovalsSubtext}
        />
        <div className="mt-6 grid gap-5">
          {applications.length === 0 && (
            <Card>
              <p className="text-sm text-text-secondary">{t.noPendingApplications}</p>
            </Card>
          )}
          {applications.map((app) => (
            <Card key={app.id}>
              <h3 className="text-xl font-semibold">{app.fullName}</h3>
              <p className="mt-2 text-sm text-text-secondary">{app.bio}</p>
              <p className="mt-2 text-sm text-text-tertiary">
                {t.expertiseLabel}: {app.expertise.join(", ")}
              </p>
              <p className="text-sm text-text-secondary">{t.status}: {app.status}</p>
              {app.status === "PENDING" && (
                <div className="mt-4">
                  <Button onClick={() => handleApprove(app.id)}>{t.approveMentor}</Button>
                </div>
              )}
            </Card>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
