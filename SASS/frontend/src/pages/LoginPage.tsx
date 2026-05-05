import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useLanguage } from "../hooks/useLanguage";

export function LoginPage() {
  const { t } = useLanguage();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [loadingRole, setLoadingRole] = useState<"student" | "admin" | null>(null);

  const handleLogin = async (role: "student" | "admin") => {
    setIsLoading(true);
    setLoadingRole(role);
    try {
      await login(role);
      navigate(role === "admin" ? "/admin/dashboard" : "/home");
    } finally {
      setIsLoading(false);
      setLoadingRole(null);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--color-bg)] p-4">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-[10%] -top-[10%] h-[50vw] w-[50vw] rounded-full bg-primary/20 blur-[100px]" />
        <div className="absolute -right-[10%] -bottom-[10%] h-[50vw] w-[50vw] rounded-full bg-secondary/20 blur-[100px]" />
      </div>

      <div className="glass-surface-strong relative z-10 w-full max-w-md overflow-hidden rounded-3xl p-8 shadow-2xl">
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="mb-4 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-border/50 bg-[var(--color-overlay)] shadow-[0_0_40px_var(--color-primary-soft)] ring-4 ring-primary/20 transition-all hover:scale-110 hover:shadow-[0_0_60px_var(--color-primary)]">
            <img src="/logo.png" alt="peerCircle logo" className="h-full w-full object-cover" />
          </div>
          <h1 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-4xl font-extrabold tracking-tight text-transparent transition-all hover:scale-105">
            peerCircle
          </h1>
          <p className="mt-3 text-text-secondary">{t.loginPlaceholder || "Sign in to your account"}</p>
        </div>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => handleLogin("student")}
            disabled={isLoading}
            className={`group relative flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-primary-dark px-6 py-4 font-semibold text-white shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] ${
              isLoading ? "opacity-70 pointer-events-none" : ""
            }`}
          >
            {isLoading && loadingRole === "student" ? (
              <span className="flex items-center gap-2">
                <svg className="h-5 w-5 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {t.authenticating || "Authenticating..."}
              </span>
            ) : (
              <span>{t.loginAsStudent || "Login as Student"}</span>
            )}
            <div className="absolute inset-0 -z-10 translate-x-[-100%] bg-white/20 transition-transform duration-500 group-hover:translate-x-[100%]" />
          </button>

          <div className="relative flex items-center py-2">
            <div className="flex-grow border-t border-border" />
            <span className="mx-4 text-xs font-medium uppercase tracking-wider text-text-tertiary">{t.orText || "Or"}</span>
            <div className="flex-grow border-t border-border" />
          </div>

          <button
            onClick={() => handleLogin("admin")}
            disabled={isLoading}
            className={`group relative flex items-center justify-center overflow-hidden rounded-2xl border border-border bg-[var(--color-overlay)] px-6 py-4 font-semibold text-text-primary shadow-sm transition-all hover:bg-[var(--color-primary-soft)] hover:text-primary active:scale-[0.98] ${
              isLoading ? "opacity-70 pointer-events-none" : ""
            }`}
          >
            {isLoading && loadingRole === "admin" ? (
              <span className="flex items-center gap-2">
                <svg className="h-5 w-5 animate-spin text-primary" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {t.authenticating || "Authenticating..."}
              </span>
            ) : (
              <span>{t.loginAsAdmin || "Login as Admin"}</span>
            )}
          </button>
        </div>

        <div className="mt-8 text-center text-xs text-text-tertiary">
          <p>{t.termsAgreement || "By signing in, you agree to our Terms of Service."}</p>
        </div>
      </div>
    </div>
  );
}
