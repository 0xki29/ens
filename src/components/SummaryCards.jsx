import { totalSubjects, totalCredits, studyDaysCount, restDaysCount } from '../data/schedule.js';

const stats = [
  { value: totalSubjects, label: 'Môn học', icon: '📚', accent: 'peach' },
  { value: totalCredits, label: 'Tín chỉ', icon: '🎓', accent: 'sky' },
  { value: studyDaysCount, label: 'Ngày học', icon: '✏️', accent: 'sage' },
  { value: restDaysCount, label: 'Ngày nghỉ', icon: '🌙', accent: 'lilac' },
];

export default function SummaryCards() {
  return (
    <section className="summary" aria-label="Tổng quan học kỳ">
      {stats.map((s, i) => (
        <div className={`stat-card accent-${s.accent} reveal`} key={s.label} style={{ '--stagger': i }}>
          <span className="stat-card__icon">{s.icon}</span>
          <span className="stat-card__value">{s.value}</span>
          <span className="stat-card__label">{s.label}</span>
        </div>
      ))}
    </section>
  );
}
