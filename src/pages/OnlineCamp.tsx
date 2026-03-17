import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyCTA from "@/components/layout/StickyCTA";
import LeadModal from "@/components/shared/LeadModal";
import SoftPopup from "@/components/shared/SoftPopup";
import TeamCard from "@/components/shared/TeamCard";
import ReviewSlider from "@/components/shared/ReviewSlider";
import FAQSection from "@/components/shared/FAQSection";
import {
  Calendar, Users, CheckCircle, Monitor, MessageSquare, BarChart3,
  Video, BookOpen, UserCheck, ArrowRight, Gamepad2, Clock
} from "lucide-react";

import heroImg from "@/assets/hero-online.jpg";
import teamPopov from "@/assets/team-popov.jpg";
import teamZubkova from "@/assets/team-zubkova.jpg";

const TG_LINKS = [
  "https://t.me/MT_Workshop_Bot?start=site-online-01",
  "https://t.me/MT_Workshop_Bot?start=site-online-02",
  "https://t.me/MT_Workshop_Bot?start=site-online-03",
];

const reviews = [
  { name: "Ирина М.", text: "Боялась, что онлайн — это скучно. Но сын был в восторге: маленькая группа, живое общение, задачи по его уровню. Преподаватель знал каждого по имени.", child: "Сын, 6 класс" },
  { name: "Дмитрий Л.", text: "Мы живём за границей, и онлайн-лагерь — единственный способ дать ребёнку сильную русскоязычную математику летом. Качество на высоте.", child: "Дочь, 8 класс" },
  { name: "Наталья В.", text: "Очень понравилась прозрачность: видно, какие задачи решены, над чем ещё работать. И записи можно пересмотреть.", child: "Сын, 5 класс" },
];

const faq = [
  { q: "Чем онлайн-лагерь отличается от обычных онлайн-курсов?", a: "Это не записанные лекции и не вебинары. Занятия проходят в живом формате маленькими группами до 12 человек. Дети объясняют решения устно, преподаватели работают индивидуально с каждым." },
  { q: "Чем отличаются блоки?", a: "Блоки независимы друг от друга. Каждый — самостоятельный модуль с новыми темами. Можно взять один, два или все три." },
  { q: "Если взять один блок, это имеет смысл?", a: "Да. Каждый блок — законченная программа из 9 занятий и математической игры. Даже один блок даёт заметный прогресс." },
  { q: "Будет ли внимание именно моему ребёнку?", a: "Да. В группе до 12 детей, работают преподаватель и ассистенты. Около 70% времени — решение задач и индивидуальное взаимодействие." },
  { q: "Будут ли записи и материалы?", a: "Да, записи занятий доступны для повторного просмотра. Структурированные материалы остаются у ребёнка." },
  { q: "Подойдёт ли онлайн-лагерь моему ребёнку?", a: "Для 4–7 классов подходит детям с интересом к математике и нестандартным задачам. Для 8–10 классов желателен опыт олимпиад или кружков. Если не уверены — оставьте заявку, мы поможем определиться." },
];

