interface StickyCTAProps {
  onClick: () => void;
}

const StickyCTA = ({ onClick }: StickyCTAProps) => (
  <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-md border-t border-border/30 z-50 md:hidden">
    <button
      onClick={onClick}
      className="w-full bg-primary text-primary-foreground font-semibold h-14 rounded-2xl text-base"
      style={{ boxShadow: "var(--green-glow)" }}
    >
      Оставить заявку
    </button>
  </div>
);

export default StickyCTA;
