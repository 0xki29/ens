import { useEffect, useRef } from 'react';
import { periodSpan, creditByCourse, dayMeta } from '../../data/schedule.js';
import { accentFor } from './ClassCard.jsx';

// Modal chi tiết môn — mở khi click vào card. Có focus-trap nhẹ + đóng bằng Esc.
export default function ClassModal({ cls, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!cls) return null;
  const accent = accentFor(cls.courseCode);
  const credits = creditByCourse[cls.courseCode];

  const rows = [
    { icon: '🔖', label: 'Mã học phần', value: cls.courseCode },
    { icon: '🧑‍🏫', label: 'Giảng viên', value: cls.lecturer },
    { icon: '📍', label: 'Phòng học', value: cls.room },
    { icon: '⏰', label: 'Tiết', value: `${cls.periodStart}–${cls.periodEnd} · ${periodSpan(cls.periodStart, cls.periodEnd)}` },
    { icon: '📅', label: 'Ngày học', value: dayMeta[cls.day].long },
    { icon: '🎓', label: 'Tín chỉ', value: credits ? `${credits} tín chỉ` : '—' },
  ];

  return (
    <div className="modal-overlay" onClick={onClose} role="presentation">
      <div
        className={`modal accent-${accent}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal__glow" />
        <button ref={closeRef} className="modal__close" onClick={onClose} aria-label="Đóng">✕</button>
        <span className="modal__badge">Tiết {cls.periodStart}–{cls.periodEnd}</span>
        <h3 id="modal-title" className="modal__title">{cls.subject}</h3>
        <div className="modal__rows">
          {rows.map((r) => (
            <div className="modal__row" key={r.label}>
              <span className="modal__row-icon">{r.icon}</span>
              <span className="modal__row-label">{r.label}</span>
              <span className="modal__row-value">{r.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
