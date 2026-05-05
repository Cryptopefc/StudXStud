import { AppShell } from "../components/layout/AppShell";
import { BadgePill } from "../components/common/BadgePill";
import { Card } from "../components/ui/Card";
import { SectionHeader } from "../components/ui/SectionHeader";
import { useLanguage } from "../hooks/useLanguage";
import { mockProfiles } from "../services/mockData";

export function SkillsBoardPage() {
  const { t } = useLanguage();
  return (
    <AppShell>
      <section className="py-6 md:py-8">
        <SectionHeader
          label={t.communityLabel}
          title={t.skillsBoard}
          subtext={t.skillsSubtext}
        />
      </section>
      <div className="grid gap-4">
        {mockProfiles.map((profile) => (
          <Card key={profile.uid} className="p-5">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{profile.name}</h3>
              <BadgePill tier={profile.badgeTier} />
            </div>
            <p className="mt-2 text-sm text-text-secondary">
              {profile.skillsOffer.join(", ")}
            </p>
          </Card>
        ))}
      </div>
    </AppShell>
  );
}
