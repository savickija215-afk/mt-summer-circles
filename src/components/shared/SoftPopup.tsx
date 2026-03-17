import { useEffect, useState, useCallback } from "react";
import { X } from "lucide-react";

interface SoftPopupProps {
  onCtaClick: () => void;
}

const SoftPopup = ({ onCtaClick }: SoftPopupProps) => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const show = useCallback(() => {
    if (!dismissed) setVisible(true);
  }, [dismissed]);

  useEffect(() => {
    // Timer: 20 seconds
    const timer = setTimeout(show, 20000);

    // Scroll: 40%
    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      if (scrollPercent > 0.4) show();
    };

    // Exit intent (desktop only)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 10) show();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [show]);

  if (!visible || dismissed) return null;

  return (
    <div className="fixed bottom-24 right-4 md:bottom-8 md:right-8 z-50 animate-fade-in-up">
      <div className="card-elevated p-5 max-w-xs space-y-3">
        <div className="flex items-start justify-between gap-3">
          <p className="text-sm font-medium text-foreground leading-snug">
            Хотите узнать подробности или подобрать формат?
          </p>
          <button
            onClick={() => setDismissed(true)}
            className="shrink-0 p-1 rounded-full hover:bg-muted text-muted-foreground"
          >
            <X size={16} />
          </button>
        </div>
        <button
          onClick={() => { setDismissed(true); onCtaClick(); }}
          className="w-full h-10 rounded-2xl bg-primary text-primary-foreground text-sm font-semibold"
          style={{ boxShadow: "var(--green-glow)" }}
        >
          Оставить заявку
        </button>
      </div>
    </div>
  );
};

export default SoftPopup;