const OnlineCamp = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/50" />
        </div>
        <div className="section-container relative py-16 md:py-28">
          <div className="max-w-xl space-y-6">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.1]">
              Онлайн-лагерь по олимпиадной математике
            </h1>
            <p className="text-base md:text-lg text-muted-foreground">
              Сильные живые занятия летом, маленькие группы и гибкий выбор блоков
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="badge-blue"><Calendar size={14} /> 27 июля — 14 августа</span>
              <span className="badge-blue"><Users size={14} /> 4–10 класс</span>
              <span className="badge-blue"><Monitor size={14} /> До 12 в группе</span>
              <span className="badge-blue"><Clock size={14} /> 2 пары в день</span>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <button onClick={openModal} className="h-12 px-7 rounded-2xl bg-primary text-primary-foreground font-semibold text-sm" style={{ boxShadow: "var(--green-glow)" }}>
                Оставить заявку
              </button>
              <a href="#how" className="h-12 px-7 rounded-2xl font-medium text-sm text-foreground flex items-center gap-2" style={{ boxShadow: "var(--surface-elevated)" }}>
                Как устроен онлайн-лагерь
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Format */}
      <section className="section-container py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: MessageSquare, title: "Живой кружковый онлайн", desc: "Не вебинары, а интерактивные занятия" },
            { icon: Calendar, title: "3 независимых блока", desc: "27–31 июля, 3–7 и 10–14 августа" },
            { icon: Users, title: "Маленькие группы", desc: "До 12 человек, преподаватель + ассистенты" },
            { icon: BookOpen, title: "Сильная математика", desc: "Олимпиадные задачи, устная сдача" },
          ].map((item, i) => (
            <div key={i} className="card-elevated p-5 space-y-3">
              <item.icon className="text-primary" size={22} />
              <h3 className="text-sm font-bold leading-snug">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="bg-secondary py-16 md:py-20">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Как устроен онлайн-лагерь</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {["Блок 1: 27–31 июля", "Блок 2: 3–7 августа", "Блок 3: 10–14 августа"].map((title, i) => (
              <div key={i} className="card-elevated p-6 space-y-3 bg-card">
                <span className="badge-blue w-fit">{title}</span>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2"><CheckCircle size={14} className="text-primary shrink-0 mt-0.5" />5 учебных дней</li>
                  <li className="flex gap-2"><CheckCircle size={14} className="text-primary shrink-0 mt-0.5" />2 пары в день (10:00 и 12:00 мск)</li>
                  <li className="flex gap-2"><CheckCircle size={14} className="text-primary shrink-0 mt-0.5" />9 занятий + математическая игра</li>
                  <li className="flex gap-2"><CheckCircle size={14} className="text-primary shrink-0 mt-0.5" />Самостоятельный модуль</li>
                </ul>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-6">Блоки независимы — можно выбрать 1, 2 или 3.</p>
          <div className="mt-8">
            <button onClick={openModal} className="h-12 px-7 rounded-2xl bg-primary text-primary-foreground font-semibold text-sm" style={{ boxShadow: "var(--green-glow)" }}>
              Оставить заявку
            </button>
          </div>
        </div>
      </section>

      {/* How Classes Work */}
      <section className="section-container py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Как устроены занятия</h2>
        <p className="text-base text-muted-foreground mb-8">Это не «Zoom-лекции в пустоту»</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { icon: MessageSquare, title: "~30% теория", desc: "Объяснение и общий разбор" },
            { icon: BookOpen, title: "~70% практика", desc: "Решение задач и индивидуальная работа" },
            { icon: UserCheck, title: "Устная сдача", desc: "Дети объясняют решения своими словами" },
            { icon: Users, title: "До 12 в группе", desc: "Преподаватель + ассистенты" },
            { icon: Video, title: "Записи доступны", desc: "Можно пересмотреть после занятия" },
            { icon: BarChart3, title: "Прозрачный трекинг", desc: "Плюсник — видно прогресс по задачам" },
          ].map((item, i) => (
            <div key={i} className="card-elevated p-5 space-y-2">
              <item.icon className="text-primary" size={18} />
              <h4 className="text-sm font-bold">{item.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who Is It For */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="section-container max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Кому подойдёт</h2>
          <div className="space-y-4">
            <div className="card-elevated p-5 bg-card">
              <h4 className="text-sm font-bold mb-2">4–7 классы</h4>
              <p className="text-sm text-muted-foreground">Подходит детям с интересом к олимпиадной математике, логике и нестандартным задачам. Серьёзный олимпиадный опыт не обязателен.</p>
            </div>
            <div className="card-elevated p-5 bg-card">
              <h4 className="text-sm font-bold mb-2">8–10 классы</h4>
              <p className="text-sm text-muted-foreground">Желателен опыт кружков, математических классов или олимпиад.</p>
            </div>
            <p className="text-sm text-muted-foreground">Если не уверены — оставьте заявку, мы поможем определиться.</p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-container py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Команда</h2>
        <div className="grid md:grid-cols-2 gap-5 max-w-2xl">
          <TeamCard name="Попов Леонид Андреевич" role="Координатор и руководитель" bio="Руководитель МТ Кружков, создатель и вдохновитель летних программ." photo={teamPopov} />
          <TeamCard name="Зубкова Александра Алексеевна" role="Ключевой организатор" bio="Один из ключевых руководителей онлайн-направления, многолетний опыт преподавания." photo={teamZubkova} />
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Отзывы родителей</h2>
          <ReviewSlider reviews={reviews} />
        </div>
      </section>

      {/* Pricing */}
      <section className="section-container py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Стоимость</h2>
        <div className="grid md:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {[
            { blocks: "1 блок", full: "21 000 ₽", early: "19 000 ₽", special: "17 000 ₽" },
            { blocks: "2 блока", full: "34 000 ₽", early: "32 000 ₽", special: "29 000 ₽" },
            { blocks: "3 блока", full: "45 000 ₽", early: "42 000 ₽", special: "39 000 ₽" },
          ].map((p, i) => (
            <div key={i} className="card-elevated p-6 text-center space-y-3 bg-card">
              <h3 className="text-base font-bold">{p.blocks}</h3>
              <div>
                <span className="text-sm text-muted-foreground line-through mr-2">{p.full}</span>
                <span className="text-2xl font-extrabold text-primary-foreground">{p.early}</span>
              </div>
              <p className="text-xs text-muted-foreground">до 15 мая</p>
              <p className="text-xs text-muted-foreground/70">Для своих: {p.special}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground text-center mt-6 max-w-md mx-auto">
          Для учеников МТ Кружков и участников прошлых смен действуют специальные условия
        </p>
        <div className="text-center mt-6">
          <button onClick={openModal} className="h-12 px-8 rounded-2xl bg-primary text-primary-foreground font-semibold text-sm" style={{ boxShadow: "var(--green-glow)" }}>
            Оставить заявку
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="section-container max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Частые вопросы</h2>
          <FAQSection items={faq} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-container py-16 md:py-20 text-center">
        <p className="text-base text-muted-foreground max-w-md mx-auto mb-6">
          Если хотите понять, какой блок выбрать и подойдёт ли формат вашему ребёнку, оставьте заявку — мы подскажем.
        </p>
        <button onClick={openModal} className="h-12 px-8 rounded-2xl bg-primary text-primary-foreground font-semibold text-sm" style={{ boxShadow: "var(--green-glow)" }}>
          Оставить заявку
        </button>
      </section>

      {/* Other formats */}
      <section className="section-container pb-16 md:pb-20">
        <h3 className="text-lg font-bold mb-4">Другие летние форматы</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <Link to="/summer-olimp-2026" className="card-elevated p-5 flex items-center justify-between group">
            <span className="text-sm font-semibold">Лагерь в Парк-отеле «Олимп»</span>
            <ArrowRight size={16} className="text-muted-foreground group-hover:text-foreground transition-colors" />
          </Link>
          <div className="card-elevated p-5 flex items-center justify-between opacity-60">
            <span className="text-sm font-semibold">Подготовка к учебному году</span>
            <span className="text-xs text-muted-foreground">Скоро</span>
          </div>
        </div>
      </section>

      <Footer />
      <StickyCTA onClick={openModal} />
      <SoftPopup onCtaClick={openModal} />
      <LeadModal open={modalOpen} onOpenChange={setModalOpen} telegramLinks={TG_LINKS} />
    </div>
  );
};

export default OnlineCamp;
