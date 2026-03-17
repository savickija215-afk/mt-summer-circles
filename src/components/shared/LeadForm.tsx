import { useState } from "react";
import { CheckCircle } from "lucide-react";

interface LeadFormProps {
  onClose: () => void;
}

const LeadForm = ({ onClose }: LeadFormProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    grade: "",
    timezone: "",
    format: "",
    contact: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In real app, send to backend
    console.log("Form submitted:", form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 text-center space-y-4">
        <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
          <CheckCircle className="text-primary" size={28} />
        </div>
        <h3 className="text-lg font-bold">Спасибо!</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Мы получили заявку и скоро свяжемся с вами.
        </p>
        <button
          onClick={onClose}
          className="mt-2 px-6 py-2.5 rounded-2xl bg-muted text-foreground text-sm font-medium hover:bg-muted/80 transition-colors"
        >
          Закрыть
        </button>
      </div>
    );
  }

  const selectClass = "w-full h-12 rounded-2xl border border-border bg-background px-4 text-sm text-foreground appearance-none focus:outline-none focus:ring-2 focus:ring-ring";
  const inputClass = "w-full h-12 rounded-2xl border border-border bg-background px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring";

  return (
    <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-4">
      <h3 className="text-lg font-bold text-center mb-2">Короткая заявка</h3>

      <input
        type="text"
        placeholder="Как к вам обращаться"
        required
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className={inputClass}
      />

      <input
        type="tel"
        placeholder="Телефон"
        required
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        className={inputClass}
      />

      <select
        required
        value={form.grade}
        onChange={(e) => setForm({ ...form, grade: e.target.value })}
        className={selectClass}
      >
        <option value="">Класс ребёнка</option>
        {[4, 5, 6, 7, 8, 9, 10].map((g) => (
          <option key={g} value={String(g)}>{g} класс</option>
        ))}
      </select>

      <select
        required
        value={form.timezone}
        onChange={(e) => setForm({ ...form, timezone: e.target.value })}
        className={selectClass}
      >
        <option value="">Часовой пояс</option>
        <option value="msk">Москва (UTC+3)</option>
        <option value="msk+1">UTC+4 (Самара)</option>
        <option value="msk+2">UTC+5 (Екатеринбург)</option>
        <option value="msk+3">UTC+6 (Омск)</option>
        <option value="msk+4">UTC+7 (Красноярск)</option>
        <option value="msk+5">UTC+8 (Иркутск)</option>
        <option value="msk+6">UTC+9 (Якутск)</option>
        <option value="msk-1">UTC+2 (Калининград)</option>
        <option value="other">Другой</option>
      </select>

      <select
        required
        value={form.format}
        onChange={(e) => setForm({ ...form, format: e.target.value })}
        className={selectClass}
      >
        <option value="">Какой формат интересует</option>
        <option value="offline">Очный лагерь</option>
        <option value="online">Онлайн-лагерь</option>
        <option value="consult">Нужна консультация</option>
      </select>

      <select
        required
        value={form.contact}
        onChange={(e) => setForm({ ...form, contact: e.target.value })}
        className={selectClass}
      >
        <option value="">Как удобно связаться</option>
        <option value="telegram">Telegram</option>
        <option value="whatsapp">WhatsApp</option>
        <option value="call">Звонок</option>
      </select>

      <button
        type="submit"
        className="w-full h-12 rounded-2xl bg-primary text-primary-foreground font-semibold text-sm transition-transform hover:scale-[1.01]"
        style={{ boxShadow: "var(--green-glow)" }}
      >
        Отправить заявку
      </button>
    </form>
  );
};

export default LeadForm;
