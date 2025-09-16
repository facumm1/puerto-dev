interface FrogLogoProps {
  size?: number
  className?: string
}

export function FrogLogo({ size = 32, className = "" }: FrogLogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Frog body */}
      <ellipse cx="50" cy="60" rx="25" ry="20" fill="url(#frogGradient)" className="drop-shadow-lg" />

      {/* Frog head */}
      <ellipse cx="50" cy="35" rx="20" ry="18" fill="url(#frogGradient)" className="drop-shadow-lg" />

      {/* Eyes */}
      <circle cx="42" cy="28" r="6" fill="url(#eyeGradient)" className="drop-shadow-sm" />
      <circle cx="58" cy="28" r="6" fill="url(#eyeGradient)" className="drop-shadow-sm" />
      <circle cx="42" cy="26" r="3" fill="#000" />
      <circle cx="58" cy="26" r="3" fill="#000" />
      <circle cx="43" cy="25" r="1" fill="#fff" />
      <circle cx="59" cy="25" r="1" fill="#fff" />

      {/* Front legs */}
      <ellipse cx="35" cy="55" rx="8" ry="12" fill="url(#frogGradient)" className="drop-shadow-md" />
      <ellipse cx="65" cy="55" rx="8" ry="12" fill="url(#frogGradient)" className="drop-shadow-md" />

      {/* Back legs */}
      <ellipse cx="30" cy="70" rx="12" ry="8" fill="url(#frogGradient)" className="drop-shadow-md" />
      <ellipse cx="70" cy="70" rx="12" ry="8" fill="url(#frogGradient)" className="drop-shadow-md" />

      {/* Spots */}
      <circle cx="45" cy="40" r="2" fill="rgba(0, 139, 139, 0.6)" />
      <circle cx="55" cy="45" r="1.5" fill="rgba(0, 139, 139, 0.6)" />
      <circle cx="40" cy="65" r="2.5" fill="rgba(0, 139, 139, 0.6)" />
      <circle cx="60" cy="62" r="2" fill="rgba(0, 139, 139, 0.6)" />

      {/* Gradients */}
      <defs>
        <linearGradient id="frogGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00BFFF" />
          <stop offset="50%" stopColor="#00CED1" />
          <stop offset="100%" stopColor="#008B8B" />
        </linearGradient>
        <radialGradient id="eyeGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#00FFFF" />
          <stop offset="100%" stopColor="#00CED1" />
        </radialGradient>
      </defs>
    </svg>
  )
}
