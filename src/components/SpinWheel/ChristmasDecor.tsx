import { ReactNode } from 'react';

interface ChristmasDecorProps {
  children: ReactNode;
}

const ChristmasDecor = ({ children }: ChristmasDecorProps) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Wreath SVG behind the wheel */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg 
          viewBox="0 0 440 440" 
          className="w-full h-full max-w-[min(90vw,70vh)] max-h-[min(90vw,70vh)]"
          style={{ minWidth: '300px', minHeight: '300px' }}
        >
          <defs>
            <linearGradient id="pineGradientDark" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0d4d0d" />
              <stop offset="100%" stopColor="#1a6b1a" />
            </linearGradient>
            <linearGradient id="pineGradientLight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1a6b1a" />
              <stop offset="100%" stopColor="#2a8c2a" />
            </linearGradient>
            <radialGradient id="ballRed" cx="30%" cy="30%">
              <stop offset="0%" stopColor="#ff6666" />
              <stop offset="100%" stopColor="#cc0000" />
            </radialGradient>
            <radialGradient id="ballGold" cx="30%" cy="30%">
              <stop offset="0%" stopColor="#ffdd77" />
              <stop offset="100%" stopColor="#aa8833" />
            </radialGradient>
            <radialGradient id="pinecone" cx="30%" cy="30%">
              <stop offset="0%" stopColor="#8b6914" />
              <stop offset="100%" stopColor="#5c4a0f" />
            </radialGradient>
          </defs>

          {/* Pine wreath ring - multiple layers */}
          {Array.from({ length: 36 }).map((_, i) => {
            const angle = (i * 10) * (Math.PI / 180);
            const radius = 210;
            const cx = 220 + Math.cos(angle) * radius;
            const cy = 220 + Math.sin(angle) * radius;
            const rotation = (i * 10) + 90;
            
            return (
              <g key={`branch-${i}`} transform={`translate(${cx}, ${cy}) rotate(${rotation})`}>
                {/* Pine needles cluster */}
                {Array.from({ length: 5 }).map((_, j) => (
                  <ellipse
                    key={j}
                    cx={0}
                    cy={j * 3 - 6}
                    rx={16 + (j % 3) * 2}
                    ry={3}
                    fill={j % 2 === 0 ? "url(#pineGradientDark)" : "url(#pineGradientLight)"}
                    transform={`rotate(${(j - 2) * 15})`}
                  />
                ))}
              </g>
            );
          })}

          {/* Decorations: only balls */}
          {[
            { angle: 30, color: 'red', size: 10 },
            { angle: 75, color: 'gold', size: 11 },
            { angle: 120, color: 'red', size: 9 },
            { angle: 165, color: 'gold', size: 10 },
            { angle: 210, color: 'red', size: 11 },
            { angle: 255, color: 'gold', size: 10 },
            { angle: 300, color: 'red', size: 9 },
            { angle: 345, color: 'gold', size: 10 },
          ].map((item, i) => {
            const angleRad = item.angle * (Math.PI / 180);
            const radius = 210;
            const cx = 220 + Math.cos(angleRad) * radius;
            const cy = 220 + Math.sin(angleRad) * radius;

            return (
              <g key={`deco-${i}`}>
                <circle
                  cx={cx}
                  cy={cy}
                  r={item.size}
                  fill={item.color === 'red' ? 'url(#ballRed)' : 'url(#ballGold)'}
                />
                {/* Highlight */}
                <circle
                  cx={cx - item.size * 0.3}
                  cy={cy - item.size * 0.3}
                  r={item.size * 0.25}
                  fill="white"
                  opacity={0.4}
                />
              </g>
            );
          })}

          {/* Garland lights */}
          {Array.from({ length: 18 }).map((_, i) => {
            const angle = (i * 20) * (Math.PI / 180);
            const radius = 210;
            const cx = 220 + Math.cos(angle) * radius;
            const cy = 220 + Math.sin(angle) * radius;
            const colors = ['#ff4444', '#ffcc00', '#44ff44', '#ff44ff', '#44ffff'];
            const color = colors[i % colors.length];

            return (
              <circle
                key={`light-${i}`}
                cx={cx}
                cy={cy}
                r={3}
                fill={color}
                className="animate-pulse"
                style={{
                  animationDelay: `${i * 0.15}s`,
                  filter: `drop-shadow(0 0 4px ${color})`,
                }}
              />
            );
          })}
        </svg>
      </div>

      {/* Main content (wheel) */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default ChristmasDecor;