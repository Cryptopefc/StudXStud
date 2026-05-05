import { Navbar } from "./Navbar";
import { PageTransition } from "./PageTransition";
import { AiAssistant } from "../ui/AiAssistant";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-bg text-text-primary">
      <Navbar />
      <main className="mx-auto w-full max-w-[1240px] px-4 pb-10 pt-6 md:px-6 md:pb-12 md:pt-8 lg:px-8 lg:pb-16 lg:pt-10">
        <PageTransition>{children}</PageTransition>
      </main>
      <AiAssistant />
    </div>
  );
}
