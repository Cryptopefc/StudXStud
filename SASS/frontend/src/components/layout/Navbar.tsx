import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useLanguage } from "../../hooks/useLanguage";
import { useTheme } from "../../hooks/useTheme";
import { LanguageToggle } from "../common/LanguageToggle";

export function Navbar() {
  const { t } = useLanguage();
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = user ? [
    { to: "/mentors", label: t.navMentors },
    { to: "/mentor/apply", label: t.navApply },
    { to: "/cv-builder", label: t.navCvBuilder },
    { to: "/mentor/appointments", label: t.navAppointments },
    { to: "/contact", label: t.navContact || "Contact" }
  ] : [
    { to: "/contact", label: t.navContact || "Contact" }
  ];
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-full px-3 py-1.5 text-sm transition-all ${
      isActive
        ? "bg-[var(--color-primary-soft)] text-text-primary"
        : "text-text-secondary hover:text-text-primary"
    }`;

  return (
    <nav className="sticky top-0 z-20 border-b border-border bg-[var(--color-overlay)] px-4 py-3 backdrop-blur-[24px] md:px-6">
      <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 transition-transform hover:scale-105">
          <img src="/logo.png" alt="peerCircle" className="h-8 w-8 rounded-full border border-border/50 bg-[var(--color-overlay)]" />
          <span className="text-lg font-bold tracking-[-0.02em] text-primary">
            peerCircle
          </span>
        </Link>
        <button
          className="glass-surface rounded-xl px-3 py-2 text-sm text-text-secondary md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? t.closeMenu : t.openMenu}
        >
          {isMenuOpen ? t.close : t.menu}
        </button>
        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((entry) => (
            <NavLink key={entry.to} to={entry.to} className={linkClass}>
              {entry.label}
            </NavLink>
          ))}
          {user?.role === "admin" && (
            <NavLink to="/admin/dashboard" className={linkClass}>
              {t.navAdminDashboard || "Admin Dashboard"}
            </NavLink>
          )}
          {user ? (
            <button onClick={logout} className="rounded-full bg-[var(--color-overlay)] px-4 py-1.5 text-sm font-medium text-red-500 hover:bg-red-500/10 transition-colors">
              {t.logout || "Logout"}
            </button>
          ) : (
            <Link to="/login" className="rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-white hover:bg-primary-dark transition-colors">
              {t.login || "Login"}
            </Link>
          )}
          <button
            className="glass-surface rounded-full px-3 py-1.5 text-xs text-text-secondary transition hover:text-text-primary"
            onClick={toggleTheme}
            aria-label={t.language}
          >
            {theme === "dark" ? t.themeLight : t.themeDark}
          </button>
          <LanguageToggle />
        </div>
      </div>
      {isMenuOpen && (
        <div className="glass-surface-strong mx-auto mt-3 flex w-full max-w-[1240px] flex-col gap-2 rounded-2xl p-3 md:hidden">
          {navLinks.map((entry) => (
            <NavLink key={entry.to} to={entry.to} className={linkClass} onClick={() => setIsMenuOpen(false)}>
              {entry.label}
            </NavLink>
          ))}
          {user?.role === "admin" && (
            <NavLink to="/admin/dashboard" className={linkClass} onClick={() => setIsMenuOpen(false)}>
              {t.navAdminDashboard || "Admin Dashboard"}
            </NavLink>
          )}
          {user ? (
            <button onClick={() => { logout(); setIsMenuOpen(false); }} className="mt-2 w-full rounded-xl bg-red-500/10 px-3 py-2 text-center text-sm font-medium text-red-500">
              {t.logout || "Logout"}
            </button>
          ) : (
            <Link to="/login" onClick={() => setIsMenuOpen(false)} className="mt-2 block w-full rounded-xl bg-primary px-3 py-2 text-center text-sm font-medium text-white">
              {t.login || "Login"}
            </Link>
          )}
          <div className="mt-1 flex items-center gap-2">
            <button
              className="glass-surface flex-1 rounded-xl px-3 py-2 text-sm text-text-secondary"
              onClick={toggleTheme}
              aria-label={t.language}
            >
              {theme === "dark" ? t.themeLightMode : t.themeDarkMode}
            </button>
            <LanguageToggle />
          </div>
        </div>
      )}
    </nav>
  );
}
