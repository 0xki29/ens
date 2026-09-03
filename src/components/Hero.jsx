import { semester, totalSubjects, totalCredits } from '../data/schedule.js';
import MascotScene from './mascots/MascotScene.jsx';

function greeting() {
  const h = new Date().getHours();
  if (h < 12) return { text: 'Good morning', emoji: '🌤️' };
  if (h < 18) return { text: 'Good afternoon', emoji: '☀️' };
  return { text: 'Good evening', emoji: '🌙' };
}

export default function Hero() {
  const g = greeting();
  return (
    <header className="hero">
      <div className="hero__text">
        <p className="hero__greet reveal">{g.text} {g.emoji}</p>
        <h1 className="hero__title reveal">Your University Life</h1>
        <p className="hero__semester reveal">{semester.title}</p>

        <div className="hero__pills reveal">
          <span className="hero__pill"><b>{totalSubjects}</b> môn</span>
          <span className="hero__pill-dot" aria-hidden="true">·</span>
          <span className="hero__pill"><b>{totalCredits}</b> tín chỉ</span>
        </div>

        <div className="hero__semcard reveal">
          <div>
            <span className="hero__semcard-label">Học kỳ</span>
            <span className="hero__semcard-value">{semester.shortTitle}</span>
          </div>
          <div className="hero__semcard-sep" />
          <div>
            <span className="hero__semcard-label">Bắt đầu</span>
            <span className="hero__semcard-value">{semester.startLabel}</span>
          </div>
        </div>
      </div>

      <div className="hero__art">
        <MascotScene variant="hero" />
      </div>
    </header>
  );
}
