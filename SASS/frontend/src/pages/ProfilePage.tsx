import { AppShell } from "../components/layout/AppShell";
import { FeaturePlaceholder } from "../components/ui/FeaturePlaceholder";
import { useLanguage } from "../hooks/useLanguage";

export function ProfilePage() {
  const { t } = useLanguage();
  return (
    <AppShell>
      <section className="py-6 md:py-8">
        <FeaturePlaceholder
          title={t.profile}
          description={t.profilePlaceholder}
        />
      </section>
    </AppShell>
  );
}
