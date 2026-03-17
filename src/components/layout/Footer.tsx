import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border/50 bg-secondary py-12 md:py-16">
    <div className="section-container">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <h4 className="text-base font-bold mb-3">МТ Кружки</h4>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            Олимпиадная математика для школьников 4–10 классов. Кружки, лагеря, онлайн-программы.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">Летние программы</h4>
          <nav className="flex flex-col gap-2">
            <Link to="/summer-olimp-2026" className="text-sm text-foreground hover:text-primary-foreground transition-colors">Очный лагерь</Link>
            <Link to="/summer-online-2026" className="text-sm text-foreground hover:text-primary-foreground transition-colors">Онлайн-лагерь</Link>
            <span className="text-sm text-muted-foreground">Подготовка к учебному году — скоро</span>
          </nav>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">Контакты</h4>
          <nav className="flex flex-col gap-2">
            <a href="https://t.me/MT_Workshop_Bot" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-primary-foreground transition-colors">Telegram</a>
            <a href="https://mtcircles.ru" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-primary-foreground transition-colors">mtcircles.ru</a>
          </nav>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-border/50 text-xs text-muted-foreground">
        © 2026 МТ Кружки. Все права защищены.
      </div>
    </div>
  </footer>
);

export default Footer;
