import { useLanguage } from "./useLanguage";

export function useDirection() {
  const { language } = useLanguage();
  return language === "ar" ? "rtl" : "ltr";
}
