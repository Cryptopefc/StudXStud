import { AppShell } from "../components/layout/AppShell";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Link } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";

export function HomePage() {
  const { t } = useLanguage();
  return (
    <AppShell>
      <section className="flex min-h-[80svh] flex-col justify-center py-10 md:py-16">
        <SectionHeader
          label="PeerCircle"
          title={t.homeTitle}
          subtext={t.homeSubtext}
        />
        <div className="mt-4 flex flex-wrap gap-4">
          <Link to="/mentors">
            <Button size="lg">{t.exploreMentors}</Button>
          </Link>
          <Link to="/cv-builder">
            <Button size="lg" variant="ghost">{t.buildCv}</Button>
          </Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Card className="p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">{t.trustedMentors}</p>
            <p className="mt-2 text-sm text-text-secondary">{t.trustedMentorsText}</p>
          </Card>
          <Card className="p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">{t.fastBooking}</p>
            <p className="mt-2 text-sm text-text-secondary">{t.fastBookingText}</p>
          </Card>
          <Card className="p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">{t.cvProgress}</p>
            <p className="mt-2 text-sm text-text-secondary">{t.cvProgressText}</p>
          </Card>
        </div>
      </section>
    </AppShell>
  );
}
