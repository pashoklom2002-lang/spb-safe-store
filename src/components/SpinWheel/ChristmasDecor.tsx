import { ReactNode } from 'react';

interface ChristmasDecorProps {
  children: ReactNode;
}

const ChristmasDecor = ({ children }: ChristmasDecorProps) => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Wreath SVG behind the wheel */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg 
          viewBox="0 0 440 440" 
          className="w-[120%] h-[120%] max-w-[480px] max-h-[480px]"
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
            const radius = 195;
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
                    rx={18 + (j % 3) * 2}
                    ry={4}
                    fill={j % 2 === 0 ? "url(#pineGradientDark)" : "url(#pineGradientLight)"}
                    transform={`rotate(${(j - 2) * 15})`}
                  />
                ))}
              </g>
            );
          })}

          {/* Decorations: balls and pinecones */}
          {[
            { angle: 30, type: 'ball', color: 'red', size: 12 },
            { angle: 75, type: 'pinecone', size: 14 },
            { angle: 120, type: 'ball', color: 'gold', size: 10 },
            { angle: 165, type: 'ball', color: 'red', size: 11 },
            { angle: 210, type: 'pinecone', size: 13 },
            { angle: 255, type: 'ball', color: 'gold', size: 12 },
            { angle: 300, type: 'ball', color: 'red', size: 10 },
            { angle: 345, type: 'pinecone', size: 12 },
          ].map((item, i) => {
            const angleRad = item.angle * (Math.PI / 180);
            const radius = 195;
            const cx = 220 + Math.cos(angleRad) * radius;
            const cy = 220 + Math.sin(angleRad) * radius;

            if (item.type === 'pinecone') {
              return (
                <g key={`deco-${i}`} transform={`translate(${cx}, ${cy})`}>
                  {/* Pinecone shape */}
                  <ellipse cx={0} cy={0} rx={item.size * 0.6} ry={item.size} fill="url(#pinecone)" />
                  {/* Pinecone scales pattern */}
                  {Array.from({ length: 3 }).map((_, j) => (
                    <ellipse 
                      key={j}
                      cx={0} 
                      cy={-item.size * 0.3 + j * 5} 
                      rx={item.size * 0.4 - j * 2} 
                      ry={3}
                      fill="#5c4a0f"
                      opacity={0.5}
                    />
                  ))}
                </g>
              );
            }

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
            const radius = 195;
            const cx = 220 + Math.cos(angle) * radius;
            const cy = 220 + Math.sin(angle) * radius;
            const colors = ['#ff4444', '#ffcc00', '#44ff44', '#ff44ff', '#44ffff'];
            const color = colors[i % colors.length];

            return (
              <circle
                key={`light-${i}`}
                cx={cx}
                cy={cy}
                r={4}
                fill={color}
                className="animate-pulse"
                style={{
                  animationDelay: `${i * 0.15}s`,
                  filter: `drop-shadow(0 0 6px ${color})`,
                }}
              />
            );
          })}
        </svg>
      </div>

      {/* Main content (wheel) */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ChristmasDecor;
