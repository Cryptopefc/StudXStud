import { FormEvent, useState } from "react";
import { AppShell } from "../components/layout/AppShell";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Textarea } from "../components/ui/Textarea";
import { useAuth } from "../hooks/useAuth";
import { submitMentorApplication } from "../services/mentor.service";
import { isUtasEmail } from "../utils/validation";
import { useLanguage } from "../hooks/useLanguage";

export function MentorApplyPage() {
  const { user } = useAuth();
  const { t } = useLanguage();
  const [bio, setBio] = useState("");
  const [expertise, setExpertise] = useState("");
  const [experienceSummary, setExperienceSummary] = useState("");
  const [status, setStatus] = useState("");

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!user) return;
    if (!isUtasEmail(user.email)) {
      setStatus(t.onlyUtasEmail);
      return;
    }
    await submitMentorApplication({
      studentUid: user.uid,
      fullName: user.name,
      utasEmail: user.email,
      bio,
      expertise: expertise.split(",").map((item) => item.trim()),
      experienceSummary
    });
    setStatus(t.applicationSubmitted);
  }

  return (
    <AppShell>
      <section className="py-6 md:py-8">
        <SectionHeader
          label={t.mentorProgram}
          title={t.applyAsMentor}
          subtext={t.mentorApplySubtext}
        />
        <form className="glass-surface max-w-2xl rounded-[var(--radius-20)] p-5 md:p-7 grid gap-4" onSubmit={onSubmit}>
          <Input label={t.shortBio} value={bio} onChange={(event) => setBio(event.target.value)} />
          <Input
            label={t.expertiseComma}
            value={expertise}
            onChange={(event) => setExpertise(event.target.value)}
          />
          <Textarea
            label={t.experienceSummary}
            value={experienceSummary}
            onChange={(event) => setExperienceSummary(event.target.value)}
          />
          <Button type="submit">{t.submitApplication}</Button>
          {status && <p className="text-sm text-success">{status}</p>}
        </form>
      </section>
    </AppShell>
  );
}
