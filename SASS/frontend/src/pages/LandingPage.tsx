import { Link } from "react-router-dom";
import { AppShell } from "../components/layout/AppShell";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { SectionHeader } from "../components/ui/SectionHeader";
import { useLanguage } from "../hooks/useLanguage";

export function LandingPage() {
  const { t } = useLanguage();
  return (
    <AppShell>
      <section className="py-8 md:py-12">
        <SectionHeader
          label={t.landingLabel}
          title={t.landingTitle}
          subtext={t.landingSubtext}
        />
        <div className="flex flex-wrap gap-3">
          <Link to="/register">
            <Button size="lg">{t.getStarted}</Button>
          </Link>
          <Link to="/login">
            <Button size="lg" variant="ghost">{t.signIn}</Button>
          </Link>
        </div>
      </section>

      <section className="grid gap-4 pb-8 md:grid-cols-3 md:pb-12">
        <Card className="p-5">
          <h3 className="text-lg font-semibold">{t.landingFeature1Title}</h3>
          <p className="mt-2 text-sm text-text-secondary">{t.landingFeature1Text}</p>
        </Card>
        <Card className="p-5">
          <h3 className="text-lg font-semibold">{t.landingFeature2Title}</h3>
          <p className="mt-2 text-sm text-text-secondary">{t.landingFeature2Text}</p>
        </Card>
        <Card className="p-5">
          <h3 className="text-lg font-semibold">{t.landingFeature3Title}</h3>
          <p className="mt-2 text-sm text-text-secondary">{t.landingFeature3Text}</p>
        </Card>
      </section>
    </AppShell>
  );
}
