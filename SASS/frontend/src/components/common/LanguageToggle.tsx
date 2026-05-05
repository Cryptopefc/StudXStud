import { useLanguage } from "../../hooks/useLanguage";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  return (
    <button
      className="glass-surface rounded-full px-3 py-1.5 text-xs font-semibold text-primary"
      onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
    >
      {language === "ar" ? "EN" : "AR"}
    </button>
  );
}
