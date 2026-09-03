import { dayMeta } from '../../data/schedule.js';
import ClassCard from './ClassCard.jsx';
import EmptyDay from './EmptyDay.jsx';

export default function DayColumn({ day, date, list, onOpen }) {
  const meta = dayMeta[day];
  const hasClass = list.length > 0;
  return (
    <section className={`day-col ${hasClass ? 'has-class' : 'is-rest'}`} aria-label={meta.long}>
      <header className="day-col__head">
        <div className="day-col__name">
          <span className="day-col__vi">{meta.vi}</span>
          <span className="day-col__date">{date}</span>
        </div>
        {hasClass ? (
          <span className="day-col__count">{list.length} lớp</span>
        ) : (
          <span className="day-col__count day-col__count--rest">nghỉ</span>
        )}
      </header>

      <div className="day-col__body">
        {hasClass
          ? list.map((cls, i) => (
              <ClassCard key={cls.courseCode + cls.periodStart} cls={cls} index={i} onOpen={onOpen} />
            ))
          : <EmptyDay />}
      </div>
    </section>
  );
}
