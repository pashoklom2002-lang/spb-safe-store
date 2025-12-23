import { useState, useRef, useEffect } from 'react';
import { Prize } from './types';
import { useSounds } from './useSounds';

interface SpinWheelProps {
  sectors: Prize[];
  onSpinEnd: (prize: Prize) => void;
  disabled?: boolean;
}

const SpinWheel = ({ sectors, onSpinEnd, disabled }: SpinWheelProps) => {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const wheelRef = useRef<SVGGElement>(null);
  const tickIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const { playTickSound, playSpinSound, playWinSound } = useSounds();

  const sectorAngle = 360 / sectors.length;
  const radius = 180;
  const centerX = 200;
  const centerY = 200;

  const polarToCartesian = (angle: number, r: number) => {
    const radians = (angle - 90) * (Math.PI / 180);
    return {
      x: centerX + r * Math.cos(radians),
      y: centerY + r * Math.sin(radians),
    };
  };

  const createSectorPath = (startAngle: number, endAngle: number) => {
    const start = polarToCartesian(startAngle, radius);
    const end = polarToCartesian(endAngle, radius);
    const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;

    return [
      `M ${centerX} ${centerY}`,
      `L ${start.x} ${start.y}`,
      `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${end.x} ${end.y}`,
      'Z',
    ].join(' ');
  };

  const getTextPosition = (index: number) => {
    const angle = sectorAngle * index + sectorAngle / 2 - 90;
    const radians = angle * (Math.PI / 180);
    // Move text closer to outer edge
    const textRadius = radius * 0.72;
    return {
      x: centerX + textRadius * Math.cos(radians),
      y: centerY + textRadius * Math.sin(radians),
      rotation: angle + 90,
    };
  };

  // Special gold color for 17% and +2 weeks
  const SPECIAL_GOLD = '#C9A24D';
  const SPECIAL_TEXT = '#2A2414';

  const getSectorColor = (sector: Prize, index: number) => {
    if (sector.isSpecial) {
      return SPECIAL_GOLD;
    }
    // Alternate between dark and primary (lime)
    return index % 2 === 0 ? 'hsl(0 0% 12%)' : 'hsl(84 100% 64%)';
  };

  const getTextColor = (sector: Prize, index: number) => {
    if (sector.isSpecial) {
      return SPECIAL_TEXT;
    }
    // Dark text on lime, white text on dark
    return index % 2 === 0 ? 'hsl(0 0% 98%)' : 'hsl(0 0% 4%)';
  };

  useEffect(() => {
    return () => {
      if (tickIntervalRef.current) {
        clearInterval(tickIntervalRef.current);
      }
    };
  }, []);

  const spin = () => {
    if (isSpinning || disabled) return;

    setIsSpinning(true);
    playSpinSound();

    let tickInterval = 50;
    const startTicks = () => {
      tickIntervalRef.current = setInterval(() => {
        playTickSound();
        tickInterval += 10;
        if (tickInterval > 300) {
          if (tickIntervalRef.current) {
            clearInterval(tickIntervalRef.current);
          }
        }
      }, tickInterval);
    };
    startTicks();

    const totalWeight = sectors.reduce((sum, s) => sum + s.weight, 0);
    let random = Math.random() * totalWeight;
    let selectedIndex = 0;

    for (let i = 0; i < sectors.length; i++) {
      random -= sectors[i].weight;
      if (random <= 0) {
        selectedIndex = i;
        break;
      }
    }

    const sectorCenter = sectorAngle * selectedIndex + sectorAngle / 2;
    const fullRotations = 5 + Math.floor(Math.random() * 3);
    const targetRotation = 360 * fullRotations + (360 - sectorCenter);
    
    setRotation(prev => prev + targetRotation);

    setTimeout(() => {
      if (tickIntervalRef.current) {
        clearInterval(tickIntervalRef.current);
      }
      setIsSpinning(false);
      playWinSound();
      onSpinEnd(sectors[selectedIndex]);
    }, 4000);
  };

  // Check if this is the special "2 weeks" prize
  const isTwoWeeksPrize = (label: string) => {
    return label.includes('недел');
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Pointer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 z-20">
        <svg width="40" height="50" viewBox="0 0 40 50">
          <polygon
            points="20,50 5,10 20,0 35,10"
            fill="hsl(var(--primary))"
            stroke="hsl(var(--background))"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Wheel */}
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full drop-shadow-2xl cursor-pointer max-w-[min(80vw,60vh)]"
        onClick={spin}
      >
        <defs>
          <filter id="wheelShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="hsl(84 100% 64% / 0.3)" />
          </filter>
        </defs>

        {/* Outer ring - original lime/primary style */}
        <circle
          cx={centerX}
          cy={centerY}
          r={radius + 15}
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="8"
          filter="url(#wheelShadow)"
        />
        <circle
          cx={centerX}
          cy={centerY}
          r={radius + 8}
          fill="none"
          stroke="hsl(var(--background))"
          strokeWidth="4"
        />

        {/* Wheel group with rotation */}
        <g
          ref={wheelRef}
          style={{
            transform: `rotate(${rotation}deg)`,
            transformOrigin: `${centerX}px ${centerY}px`,
            transition: isSpinning ? 'transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)' : 'none',
          }}
        >
          {sectors.map((sector, index) => {
            const startAngle = sectorAngle * index;
            const endAngle = startAngle + sectorAngle;
            const textPos = getTextPosition(index);
            const isTwoWeeks = isTwoWeeksPrize(sector.label);

            return (
              <g key={index}>
                <path
                  d={createSectorPath(startAngle, endAngle)}
                  fill={getSectorColor(sector, index)}
                  stroke="hsl(var(--background))"
                  strokeWidth="1"
                />
                {isTwoWeeks ? (
                  // Two-line text for "+ 2 недели"
                  <g transform={`translate(${textPos.x}, ${textPos.y}) rotate(${textPos.rotation})`}>
                    <text
                      x={0}
                      y={-6}
                      fill={getTextColor(sector, index)}
                      fontSize="12"
                      fontWeight="bold"
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan fill="#cc0000">+</tspan>
                      <tspan> 2</tspan>
                    </text>
                    <text
                      x={0}
                      y={8}
                      fill={getTextColor(sector, index)}
                      fontSize="10"
                      fontWeight="bold"
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      недели
                    </text>
                  </g>
                ) : (
                  <text
                    x={textPos.x}
                    y={textPos.y}
                    fill={getTextColor(sector, index)}
                    fontSize="14"
                    fontWeight="bold"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    transform={`rotate(${textPos.rotation}, ${textPos.x}, ${textPos.y})`}
                  >
                    {sector.label}
                  </text>
                )}
              </g>
            );
          })}
        </g>

        {/* Center button */}
        <circle
          cx={centerX}
          cy={centerY}
          r="35"
          fill="hsl(var(--primary))"
          stroke="hsl(var(--background))"
          strokeWidth="4"
          className={`${!isSpinning && !disabled ? 'cursor-pointer hover:opacity-90' : ''}`}
        />
        <text
          x={centerX}
          y={centerY}
          fill="hsl(var(--primary-foreground))"
          fontSize="12"
          fontWeight="bold"
          textAnchor="middle"
          dominantBaseline="middle"
          className="pointer-events-none select-none"
        >
          {isSpinning ? '...' : 'КРУТИ'}
        </text>
      </svg>
    </div>
  );
};

export default SpinWheel;