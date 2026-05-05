import { Link } from "react-router-dom";
import { Button } from "./Button";
import { Card } from "./Card";
import { useLanguage } from "../../hooks/useLanguage";

interface Props {
  title: string;
  description: string;
}

export function FeaturePlaceholder({ title, description }: Props) {
  const { t } = useLanguage();
  return (
    <Card className="max-w-2xl">
      <h1 className="text-2xl font-semibold md:text-3xl">{title}</h1>
      <p className="mt-3 text-sm text-text-secondary md:text-base">{description}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link to="/mentors">
          <Button>{t.exploreMentors}</Button>
        </Link>
        <Link to="/">
          <Button variant="ghost">{t.returnHome}</Button>
        </Link>
      </div>
    </Card>
  );
}
