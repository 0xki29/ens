// 🫂 CoupleHug — Brown Bear béo ú ôm Puppy ngồi trong lòng.
// Gấu vòng hai tay ôm cún, cún tựa vào ngực gấu, cả hai đều happy.
// variant: 'hug' (thức, cười) | 'sleep' (nhắm mắt, có Zzz) — dùng cho ngày nghỉ.
export default function CoupleHug({ variant = 'hug', className = '', ...rest }) {
  const sleeping = variant === 'sleep';
  return (
    <svg
      className={`mascot couplehug ${sleeping ? 'is-sleep' : ''} ${className}`}
      viewBox="0 0 320 262"
      role="img"
      aria-label="Gấu nâu đang ôm cún con"
      {...rest}
    >
      <defs>
        <radialGradient id="hbBody" cx="42%" cy="32%" r="82%">
          <stop offset="0%" stopColor="#cd9c63" />
          <stop offset="55%" stopColor="#b07f47" />
          <stop offset="100%" stopColor="#986937" />
        </radialGradient>
        <radialGradient id="hbBelly" cx="50%" cy="38%" r="72%">
          <stop offset="0%" stopColor="#f6e6cb" />
          <stop offset="100%" stopColor="#e7d0a9" />
        </radialGradient>
        <radialGradient id="hpBody" cx="42%" cy="32%" r="82%">
          <stop offset="0%" stopColor="#f2ddbb" />
          <stop offset="60%" stopColor="#e5c795" />
          <stop offset="100%" stopColor="#d5af74" />
        </radialGradient>
        <radialGradient id="hpEar" cx="50%" cy="28%" r="82%">
          <stop offset="0%" stopColor="#bd8e55" />
          <stop offset="100%" stopColor="#9f7140" />
        </radialGradient>
      </defs>

      <ellipse className="mascot-shadow" cx="160" cy="246" rx="108" ry="14" />

      {/* ============ BEAR (phía sau, ôm) ============ */}
      <g className="hug-bear">
        {/* chân sau ló ra */}
        <ellipse cx="92"  cy="212" rx="27" ry="19" fill="#986937" />
        <ellipse cx="228" cy="212" rx="27" ry="19" fill="#986937" />
        <ellipse cx="92"  cy="216" rx="15" ry="9" fill="#f6e6cb" />
        <ellipse cx="228" cy="216" rx="15" ry="9" fill="#f6e6cb" />

        {/* thân gấu tròn ú */}
        <ellipse cx="160" cy="150" rx="102" ry="88" fill="url(#hbBody)" />

        {/* đầu gấu — cười tươi */}
        <g className="hug-bear-head">
          <circle cx="106" cy="32" r="27" fill="#986937" />
          <circle cx="214" cy="32" r="27" fill="#986937" />
          <circle cx="106" cy="32" r="13.5" fill="#d9ae76" />
          <circle cx="214" cy="32" r="13.5" fill="#d9ae76" />

          <ellipse cx="160" cy="72" rx="74" ry="63" fill="url(#hbBody)" />
          <ellipse cx="160" cy="92" rx="39" ry="31" fill="url(#hbBelly)" />

          {/* má hồng */}
          <ellipse className="blush" cx="112" cy="90" rx="14" ry="9.5" fill="#ec9a9a" opacity="0.6" />
          <ellipse className="blush" cx="208" cy="90" rx="14" ry="9.5" fill="#ec9a9a" opacity="0.6" />

          {/* mắt */}
          <g className="bear-eyes">
            {sleeping ? (
              <>
                <path d="M126 80 q9 6 18 0" fill="none" stroke="#4a3220" strokeWidth="4.5" strokeLinecap="round" />
                <path d="M176 80 q9 6 18 0" fill="none" stroke="#4a3220" strokeWidth="4.5" strokeLinecap="round" />
              </>
            ) : (
              <>
                {/* mắt cong hạnh phúc ◡ */}
                <path d="M125 82 q10 -12 20 0" fill="none" stroke="#4a3220" strokeWidth="4.8" strokeLinecap="round" />
                <path d="M175 82 q10 -12 20 0" fill="none" stroke="#4a3220" strokeWidth="4.8" strokeLinecap="round" />
                <circle cx="121" cy="82" r="2" fill="#fff" opacity="0.7" />
              </>
            )}
          </g>

          {/* mũi + miệng cười */}
          <ellipse cx="160" cy="88" rx="9.5" ry="7" fill="#5a3d26" />
          <path d="M160 95 v4" stroke="#5a3d26" strokeWidth="3" strokeLinecap="round" />
          <path className="bear-smile" d="M143 100 Q160 116 177 100" fill="none" stroke="#5a3d26" strokeWidth="3.4" strokeLinecap="round" />

          {/* Zzz khi ngủ */}
          {sleeping && (
            <g className="sleep-z">
              <text x="222" y="30" fontFamily="Baloo 2, sans-serif" fontWeight="700" fontSize="18" fill="#8c9bd0">z</text>
              <text x="236" y="16" fontFamily="Baloo 2, sans-serif" fontWeight="700" fontSize="12" fill="#8c9bd0">z</text>
            </g>
          )}
        </g>
      </g>

      {/* ============ PUPPY (ngồi trong lòng gấu) ============ */}
      <g className="hug-puppy">
        {/* đuôi vẫy */}
        <g className="puppy-tail">
          <path d="M212 196 q30 -6 30 -30 q-6 22 -30 24 z" fill="#d5af74" />
        </g>

        <ellipse cx="160" cy="200" rx="55" ry="46" fill="url(#hpBody)" />
        <ellipse cx="160" cy="208" rx="32" ry="30" fill="#f7ecd6" />

        <g className="hug-puppy-head">
          {/* tai cụp */}
          <g className="puppy-ear puppy-ear-l">
            <path d="M126 128 q-30 4 -30 44 q0 18 17 21 q9 -36 24 -50 z" fill="url(#hpEar)" />
          </g>
          <g className="puppy-ear puppy-ear-r">
            <path d="M194 128 q30 4 30 44 q0 18 -17 21 q-9 -36 -24 -50 z" fill="url(#hpEar)" />
          </g>

          <ellipse cx="160" cy="156" rx="47" ry="43" fill="url(#hpBody)" />
          <ellipse cx="181" cy="150" rx="18" ry="20" fill="#caa066" opacity="0.45" />
          <ellipse cx="160" cy="172" rx="26" ry="20" fill="#f7ecd6" />

          {/* má hồng */}
          <ellipse className="blush" cx="122" cy="168" rx="10" ry="7.5" fill="#ef9e94" opacity="0.65" />
          <ellipse className="blush" cx="198" cy="168" rx="10" ry="7.5" fill="#ef9e94" opacity="0.65" />

          {/* mắt to */}
          <g className="puppy-eyes">
            {sleeping ? (
              <>
                <path d="M132 152 q8 6 16 0" fill="none" stroke="#3c2a1a" strokeWidth="4" strokeLinecap="round" />
                <path d="M172 152 q8 6 16 0" fill="none" stroke="#3c2a1a" strokeWidth="4" strokeLinecap="round" />
              </>
            ) : (
              <>
                <g className="eye eye-l">
                  <ellipse cx="140" cy="153" rx="9" ry="11" fill="#3c2a1a" />
                  <circle cx="137" cy="149" r="3" fill="#fff" />
                </g>
                <g className="eye eye-r">
                  <ellipse cx="180" cy="153" rx="9" ry="11" fill="#3c2a1a" />
                  <circle cx="177" cy="149" r="3" fill="#fff" />
                </g>
              </>
            )}
          </g>

          {/* mũi + miệng cười */}
          <ellipse cx="160" cy="168" rx="7.5" ry="5.5" fill="#4a3220" />
          <path d="M160 173 v4 M160 177 q-7 7 -14 3 M160 177 q7 7 14 3" fill="none" stroke="#5a3d26" strokeWidth="2.8" strokeLinecap="round" />
          {!sleeping && <path className="puppy-tongue" d="M153 182 q7 10 14 0 z" fill="#ee9a94" />}
        </g>
      </g>

      {/* ============ TAY GẤU ÔM (vẽ sau cùng = ở trước, ôm cún) ============ */}
      <g className="hug-arm hug-arm-l">
        <ellipse cx="112" cy="184" rx="21" ry="44" fill="#a4753f" transform="rotate(-42 112 184)" />
        <ellipse cx="141" cy="208" rx="16" ry="13" fill="#c79458" />
      </g>
      <g className="hug-arm hug-arm-r">
        <ellipse cx="208" cy="184" rx="21" ry="44" fill="#a4753f" transform="rotate(42 208 184)" />
        <ellipse cx="179" cy="208" rx="16" ry="13" fill="#c79458" />
      </g>
    </svg>
  );
}
