const Logo = ({ size = 40, className = '' }) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="100" cy="100" r="95" fill="var(--primary)" />
      {/* W left */}
      <path
        d="M25 60 L45 140 L65 90 L85 140 L105 60"
        stroke="var(--accent)"
        strokeWidth="12"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* House */}
      <rect x="75" y="70" width="50" height="70" fill="var(--dark)" rx="3" />
      <rect x="82" y="80" width="12" height="12" fill="var(--primary)" rx="2" />
      <rect x="106" y="80" width="12" height="12" fill="var(--primary)" rx="2" />
      <rect x="82" y="100" width="12" height="12" fill="var(--primary)" rx="2" />
      <rect x="106" y="100" width="12" height="12" fill="var(--primary)" rx="2" />
      <rect x="92" y="120" width="16" height="20" fill="var(--primary)" rx="2" />
      {/* Chimney smoke */}
      <path d="M100 70 Q100 55 100 60" stroke="var(--dark)" strokeWidth="4" fill="none" />
      <text
        x="100"
        y="58"
        fontSize="16"
        fill="var(--dark)"
        fontFamily="Outfit, sans-serif"
        textAnchor="middle"
        fontWeight="500"
      >
        wash
      </text>
      {/* W right */}
      <path
        d="M95 60 L115 140 L135 90 L155 140 L175 60"
        stroke="var(--accent)"
        strokeWidth="12"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Logo;

