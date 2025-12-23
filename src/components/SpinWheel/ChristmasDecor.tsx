import { ReactNode } from 'react';

interface ChristmasDecorProps {
  children: ReactNode;
}

const ChristmasDecor = ({ children }: ChristmasDecorProps) => {
  return (
    <div className="relative">
      {/* Garland lights */}
      <div className="absolute -top-4 left-0 right-0 flex justify-center gap-3 z-10">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="w-3 h-3 rounded-full animate-pulse"
            style={{
              backgroundColor: ['#ff4444', '#ffcc00', '#44ff44', '#4444ff', '#ff44ff'][i % 5],
              animationDelay: `${i * 0.2}s`,
              boxShadow: `0 0 10px ${['#ff4444', '#ffcc00', '#44ff44', '#4444ff', '#ff44ff'][i % 5]}`,
            }}
          />
        ))}
      </div>

      {/* Left pine branch */}
      <div className="absolute -left-8 top-1/2 -translate-y-1/2 z-10">
        <svg width="60" height="200" viewBox="0 0 60 200" className="opacity-80">
          <defs>
            <linearGradient id="pineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0d5c0d" />
              <stop offset="100%" stopColor="#1a8c1a" />
            </linearGradient>
          </defs>
          {/* Pine needles */}
          {Array.from({ length: 15 }).map((_, i) => (
            <g key={i} transform={`translate(30, ${20 + i * 12})`}>
              <path
                d={`M 0,0 Q -25,${5 + (i % 3) * 2} -30,0 Q -25,-${5 + (i % 3) * 2} 0,0`}
                fill="url(#pineGradient)"
              />
              <path
                d={`M 0,0 Q -20,${8 + (i % 2) * 3} -28,3 Q -18,-${4 + (i % 2) * 2} 0,0`}
                fill="#0f6b0f"
              />
            </g>
          ))}
          {/* Ornaments */}
          <circle cx="15" cy="40" r="8" fill="#ff4444" />
          <circle cx="20" cy="100" r="10" fill="#ffcc00" />
          <circle cx="12" cy="160" r="8" fill="#ff4444" />
        </svg>
      </div>

      {/* Right pine branch */}
      <div className="absolute -right-8 top-1/2 -translate-y-1/2 z-10 scale-x-[-1]">
        <svg width="60" height="200" viewBox="0 0 60 200" className="opacity-80">
          {Array.from({ length: 15 }).map((_, i) => (
            <g key={i} transform={`translate(30, ${20 + i * 12})`}>
              <path
                d={`M 0,0 Q -25,${5 + (i % 3) * 2} -30,0 Q -25,-${5 + (i % 3) * 2} 0,0`}
                fill="url(#pineGradient)"
              />
              <path
                d={`M 0,0 Q -20,${8 + (i % 2) * 3} -28,3 Q -18,-${4 + (i % 2) * 2} 0,0`}
                fill="#0f6b0f"
              />
            </g>
          ))}
          <circle cx="15" cy="60" r="10" fill="#ffcc00" />
          <circle cx="18" cy="120" r="8" fill="#ff4444" />
          <circle cx="14" cy="180" r="9" fill="#ffcc00" />
        </svg>
      </div>

      {/* Top garland arc */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-10">
        <svg width="300" height="60" viewBox="0 0 300 60">
          <defs>
            <linearGradient id="garlandGreen" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1a5c1a" />
              <stop offset="50%" stopColor="#2a8c2a" />
              <stop offset="100%" stopColor="#1a5c1a" />
            </linearGradient>
          </defs>
          <path
            d="M 10,10 Q 150,70 290,10"
            stroke="url(#garlandGreen)"
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
          />
          {/* Hanging ornaments */}
          {[30, 90, 150, 210, 270].map((x, i) => (
            <g key={i}>
              <line
                x1={x}
                y1={20 + Math.sin((x / 300) * Math.PI) * 25}
                x2={x}
                y2={35 + Math.sin((x / 300) * Math.PI) * 25}
                stroke="#444"
                strokeWidth="1"
              />
              <circle
                cx={x}
                cy={40 + Math.sin((x / 300) * Math.PI) * 25}
                r="6"
                fill={i % 2 === 0 ? '#ff4444' : '#ffcc00'}
              />
            </g>
          ))}
        </svg>
      </div>

      {/* Bottom garland */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-10">
        <svg width="280" height="50" viewBox="0 0 280 50">
          <path
            d="M 10,40 Q 140,-10 270,40"
            stroke="url(#garlandGreen)"
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
          />
          {[50, 140, 230].map((x, i) => (
            <g key={i}>
              <circle
                cx={x}
                cy={25 - Math.sin((x / 280) * Math.PI) * 20}
                r="7"
                fill={i % 2 === 0 ? '#ffcc00' : '#ff4444'}
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
            </g>
          ))}
        </svg>
      </div>

      {/* Snowflakes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-white/30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${8 + Math.random() * 12}px`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            ❄
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-0 py-8 px-12">
        {children}
      </div>
    </div>
  );
};

export default ChristmasDecor;
