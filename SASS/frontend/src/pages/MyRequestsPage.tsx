import { AppShell } from "../components/layout/AppShell";
import { FeaturePlaceholder } from "../components/ui/FeaturePlaceholder";
import { useLanguage } from "../hooks/useLanguage";

export function MyRequestsPage() {
  const { t } = useLanguage();
  return (
    <AppShell>
      <section className="py-6 md:py-8">
        <FeaturePlaceholder
          title={t.myRequests}
          description={t.requestsPlaceholder}
        />
      </section>
    </AppShell>
  );
}
