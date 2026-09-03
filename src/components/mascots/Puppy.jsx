// 🐶 Puppy — cún con tai cụp, mắt to, nhỏ nhắn hơn gấu, tinh nghịch.
export default function Puppy({ className = '', ...rest }) {
  return (
    <svg
      className={`mascot puppy ${className}`}
      viewBox="0 0 220 210"
      role="img"
      aria-label="Cún con tai cụp"
      {...rest}
    >
      <defs>
        <radialGradient id="pupBody" cx="42%" cy="34%" r="80%">
          <stop offset="0%" stopColor="#f0d9b4" />
          <stop offset="60%" stopColor="#e3c391" />
          <stop offset="100%" stopColor="#d3ad72" />
        </radialGradient>
        <radialGradient id="pupEar" cx="50%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#b98a52" />
          <stop offset="100%" stopColor="#9d6f3c" />
        </radialGradient>
      </defs>

      <ellipse className="mascot-shadow" cx="110" cy="196" rx="66" ry="11" />

      <g className="mascot-body">
        {/* đuôi vẫy */}
        <g className="puppy-tail">
          <path d="M172 150 q34 -10 30 -38 q-4 26 -30 30 z" fill="#d3ad72" />
        </g>

        {/* chân */}
        <ellipse cx="82" cy="178" rx="20" ry="16" fill="#d3ad72" />
        <ellipse cx="140" cy="178" rx="20" ry="16" fill="#d3ad72" />
        <ellipse cx="82" cy="182" rx="11" ry="7" fill="#f4e6cf" />
        <ellipse cx="140" cy="182" rx="11" ry="7" fill="#f4e6cf" />

        {/* thân */}
        <ellipse cx="111" cy="140" rx="60" ry="52" fill="url(#pupBody)" />
        <ellipse cx="111" cy="150" rx="34" ry="34" fill="#f6ead4" />

        {/* đầu */}
        <g className="mascot-head puppy-head">
          {/* tai cụp */}
          <g className="puppy-ear puppy-ear-l">
            <path d="M64 40 q-34 6 -34 58 q0 22 20 26 q10 -46 26 -66 z" fill="url(#pupEar)" />
          </g>
          <g className="puppy-ear puppy-ear-r">
            <path d="M158 40 q34 6 34 58 q0 22 -20 26 q-10 -46 -26 -66 z" fill="url(#pupEar)" />
          </g>

          <ellipse cx="111" cy="76" rx="60" ry="54" fill="url(#pupBody)" />

          {/* đốm nâu quanh mắt phải cho cá tính */}
          <ellipse cx="138" cy="70" rx="22" ry="24" fill="#c79a5f" opacity="0.5" />

          {/* mõm */}
          <ellipse cx="111" cy="94" rx="30" ry="24" fill="#f6ead4" />

          {/* má hồng */}
          <ellipse className="cheek" cx="70" cy="92" rx="11" ry="8" fill="#eda394" opacity="0.6" />
          <ellipse className="cheek" cx="152" cy="92" rx="11" ry="8" fill="#eda394" opacity="0.6" />

          {/* mắt to long lanh */}
          <g className="puppy-eyes">
            <g className="eye eye-l">
              <ellipse cx="88" cy="74" rx="10" ry="12" fill="#3c2a1a" />
              <circle cx="85" cy="70" r="3.4" fill="#fff" />
              <circle cx="90" cy="78" r="1.6" fill="#fff" opacity="0.8" />
            </g>
            <g className="eye eye-r">
              <ellipse cx="134" cy="74" rx="10" ry="12" fill="#3c2a1a" />
              <circle cx="131" cy="70" r="3.4" fill="#fff" />
              <circle cx="136" cy="78" r="1.6" fill="#fff" opacity="0.8" />
            </g>
          </g>

          {/* mũi + miệng */}
          <ellipse cx="111" cy="90" rx="8" ry="6" fill="#4a3220" />
          <path d="M111 96 v6 M111 102 q-8 8 -16 4 M111 102 q8 8 16 4" fill="none" stroke="#5a3d26" strokeWidth="3" strokeLinecap="round" />
          {/* lưỡi nhỏ tinh nghịch */}
          <path className="puppy-tongue" d="M104 108 q7 12 14 0 z" fill="#ec9a94" />
        </g>
      </g>
    </svg>
  );
}
