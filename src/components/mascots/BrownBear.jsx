// 🐻 Brown Bear — gấu nâu tròn, béo, fluffy, hơi buồn ngủ.
// Các phần tử có class để CSS điều khiển animation (thở, chớp mắt, ngáp).
export default function BrownBear({ sleepy = false, className = '', ...rest }) {
  return (
    <svg
      className={`mascot bear ${sleepy ? 'is-sleepy' : ''} ${className}`}
      viewBox="0 0 240 220"
      role="img"
      aria-label="Gấu nâu"
      {...rest}
    >
      <defs>
        <radialGradient id="bearBody" cx="42%" cy="34%" r="80%">
          <stop offset="0%" stopColor="#c9975f" />
          <stop offset="55%" stopColor="#b07f47" />
          <stop offset="100%" stopColor="#9a6b39" />
        </radialGradient>
        <radialGradient id="bearBelly" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#f4e2c6" />
          <stop offset="100%" stopColor="#e6cfa8" />
        </radialGradient>
      </defs>

      {/* bóng đổ mềm */}
      <ellipse className="mascot-shadow" cx="120" cy="204" rx="78" ry="13" />

      <g className="mascot-body">
        {/* chân */}
        <ellipse cx="82" cy="188" rx="27" ry="20" fill="#9a6b39" />
        <ellipse cx="158" cy="188" rx="27" ry="20" fill="#9a6b39" />
        <ellipse cx="82" cy="192" rx="15" ry="10" fill="#f4e2c6" />
        <ellipse cx="158" cy="192" rx="15" ry="10" fill="#f4e2c6" />

        {/* thân tròn ú — bụng phệ dễ thương */}
        <ellipse cx="120" cy="142" rx="90" ry="74" fill="url(#bearBody)" />
        <ellipse cx="120" cy="156" rx="63" ry="56" fill="url(#bearBelly)" />

        {/* tay */}
        <g className="bear-arm bear-arm-l">
          <ellipse cx="46" cy="132" rx="24" ry="34" fill="#a4753f" />
        </g>
        <g className="bear-arm bear-arm-r">
          <ellipse cx="194" cy="132" rx="24" ry="34" fill="#a4753f" />
        </g>

        {/* đầu */}
        <g className="mascot-head bear-head">
          {/* tai */}
          <circle cx="72" cy="42" r="26" fill="#9a6b39" />
          <circle cx="168" cy="42" r="26" fill="#9a6b39" />
          <circle cx="72" cy="42" r="13" fill="#d8ad76" />
          <circle cx="168" cy="42" r="13" fill="#d8ad76" />

          <ellipse cx="120" cy="72" rx="72" ry="62" fill="url(#bearBody)" />

          {/* mõm cream */}
          <ellipse cx="120" cy="92" rx="38" ry="30" fill="#f4e2c6" />

          {/* má hồng */}
          <ellipse className="cheek" cx="74" cy="90" rx="13" ry="9" fill="#e9a99a" opacity="0.55" />
          <ellipse className="cheek" cx="166" cy="90" rx="13" ry="9" fill="#e9a99a" opacity="0.55" />

          {/* mắt — buồn ngủ (nét cong) */}
          <g className="bear-eyes">
            <path className="eye eye-l" d="M84 78 q11 10 22 0" fill="none" stroke="#4a3220" strokeWidth="4.5" strokeLinecap="round" />
            <path className="eye eye-r" d="M134 78 q11 10 22 0" fill="none" stroke="#4a3220" strokeWidth="4.5" strokeLinecap="round" />
          </g>

          {/* mũi + miệng */}
          <ellipse cx="120" cy="88" rx="9" ry="6.5" fill="#5a3d26" />
          <path className="bear-mouth" d="M120 94 q0 9 -10 11 M120 94 q0 9 10 11" fill="none" stroke="#5a3d26" strokeWidth="3" strokeLinecap="round" />

          {/* bong bóng ngủ Zzz */}
          <g className="sleep-z">
            <text x="182" y="34" fontFamily="Baloo 2, sans-serif" fontWeight="700" fontSize="18" fill="#8c9bd0">z</text>
            <text x="196" y="20" fontFamily="Baloo 2, sans-serif" fontWeight="700" fontSize="13" fill="#8c9bd0">z</text>
          </g>
        </g>
      </g>
    </svg>
  );
}
