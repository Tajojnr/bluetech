import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export default function BluetechLogo({ className = "", size = 44 }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-transform duration-300 hover:scale-105"
      >
        {/* Outer Glow Ring */}
        <circle cx="100" cy="100" r="94" stroke="url(#blue-gradient)" strokeWidth="4" />

        {/* Inner Blue Badge */}
        <circle cx="100" cy="100" r="88" fill="url(#bg-gradient)" />
        <circle cx="100" cy="100" r="85" stroke="white" strokeWidth="2" strokeOpacity="0.8" />

        {/* Monogram "B" */}
        <path
          d="M 50 65 H 82 C 92 65 98 70 98 78 C 98 83 94 88 88 90 C 96 92 100 98 100 105 C 100 114 92 120 82 120 H 50 V 65 Z M 66 77 V 87 H 78 C 81 87 83 85 83 82 C 83 79 81 77 78 77 H 66 Z M 66 97 V 108 H 80 C 83 108 85 106 85 102.5 C 85 99 83 97 80 97 H 66 Z"
          fill="white"
        />

        {/* Monogram "G" */}
        <path
          d="M 148 76 C 144 69 135 65 122 65 C 105 65 95 77 95 92.5 C 95 108 105 120 122 120 C 137 120 146 111 148 97 H 120 V 86 H 160 V 122 H 148 V 114 C 142 120 133 124 121 124 C 100 124 82 110 82 92.5 C 82 75 100 61 122 61 C 138 61 150 67 156 76 L 148 76 Z"
          fill="white"
        />

        {/* Divider Lines */}
        <line x1="38" y1="135" x2="65" y2="135" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="135" y1="135" x2="162" y2="135" stroke="white" strokeWidth="2.5" strokeLinecap="round" />

        {/* Text: BLUE GADGETS */}
        <text
          x="100"
          y="138"
          fill="white"
          fontSize="11"
          fontWeight="900"
          fontFamily="system-ui, sans-serif"
          letterSpacing="1"
          textAnchor="middle"
        >
          BLUE GADGETS
        </text>

        {/* Tagline */}
        <text
          x="100"
          y="155"
          fill="white"
          fillOpacity="0.85"
          fontSize="7"
          fontWeight="600"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
        >
          Gadgets for every budget
        </text>

        {/* Gradients */}
        <defs>
          <linearGradient id="bg-gradient" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2563EB" />
            <stop offset="1" stopColor="#0284C7" />
          </linearGradient>
          <linearGradient id="blue-gradient" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
            <stop stopColor="#60A5FA" />
            <stop offset="1" stopColor="#38BDF8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}