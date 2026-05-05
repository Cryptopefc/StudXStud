import { useState, useRef, useEffect } from "react";
import { useLanguage } from "../../hooks/useLanguage";

const QA_DATABASE = [
  {
    keywords: ["what is peercircle", "what is this", "about platform", "what do you do"],
    answer: "peerCircle is a student-to-student platform at UTAS Salalah where you can find mentors, exchange skills, and build your professional CV."
  },
  {
    keywords: ["book a mentor", "find a mentor", "how to book", "get a mentor", "schedule session", "appointment"],
    answer: "Go to the 'Mentors' directory, select a mentor with the expertise you need, and click 'Book appointment' to choose an available time slot."
  },
  {
    keywords: ["become a mentor", "apply", "be a mentor", "how to mentor", "mentor application"],
    answer: "Click on 'Apply' in the navigation menu. Fill out your bio, expertise, and experience. Once submitted, an admin will review and approve your application."
  },
  {
    keywords: ["cv builder", "make a cv", "create a cv", "how to export cv", "resume"],
    answer: "The CV Builder is a tool that helps you create a professional, recruiter-ready CV in minutes. You can fill out your info and export it directly as a PDF."
  },
  {
    keywords: ["free", "cost", "price", "pay"],
    answer: "Yes! peerCircle is a completely free peer-to-peer exchange platform created exclusively for UTAS Salalah students."
  },
  {
    keywords: ["language", "arabic", "english", "translate", "change language"],
    answer: "You can easily switch between English and Arabic using the language toggle button located in the top navigation bar."
  },
  {
    keywords: ["where", "location", "contact", "university", "address", "map"],
    answer: "UTAS Salalah is located in Salalah, Oman. You can visit our 'Contact Us' page for more detailed information and a direct map link!"
  },
  {
    keywords: ["hello", "hi", "hey", "greetings"],
    answer: "Hello there! I'm your peerCircle AI assistant. How can I help you today?"
  }
];

const FALLBACK_ANSWER = "I'm not quite sure about that. Try asking about booking a mentor, becoming a mentor, or the CV builder!";

export function AiAssistant() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "ai"; text: string }[]>([
    { role: "ai", text: "Hi! I'm the peerCircle AI Assistant. Ask me anything about the platform!" }
  ]);
  const [input, setInput] = useState("");
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setInput("");

    // Simulate AI thinking and finding answer
    setTimeout(() => {
      const lowerInput = userMessage.toLowerCase();
      let bestMatch = FALLBACK_ANSWER;

      for (const qa of QA_DATABASE) {
        if (qa.keywords.some((kw) => lowerInput.includes(kw))) {
          bestMatch = qa.answer;
          break;
        }
      }

      setMessages((prev) => [...prev, { role: "ai", text: bestMatch }]);
    }, 600);
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-[0_0_20px_var(--color-primary-soft)] transition-transform hover:scale-110 hover:bg-primary-dark active:scale-95"
        aria-label="Toggle AI Assistant"
      >
        {isOpen ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 flex max-h-[80vh] w-[350px] flex-col overflow-hidden rounded-2xl border border-border bg-[var(--color-overlay)] shadow-2xl backdrop-blur-2xl transition-all sm:w-[400px]">
          {/* Header */}
          <div className="flex items-center gap-3 bg-gradient-to-r from-primary to-primary-dark p-4 text-white">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold">peerCircle AI</h3>
              <p className="text-xs text-white/80">Always here to help</p>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex h-80 flex-col gap-3 overflow-y-auto p-4 text-sm">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex max-w-[85%] flex-col ${
                  msg.role === "user" ? "self-end items-end" : "self-start items-start"
                }`}
              >
                <div
                  className={`rounded-2xl px-4 py-2 ${
                    msg.role === "user"
                      ? "bg-primary text-white"
                      : "bg-[var(--color-bg)] text-text-primary border border-border"
                  }`}
                >
                  {msg.text}
                </div>
                <span className="mt-1 text-[10px] text-text-tertiary">
                  {msg.role === "user" ? "You" : "AI Assistant"}
                </span>
              </div>
            ))}
            <div ref={endOfMessagesRef} />
          </div>

          {/* Quick Suggestions (Optional) */}
          <div className="flex gap-2 overflow-x-auto border-t border-border/50 bg-[var(--color-bg)] p-2 px-4 scrollbar-hide">
            {["How to book?", "CV Builder?", "Apply to mentor"].map((suggestion, idx) => (
              <button
                key={idx}
                onClick={() => setInput(suggestion)}
                className="whitespace-nowrap rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs text-primary transition hover:bg-primary/20"
              >
                {suggestion}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <div className="flex gap-2 border-t border-border bg-[var(--color-overlay)] p-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask me a question..."
              className="flex-1 rounded-full border border-border bg-[var(--color-bg)] px-4 py-2 text-sm text-text-primary outline-none focus:border-primary"
            />
            <button
              onClick={handleSend}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white transition hover:bg-primary-dark"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
