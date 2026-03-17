import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyCTA from "@/components/layout/StickyCTA";
import LeadModal from "@/components/shared/LeadModal";
import { MapPin, Calendar, Users, ArrowRight, Star, BookOpen, Heart, Shield } from "lucide-react";
import heroImg from "@/assets/hero-hub.jpg";
import teamPopov from "@/assets/team-popov.jpg";

const TG_LINKS = [
  "https://t.me/MT_Workshop_Bot?start=site-main-01",
  "https://t.me/MT_Workshop_Bot?start=site-main-02",
  "https://t.me/MT_Workshop_Bot?start=site-main-03",
];

const Hub = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary" />
        <div className="section-container relative py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.1]">
                Летние программы<br />МТ Кружков 2026
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-md">
                Три формата для школьников 4–10 классов: очный лагерь, онлайн-лагерь и интенсив перед учебным годом. Олимпиадная математика, живая среда и сильные преподаватели.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setModalOpen(true)}
                  className="h-12 px-7 rounded-2xl bg-primary text-primary-foreground font-semibold text-sm transition-transform hover:scale-[1.02]"
                  style={{ boxShadow: "var(--green-glow)" }}
                >
                  Оставить заявку
                </button>
                <a
                  href="#formats"
                  className="h-12 px-7 rounded-2xl font-medium text-sm text-foreground flex items-center gap-2 hover:bg-muted transition-colors"
                  style={{ boxShadow: "var(--surface-elevated)" }}
                >
                  Выбрать формат
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImg}
                alt="Дети решают математические задачи у доски"
                className="w-full rounded-3xl object-cover aspect-[4/3]"
                style={{ boxShadow: "var(--surface-elevated-hover)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="section-container py-16 md:py-20">
        <div className="grid md:grid-cols-[auto_1fr] gap-8 items-start">
          <div className="flex flex-col items-center md:items-start gap-3">
            <img src={teamPopov} alt="Леонид Попов" className="w-20 h-20 rounded-2xl object-cover" />
            <div className="text-center md:text-left">
              <p className="text-sm font-bold">Леонид Попов</p>
              <p className="text-xs text-muted-foreground">Руководитель МТ Кружков</p>
            </div>
          </div>
          <div>
            <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-lg">
              «Мы создаём среду, где решение сложной задачи приносит радость, а олимпиадная математика становится понятной и живой.»
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { icon: Star, text: "Сильные преподаватели олимпиадной математики" },
                { icon: BookOpen, text: "Опыт проведения летних программ" },
                { icon: Heart, text: "Живая работа с детьми" },
                { icon: Shield, text: "Понятная и надёжная организация" },
              ].map((item, i) => (
                <div key={i} className="card-elevated p-4 text-center space-y-2">
                  <item.icon className="mx-auto text-primary" size={20} />
                  <p className="text-xs font-medium leading-snug">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Format Cards */}
      <section id="formats" className="bg-secondary py-16 md:py-20">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Выберите формат</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {/* Offline */}
            <div className="card-elevated p-6 space-y-4 flex flex-col">
              <span className="badge-green w-fit">Очно</span>
              <h3 className="text-lg font-bold">Лагерь в Парк-отеле «Олимп»</h3>
              <div className="space-y-2 text-sm text-muted-foreground flex-1">
                <div className="flex items-center gap-2"><MapPin size={14} /> Коломна, Парк-отель «Олимп»</div>
                <div className="flex items-center gap-2"><Calendar size={14} /> 26 июля — 9 августа</div>
                <div className="flex items-center gap-2"><Users size={14} /> 4–10 класс</div>
              </div>
              <p className="text-sm font-medium">Сильная математика + летний отдых</p>
              <Link
                to="/summer-olimp-2026"
                className="inline-flex items-center gap-2 h-11 px-5 rounded-2xl bg-primary text-primary-foreground font-semibold text-sm w-fit transition-transform hover:scale-[1.02]"
              >
                Подробнее <ArrowRight size={16} />
              </Link>
            </div>

            {/* Online */}
            <div className="card-elevated p-6 space-y-4 flex flex-col">
              <span className="badge-blue w-fit">Онлайн</span>
              <h3 className="text-lg font-bold">Онлайн-лагерь по олимпиадной математике</h3>
              <div className="space-y-2 text-sm text-muted-foreground flex-1">
                <div className="flex items-center gap-2"><Calendar size={14} /> 3 независимых учебных блока</div>
                <div className="flex items-center gap-2"><Users size={14} /> 4–10 класс</div>
              </div>
              <p className="text-sm font-medium">Живые занятия + маленькие группы</p>
              <Link
                to="/summer-online-2026"
                className="inline-flex items-center gap-2 h-11 px-5 rounded-2xl bg-primary text-primary-foreground font-semibold text-sm w-fit transition-transform hover:scale-[1.02]"
              >
                Подробнее <ArrowRight size={16} />
              </Link>
            </div>

            {/* Back to school */}
            <div className="card-elevated p-6 space-y-4 flex flex-col bg-secondary">
              <span className="badge-gray w-fit">Скоро</span>
              <h3 className="text-lg font-bold">Подготовка к учебному году</h3>
              <div className="space-y-2 text-sm text-muted-foreground flex-1">
                <div className="flex items-center gap-2"><Calendar size={14} /> Вторая половина августа</div>
              </div>
              <p className="text-sm font-medium text-muted-foreground">Подробности скоро</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-container py-16 md:py-20 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Не уверены, что выбрать?</h2>
        <p className="text-base text-muted-foreground max-w-md mx-auto mb-8">
          Если вы пока не уверены, какой формат лучше подойдёт вашему ребёнку, оставьте заявку — мы поможем сориентироваться.
        </p>
        <button
          onClick={() => setModalOpen(true)}
          className="h-12 px-8 rounded-2xl bg-primary text-primary-foreground font-semibold text-sm transition-transform hover:scale-[1.02]"
          style={{ boxShadow: "var(--green-glow)" }}
        >
          Оставить заявку
        </button>
      </section>

      {/* Bottom nav */}
      <section className="section-container pb-16 md:pb-20">
        <div className="grid md:grid-cols-3 gap-4">
          <Link to="/summer-olimp-2026" className="card-elevated p-5 flex items-center justify-between group">
            <span className="text-sm font-semibold">Лагерь в Парк-отеле «Олимп»</span>
            <ArrowRight size={16} className="text-muted-foreground group-hover:text-foreground transition-colors" />
          </Link>
          <Link to="/summer-online-2026" className="card-elevated p-5 flex items-center justify-between group">
            <span className="text-sm font-semibold">Онлайн-лагерь</span>
            <ArrowRight size={16} className="text-muted-foreground group-hover:text-foreground transition-colors" />
          </Link>
          <div className="card-elevated p-5 flex items-center justify-between opacity-60">
            <span className="text-sm font-semibold">Подготовка к учебному году</span>
            <span className="text-xs text-muted-foreground">Скоро</span>
          </div>
        </div>
      </section>

      <Footer />
      <StickyCTA onClick={() => setModalOpen(true)} />
      <LeadModal open={modalOpen} onOpenChange={setModalOpen} telegramLinks={TG_LINKS} />
    </div>
  );
};

export default Hub;
