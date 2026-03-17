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
  MapPin, Calendar, Users, CheckCircle, BookOpen, Heart, Shield, Bus,
  Utensils, Bed, Droplets, Phone, ArrowRight, Gamepad2, Sun, GraduationCap, UserCheck
} from "lucide-react";

import heroImg from "@/assets/hero-offline.jpg";
import campMath from "@/assets/camp-math.jpg";
import campLife from "@/assets/camp-life.jpg";
import campPool from "@/assets/camp-pool.jpg";
import campSports from "@/assets/camp-sports.jpg";
import teamPopov from "@/assets/team-popov.jpg";
import teamMushinskaya from "@/assets/team-mushinskaya.jpg";
import teamBalmasov from "@/assets/team-balmasov.jpg";

const TG_LINKS = [
  "https://t.me/MT_Workshop_Bot?start=site-offline-01",
  "https://t.me/MT_Workshop_Bot?start=site-offline-02",
  "https://t.me/MT_Workshop_Bot?start=site-offline-03",
];

const reviews = [
  { name: "Мария К.", text: "Сын вернулся из лагеря совершенно другим. Горящие глаза, новые друзья-математики и желание решать задачи. За две недели он продвинулся больше, чем за полгода.", child: "Сын, 7 класс" },
  { name: "Елена С.", text: "Очень порадовала организация: трансфер, питание, связь с ребёнком. Чувствовалось, что дети под надёжным присмотром и при этом им интересно.", child: "Дочь, 5 класс" },
  { name: "Андрей П.", text: "Наконец-то нашли лагерь, где математика — не скучная обязанность, а живой процесс. Ребёнок просит поехать снова.", child: "Сын, 9 класс" },
  { name: "Ольга Д.", text: "Преподаватели действительно работают с каждым ребёнком. Это не поточные лекции, а настоящий кружок. Спасибо за заботу и профессионализм.", child: "Дочь, 6 класс" },
];

const faq = [
  { q: "Кому подходит лагерь?", a: "Для учеников 4–10 классов, которым интересна математика. Для младших классов (4–7) серьёзный олимпиадный опыт не обязателен — достаточно интереса к нестандартным задачам. Для старших (8–10) желателен опыт кружков или олимпиад." },
  { q: "Если ребёнок не олимпиадник, ему можно?", a: "Да, если ему интересны задачи на логику и нестандартное мышление. Мы формируем группы по уровню, и каждый ребёнок получает задачи, соответствующие его подготовке." },
  { q: "Что в лагере кроме математики?", a: "Зарядка, спорт, прогулки, настольные игры, спецкурсы, вечерние мероприятия. Дети живут полноценной лагерной жизнью с друзьями и активностями." },
  { q: "Какие условия проживания и питания?", a: "Размещение по 3 человека в номере с душем и туалетом. Питание — шведский стол. Территория огорожена, есть медпункт." },
  { q: "Входит ли дорога в стоимость?", a: "Да, централизованный трансфер из Москвы и обратно включён в стоимость." },
  { q: "Как родители будут на связи?", a: "Работают родительские чаты. Дети могут связаться с родителями в вечернее время. Мы регулярно публикуем новости и фото из смены." },
];

