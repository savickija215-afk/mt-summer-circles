import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import LeadForm from "./LeadForm";
import { Send } from "lucide-react";

interface LeadModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  telegramLinks: string[];
}

const LeadModal = ({ open, onOpenChange, telegramLinks }: LeadModalProps) => {
  const [showForm, setShowForm] = useState(false);

  const tgLink = telegramLinks[Math.floor(Math.random() * telegramLinks.length)];

  const handleClose = () => {
    setShowForm(false);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md rounded-3xl p-0 gap-0 border-0" style={{ boxShadow: "0 24px 80px rgba(0,0,0,0.12)" }}>
        {!showForm ? (
          <div className="p-6 md:p-8 space-y-5">
            <DialogTitle className="text-xl font-bold text-center">Выберите удобный способ</DialogTitle>
            <a
              href={tgLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full bg-primary text-primary-foreground p-4 rounded-2xl font-semibold text-base transition-transform hover:scale-[1.02]"
              style={{ boxShadow: "var(--green-glow)" }}
            >
              <Send size={18} />
              Записаться через Telegram
            </a>
            <button
              onClick={() => setShowForm(true)}
              className="w-full p-4 rounded-2xl font-medium text-base text-foreground transition-colors hover:bg-muted"
              style={{ boxShadow: "var(--surface-elevated)" }}
            >
              Заполнить короткую форму
            </button>
          </div>
        ) : (
          <LeadForm onClose={handleClose} />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LeadModal;
