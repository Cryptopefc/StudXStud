import { AppShell } from "../components/layout/AppShell";
import { SectionHeader } from "../components/ui/SectionHeader";
import { useLanguage } from "../hooks/useLanguage";

export function ContactPage() {
  const { t } = useLanguage();

  return (
    <AppShell>
      <section className="py-6 md:py-8">
        <SectionHeader
          label={t.contactLabel || "Contact"}
          title={t.contactTitle || "Get in touch with us"}
          subtext={t.contactSubtext || "We are here to help you. Find our location and contact details below."}
        />
        
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {/* Contact Details */}
          <div className="flex flex-col gap-6">
            <div className="glass-surface rounded-2xl p-6 transition-transform hover:scale-[1.02]">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text-primary">University Location</h3>
                  <p className="mt-1 text-sm text-text-secondary">
                    University of Technology and Applied Sciences<br />
                    Salalah, Sultanate of Oman
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-surface rounded-2xl p-6 transition-transform hover:scale-[1.02]">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text-primary">Email Us</h3>
                  <p className="mt-1 text-sm text-text-secondary">
                    support@peercircle.utas.edu.om<br />
                    info@peercircle.utas.edu.om
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Embed */}
          <div className="glass-surface-strong overflow-hidden rounded-3xl border border-border shadow-2xl transition-all hover:shadow-[0_0_30px_var(--color-primary-soft)]">
            {/* The URL the user gave is a short Google Maps URL. We use an iframe pointing to the coordinates or embed API, but for simplicity, an iframe with a map search or a clickable banner is best. 
            Since short links can't always be directly embedded without x-frame-options blocking it, we will use a generic map embed for Salalah and link to the URL. */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15252.028905299496!2d54.14819711674403!3d17.031575822394747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8e19c36209581f%3A0xc39f8072eb2811a4!2sUniversity%20of%20Technology%20and%20Applied%20Sciences%20-%20Salalah!5e0!3m2!1sen!2som!4v1700000000000!5m2!1sen!2som"
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: "400px" }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="bg-[var(--color-overlay)] p-4 text-center">
              <a 
                href="https://maps.app.goo.gl/BGvVPRGwGkMK2u7v7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-primary transition-colors hover:text-primary-dark"
              >
                Open in Google Maps
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </AppShell>
  );
}
