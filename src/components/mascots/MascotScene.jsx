import CoupleHug from './CoupleHug.jsx';

// Cảnh cặp đôi + pink heart particles.
// variant: 'hero' | 'rest' (ngày nghỉ, ngủ) | 'footer'
export default function MascotScene({ variant = 'hero' }) {
  const pose = variant === 'rest' ? 'sleep' : 'hug';
  // trái tim: nhiều kích thước, xuất hiện thưa (delay dài) → không spam
  const hearts = [
    { cls: 'h-sm',  x: 30, delay: 0 },
    { cls: 'h-tiny', x: 62, delay: 2.4 },
    { cls: 'h-md',  x: 48, delay: 5.1 },
    { cls: 'h-tiny', x: 74, delay: 7.6 },
    { cls: 'h-sm',  x: 22, delay: 9.9 },
  ];
  return (
    <div className={`mascot-scene mascot-scene--${variant}`} aria-hidden="true">
      <div className={`couple couple--${pose}`}>
        <CoupleHug variant={pose} />
        <div className="hearts">
          {hearts.map((h, i) => (
            <span
              key={i}
              className={`heart ${h.cls}`}
              style={{ '--hx': `${h.x}%`, '--hd': `${h.delay}s` }}
            >
              <svg viewBox="0 0 32 29" aria-hidden="true">
                <path d="M16 29S1 19 1 9.5C1 4 5 1 9 1c3 0 5.5 2 7 4 1.5-2 4-4 7-4 4 0 8 3 8 8.5C31 19 16 29 16 29z" />
              </svg>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
