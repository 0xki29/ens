// Nền nhiều lớp: bầu trời pastel → mặt trời → mây → cảnh vật (cây, campus).
// Mỗi lớp có data-depth để App áp parallax nhẹ theo chuột.
export default function Background() {
  return (
    <div className="bg" aria-hidden="true">
      <div className="bg-sky" />
      <div className="bg-sun" data-depth="0.6" />

      {/* mây mềm */}
      <div className="bg-clouds" data-depth="1.6">
        <Cloud className="cloud cloud--1" />
        <Cloud className="cloud cloud--2" />
        <Cloud className="cloud cloud--3" />
        <Cloud className="cloud cloud--4" />
      </div>

      {/* hạt lấp lánh */}
      <div className="bg-sparkles" data-depth="2.2">
        {Array.from({ length: 14 }).map((_, i) => (
          <span key={i} className="sparkle" style={{ '--i': i }} />
        ))}
      </div>

      {/* cảnh vật phía dưới */}
      <div className="bg-scene" data-depth="0.9">
        <svg className="bg-hills" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path d="M0 200 Q360 120 720 190 T1440 170 V320 H0 Z" fill="#cfe3c4" />
          <path d="M0 250 Q380 190 760 240 T1440 230 V320 H0 Z" fill="#b9d6ad" />
        </svg>

        {/* campus silhouette */}
        <svg className="bg-campus" viewBox="0 0 300 180">
          <rect x="40" y="70" width="220" height="100" rx="6" fill="#e7c7a6" />
          <polygon points="30,70 150,20 270,70" fill="#d3a878" />
          <rect x="135" y="95" width="30" height="75" rx="4" fill="#c8996a" />
          <rect x="70" y="100" width="22" height="26" rx="3" fill="#fbf1dd" />
          <rect x="208" y="100" width="22" height="26" rx="3" fill="#fbf1dd" />
          <rect x="70" y="140" width="22" height="26" rx="3" fill="#fbf1dd" />
          <rect x="208" y="140" width="22" height="26" rx="3" fill="#fbf1dd" />
          <circle cx="150" cy="16" r="6" fill="#e9b96f" />
        </svg>

        {/* cây */}
        <svg className="bg-tree" viewBox="0 0 160 200">
          <rect x="70" y="110" width="18" height="90" rx="8" fill="#9d7048" />
          <circle cx="79" cy="80" r="52" fill="#a9cf98" />
          <circle cx="46" cy="98" r="34" fill="#9bc389" />
          <circle cx="112" cy="98" r="34" fill="#b6d8a6" />
          <circle cx="79" cy="60" r="30" fill="#bfe0af" />
        </svg>
      </div>
    </div>
  );
}

function Cloud({ className }) {
  return (
    <svg className={className} viewBox="0 0 200 90">
      <g fill="#ffffff">
        <circle cx="55" cy="55" r="30" />
        <circle cx="95" cy="42" r="38" />
        <circle cx="140" cy="55" r="30" />
        <rect x="45" y="52" width="105" height="34" rx="17" />
      </g>
    </svg>
  );
}