const OfflineCamp = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>
        <div className="section-container relative py-16 md:py-28">
          <div className="max-w-xl space-y-6">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.1]">
              Очный математический лагерь МТ Кружков
            </h1>
            <p className="text-base md:text-lg text-muted-foreground">
              Сильная олимпиадная математика, живая среда и летний отдых в Подмосковье
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="badge-green"><Calendar size={14} /> 26 июля — 9 августа</span>
              <span className="badge-green"><MapPin size={14} /> Коломна</span>
              <span className="badge-green"><Users size={14} /> 4–10 класс</span>
              <span className="badge-green"><CheckCircle size={14} /> Всё включено</span>
              <span className="badge-green"><Bus size={14} /> Трансфер из Москвы</span>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <button onClick={openModal} className="h-12 px-7 rounded-2xl bg-primary text-primary-foreground font-semibold text-sm" style={{ boxShadow: "var(--green-glow)" }}>
                Оставить заявку
              </button>
              <a href="#how" className="h-12 px-7 rounded-2xl font-medium text-sm text-foreground flex items-center gap-2" style={{ boxShadow: "var(--surface-elevated)" }}>
                Как устроен лагерь
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Value */}
      <section className="section-container py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: GraduationCap, title: "Сильная олимпиадная математика", desc: "Кружковый формат, устная сдача, индивидуальная работа" },
            { icon: Heart, title: "Мотивирующая среда", desc: "Дети учатся в компании увлечённых сверстников" },
            { icon: Sun, title: "Летний отдых и общение", desc: "Спорт, игры, мероприятия и новые друзья" },
            { icon: Shield, title: "Всё включено", desc: "Проживание, питание, трансфер из Москвы" },
          ].map((item, i) => (
            <div key={i} className="card-elevated p-5 space-y-3">
              <item.icon className="text-primary" size={22} />
              <h3 className="text-sm font-bold leading-snug">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How Camp Works */}
      <section id="how" className="bg-secondary py-16 md:py-20">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Как устроен лагерь</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {[
                { num: "2 недели", text: "Продолжительность смены" },
                { num: "4+2", text: "Четыре учебных дня, два выходных в каждой четырёхдневке" },
                { num: "2–3 пары", text: "Две обязательные пары до обеда для всех. У 7–10 классов — третья учебная пара. У 4–6 — спецкурс по выбору" },
                { num: "🎲", text: "Последний учебный день четырёхдневки завершается математической игрой" },
              ].map((item, i) => (
                <div key={i} className="card-elevated p-5 flex gap-4 items-start bg-card">
                  <span className="text-lg font-extrabold text-primary shrink-0 w-16 text-center">{item.num}</span>
                  <p className="text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <div className="card-elevated overflow-hidden">
                <img src={campMath} alt="Математические занятия" className="w-full aspect-video object-cover" />
              </div>
              <div className="card-elevated overflow-hidden">
                <img src={campLife} alt="Лагерная жизнь" className="w-full aspect-video object-cover" />
              </div>
            </div>
          </div>
          <div className="mt-8">
            <button onClick={openModal} className="h-12 px-7 rounded-2xl bg-primary text-primary-foreground font-semibold text-sm" style={{ boxShadow: "var(--green-glow)" }}>
              Оставить заявку
            </button>
          </div>
        </div>
      </section>

      {/* Math + Life */}
      <section className="section-container py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Математика и летний отдых</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card-elevated p-6 space-y-4">
            <h3 className="text-lg font-bold flex items-center gap-2"><BookOpen size={18} className="text-primary" /> Математика</h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {[
                "Классический кружковый формат: объяснение темы → задачи → устная сдача",
                "Много индивидуального общения с преподавателем",
                "Преподаватели и ассистенты работают один на один",
                "Большой объём занятий — учебный буст, сопоставимый с большой частью годового кружка",
              ].map((t, i) => (
                <li key={i} className="flex gap-2"><CheckCircle size={14} className="text-primary shrink-0 mt-0.5" />{t}</li>
              ))}
            </ul>
          </div>
          <div className="card-elevated p-6 space-y-4">
            <h3 className="text-lg font-bold flex items-center gap-2"><Sun size={18} className="text-primary" /> Жизнь в лагере</h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {[
                "Зарядка и спортивные активности",
                "Прогулки по территории парк-отеля",
                "Настольные игры и спецкурсы",
                "Вечерние мероприятия и общение",
              ].map((t, i) => (
                <li key={i} className="flex gap-2"><CheckCircle size={14} className="text-primary shrink-0 mt-0.5" />{t}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="card-elevated overflow-hidden"><img src={campPool} alt="Бассейн" className="w-full aspect-[4/3] object-cover" /></div>
          <div className="card-elevated overflow-hidden"><img src={campSports} alt="Спорт" className="w-full aspect-[4/3] object-cover" /></div>
        </div>
      </section>

      {/* Why Strong Math */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Почему математика действительно сильная</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { metric: "1:6", label: "Один взрослый на шесть детей" },
              { metric: "100%", label: "Все взрослые на смене — математики" },
              { metric: "Устно", label: "Живая устная сдача задач" },
              { metric: "Кружок", label: "Формат кружка, а не потоковых лекций" },
              { metric: "Буст", label: "Объём, сравнимый с частью годового кружка" },
              { metric: "Лично", label: "Содержательная обратная связь каждому" },
            ].map((item, i) => (
              <div key={i} className="card-elevated p-5 text-center bg-card">
                <p className="text-2xl font-extrabold text-primary mb-1">{item.metric}</p>
                <p className="text-xs text-muted-foreground leading-snug">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <button onClick={openModal} className="h-11 px-6 rounded-2xl bg-primary text-primary-foreground font-semibold text-sm">
              Оставить заявку
            </button>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-container py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Команда</h2>
        <div className="grid md:grid-cols-3 gap-5">
          <TeamCard name="Попов Леонид Андреевич" role="Руководитель МТ Кружков" bio="Руководитель математической программы лагеря. Создатель и вдохновитель МТ Кружков." photo={teamPopov} />
          <TeamCard name="Мушинская Анастасия Владимировна" role="Начальник смены" bio="Отвечает за организацию лагерной жизни, безопасность и комфорт детей." photo={teamMushinskaya} />
          <TeamCard name="Балмасов Евгений Сергеевич" role="Заместитель руководителя" bio="Координирует работу преподавателей и ассистентов на смене." photo={teamBalmasov} />
        </div>
      </section>

      {/* Life / Safety */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Быт, безопасность и связь</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: Bed, text: "По 3 человека в номере" },
              { icon: Droplets, text: "Душ и туалет в номере" },
              { icon: Utensils, text: "Питание — шведский стол" },
              { icon: Shield, text: "Огороженная территория" },
              { icon: Heart, text: "Медпункт на территории" },
              { icon: UserCheck, text: "Взрослые рядом весь день" },
              { icon: Phone, text: "Родительские чаты и новости" },
              { icon: Bus, text: "Трансфер из Москвы" },
              { icon: Phone, text: "Связь с ребёнком вечером" },
            ].map((item, i) => (
              <div key={i} className="card-elevated p-4 flex items-start gap-3 bg-card">
                <item.icon size={16} className="text-primary shrink-0 mt-0.5" />
                <p className="text-xs font-medium leading-snug">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-container py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Отзывы родителей</h2>
        <ReviewSlider reviews={reviews} />
      </section>

      {/* Gallery */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Атмосфера лагеря</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[campMath, campLife, campPool, campSports].map((src, i) => (
              <div key={i} className="card-elevated overflow-hidden">
                <img src={src} alt="Фото из лагеря" className="w-full aspect-square object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price */}
      <section className="section-container py-16 md:py-20">
        <div className="card-elevated p-8 md:p-10 bg-secondary text-center max-w-lg mx-auto space-y-4">
          <h2 className="text-2xl font-bold">Стоимость</h2>
          <div>
            <span className="text-lg text-muted-foreground line-through mr-2">125 000 ₽</span>
            <span className="text-3xl font-extrabold text-primary-foreground">120 000 ₽</span>
          </div>
          <p className="text-xs text-muted-foreground">Цена при оплате до 15 мая</p>
          <p className="text-sm text-muted-foreground">Для учеников МТ Кружков и участников прошлых смен — специальные условия</p>
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
          Если хотите обсудить, подойдёт ли лагерь вашему ребёнку, оставьте заявку — мы свяжемся и всё расскажем.
        </p>
        <button onClick={openModal} className="h-12 px-8 rounded-2xl bg-primary text-primary-foreground font-semibold text-sm" style={{ boxShadow: "var(--green-glow)" }}>
          Оставить заявку
        </button>
      </section>

      {/* Other formats */}
      <section className="section-container pb-16 md:pb-20">
        <h3 className="text-lg font-bold mb-4">Другие летние форматы</h3>
        <div className="grid md:grid-cols-2 gap-4">
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
      <StickyCTA onClick={openModal} />
      <SoftPopup onCtaClick={openModal} />
      <LeadModal open={modalOpen} onOpenChange={setModalOpen} telegramLinks={TG_LINKS} />
    </div>
  );
};

export default OfflineCamp;
