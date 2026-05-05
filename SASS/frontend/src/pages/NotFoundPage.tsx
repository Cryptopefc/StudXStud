import { Link } from "react-router-dom";
import { AppShell } from "../components/layout/AppShell";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { useLanguage } from "../hooks/useLanguage";

export function NotFoundPage() {
  const { t } = useLanguage();
  return (
    <AppShell>
      <section className="py-6 md:py-8">
        <Card className="max-w-xl">
          <h2 className="text-3xl font-semibold">404</h2>
          <p className="mt-2 text-sm text-text-secondary">{t.notFoundText}</p>
          <div className="mt-5">
            <Link to="/">
              <Button>{t.returnHome}</Button>
            </Link>
          </div>
        </Card>
      </section>
    </AppShell>
  );
}
