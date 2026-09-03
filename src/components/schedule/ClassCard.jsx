import { periodSpan, creditByCourse } from '../../data/schedule.js';

// Bảng màu accent xoay vòng theo mã HP để mỗi môn có sắc thái riêng, dịu.
const accents = ['peach', 'sky', 'sage', 'lilac', 'honey', 'rose'];
export function accentFor(code) {
  let sum = 0;
  for (const ch of String(code)) sum += ch.charCodeAt(0);
  return accents[sum % accents.length];
}

export default function ClassCard({ cls, index, onOpen }) {
  const accent = accentFor(cls.courseCode);
  const timeSpan = periodSpan(cls.periodStart, cls.periodEnd);
  const credits = creditByCourse[cls.courseCode];

  return (
    <button
      type="button"
      className={`class-card accent-${accent} reveal`}
      style={{ '--stagger': index }}
      onClick={() => onOpen(cls)}
      aria-label={`${cls.subject}, tiết ${cls.periodStart}–${cls.periodEnd}, phòng ${cls.room}`}
    >
      <span className="class-card__stripe" />
      <span className="class-card__period">
        <span className="dot" />
        Tiết {cls.periodStart}–{cls.periodEnd}
        <span className="class-card__time">{timeSpan}</span>
      </span>

      <h4 className="class-card__title">{cls.subject}</h4>

      <div className="class-card__meta">
        <span className="chip chip--room">📍 {cls.room}</span>
        <span className="chip chip--code">HP {cls.courseCode}</span>
        {credits ? <span className="chip chip--credit">{credits} TC</span> : null}
      </div>

      <div className="class-card__lecturer">🧑‍🏫 {cls.lecturer}</div>
    </button>
  );
}
