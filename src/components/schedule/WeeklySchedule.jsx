import { useState } from 'react';
import { dayOrder, classesByDay, getWeekRange } from '../../data/schedule.js';
import DayColumn from './DayColumn.jsx';
import ClassModal from './ClassModal.jsx';

const byDay = classesByDay();

export default function WeeklySchedule() {
  const [week, setWeek] = useState(1);
  const [active, setActive] = useState(null); // ngày được chọn ở mobile
  const [modal, setModal] = useState(null);
  const range = getWeekRange(week);

  // ngày mặc định cho mobile: ngày đầu tiên có lớp
  const firstClassDay = dayOrder.find((d) => byDay[d].length > 0) || 'monday';
  const selected = active || firstClassDay;

  return (
    <section className="weekly reveal" id="weekly" aria-label="Thời khóa biểu tuần">
      <div className="weekly__head">
        <div className="weekly__titles">
          <h2 className="section-title">Weekly Schedule</h2>
          <p className="weekly__range">{range.monday} → {range.sunday}</p>
        </div>
        <div className="weekly__nav" role="group" aria-label="Chuyển tuần">
          <button
            className="wk-btn"
            onClick={() => setWeek((w) => Math.max(1, w - 1))}
            disabled={week === 1}
            aria-label="Tuần trước"
          >‹ <span>Previous</span></button>
          <span className="wk-label">{range.label}</span>
          <button
            className="wk-btn"
            onClick={() => setWeek((w) => w + 1)}
            aria-label="Tuần sau"
          ><span>Next</span> ›</button>
        </div>
      </div>

      {/* Mobile: bộ chọn ngày ngang */}
      <div className="day-picker" role="tablist" aria-label="Chọn ngày">
        {dayOrder.map((d) => {
          const meta = dayMetaShort(d);
          const has = byDay[d].length > 0;
          return (
            <button
              key={d}
              role="tab"
              aria-selected={selected === d}
              className={`day-pill ${selected === d ? 'is-active' : ''} ${has ? '' : 'is-rest'}`}
              onClick={() => setActive(d)}
            >
              {meta}
              {has ? <span className="day-pill__dot" /> : null}
            </button>
          );
        })}
      </div>

      {/* Desktop / tablet: lưới các ngày */}
      <div className="week-grid" key={week}>
        {dayOrder.map((d) => (
          <DayColumn key={d} day={d} date={range.dates[d]} list={byDay[d]} onOpen={setModal} />
        ))}
      </div>

      {/* Mobile: chỉ hiện ngày được chọn */}
      <div className="week-single" key={`m-${week}-${selected}`}>
        <DayColumn day={selected} date={range.dates[selected]} list={byDay[selected]} onOpen={setModal} />
      </div>

      {modal ? <ClassModal cls={modal} onClose={() => setModal(null)} /> : null}
    </section>
  );
}

function dayMetaShort(d) {
  const map = { monday: 'T2', tuesday: 'T3', wednesday: 'T4', thursday: 'T5', friday: 'T6', saturday: 'T7', sunday: 'CN' };
  return map[d];
}
