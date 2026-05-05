import { useEffect, useState } from "react";
import { AppShell } from "../components/layout/AppShell";
import { useLanguage } from "../hooks/useLanguage";
import { mockProfiles, mockMentorProfiles } from "../services/mockData";
import { getMentorApplications, approveMentorApplication } from "../services/mentor.service";
import type { MentorApplication } from "../types/mentor";

export function AdminDashboardPage() {
  const { t } = useLanguage();
  const [applications, setApplications] = useState<MentorApplication[]>([]);

  useEffect(() => {
    getMentorApplications().then(setApplications);
  }, []);

  const handleApprove = async (id: string) => {
    await approveMentorApplication(id);
    setApplications((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status: "APPROVED" } : app))
    );
  };

  const pendingCount = applications.filter((a) => a.status === "PENDING").length;

  return (
    <AppShell>
      <section className="py-6 md:py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-text-primary">
            {t.adminDashboardTitle || "Admin Dashboard"}
          </h1>
          <p className="mt-2 text-text-secondary">
            {t.adminDashboardSubtext || "Overview of users, mentors, and pending approvals."}
          </p>
        </div>

        {/* Stats Section */}
        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          <div className="glass-surface rounded-2xl p-6 transition-all hover:scale-[1.02]">
            <h3 className="text-sm font-medium text-text-secondary">{t.totalStudents || "Total Students"}</h3>
            <p className="mt-2 text-3xl font-bold text-text-primary">{mockProfiles.length}</p>
          </div>
          <div className="glass-surface rounded-2xl p-6 transition-all hover:scale-[1.02]">
            <h3 className="text-sm font-medium text-text-secondary">{t.totalMentors || "Total Mentors"}</h3>
            <p className="mt-2 text-3xl font-bold text-text-primary">{mockMentorProfiles.length}</p>
          </div>
          <div className="glass-surface rounded-2xl border border-primary/20 bg-primary/5 p-6 transition-all hover:scale-[1.02]">
            <h3 className="text-sm font-medium text-primary">{t.pendingApprovals || "Pending Approvals"}</h3>
            <p className="mt-2 text-3xl font-bold text-primary">{pendingCount}</p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Recent Approvals List */}
          <div className="lg:col-span-2">
            <h2 className="mb-4 text-xl font-bold text-text-primary">{t.mentorApplications || "Mentor Applications"}</h2>
            <div className="flex flex-col gap-4">
              {applications.length === 0 ? (
                <div className="glass-surface rounded-2xl p-6 text-center text-text-secondary">
                  {t.noPendingApplications || "No pending applications."}
                </div>
              ) : (
                applications.map((app) => (
                  <div key={app.id} className="glass-surface flex flex-col gap-4 rounded-2xl p-5 sm:flex-row sm:items-center sm:justify-between transition-all hover:shadow-md hover:ring-1 hover:ring-primary/30">
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary">{app.fullName}</h3>
                      <p className="text-sm text-text-secondary">{app.bio}</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {app.expertise.map((exp, idx) => (
                          <span key={idx} className="rounded-full bg-[var(--color-overlay)] px-2 py-1 text-xs text-text-tertiary">
                            {exp}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`rounded-full px-3 py-1 text-xs font-medium ${app.status === "APPROVED" ? "bg-green-500/10 text-green-500" : "bg-yellow-500/10 text-yellow-500"}`}>
                        {app.status}
                      </span>
                      {app.status === "PENDING" && (
                        <button
                          onClick={() => handleApprove(app.id)}
                          className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-dark hover:scale-105 active:scale-95"
                        >
                          {t.approveMentor || "Approve"}
                        </button>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Quick List of Mentors */}
          <div className="lg:col-span-1">
            <h2 className="mb-4 text-xl font-bold text-text-primary">{t.activeMentors || "Active Mentors"}</h2>
            <div className="glass-surface flex flex-col gap-3 rounded-2xl p-4">
              {mockMentorProfiles.slice(0, 5).map((m) => (
                <div key={m.uid} className="flex items-center justify-between rounded-xl bg-[var(--color-overlay)] p-3 transition-colors hover:bg-[var(--color-primary-soft)]">
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary">{m.fullName}</h4>
                    <p className="text-xs text-text-secondary">⭐ {m.ratingAvg}</p>
                  </div>
                  <span className="text-xs text-text-tertiary">{m.sessionsCompleted} {t.sessionsCount || "sessions"}</span>
                </div>
              ))}
              <button className="mt-2 w-full rounded-xl bg-[var(--color-primary-soft)] py-2 text-sm font-medium text-primary transition hover:bg-primary/20 hover:scale-[1.02] active:scale-95">
                {t.viewAllMentors || "View All Mentors"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </AppShell>
  );
}
