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
    const textRadius = radius * 0.6;
    return {
      x: centerX + textRadius * Math.cos(radians),
      y: centerY + textRadius * Math.sin(radians),
      rotation: angle + 90,
    };
  };

  // Golden Ticket color palette
  const GOLD_MAIN = '#C9A24D';      // Matte noble gold
  const GOLD_DARK = '#8F7432';      // Dark gold for depth
  const GOLD_LIGHT = '#E6CF8B';     // Light gold for accents
  const GOLD_TEXT = '#2A2414';      // Dark brown text
  const SPECIAL_GOLD = 'hsl(43 50% 35%)'; // Keep original for 17% and +2 weeks

  const getSectorColor = (sector: Prize, index: number) => {
    if (sector.isSpecial) {
      return SPECIAL_GOLD;
    }
    // Alternate between main gold and dark gold for non-special sectors
    return index % 2 === 0 ? GOLD_MAIN : GOLD_DARK;
  };

  const getTextColor = (sector: Prize) => {
    if (sector.isSpecial) {
      return 'hsl(0 0% 98%)'; // White text on special gold
    }
    return GOLD_TEXT; // Dark brown text on golden sectors
  };

  const getStrokeColor = (sector: Prize) => {
    if (sector.isSpecial) {
      return 'hsl(var(--background))';
    }
    return GOLD_DARK;
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

    // Start tick sounds
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

    // Weighted random selection
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

    // Calculate rotation to land on selected sector
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

  // Calculate font size based on label length
  const getFontSize = (label: string) => {
    if (label.includes('недел')) return '8';
    if (label.length > 5) return '10';
    return '14';
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Pointer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 z-20">
        <svg width="40" height="50" viewBox="0 0 40 50">
          <defs>
            <linearGradient id="pointerGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={GOLD_LIGHT} />
              <stop offset="50%" stopColor={GOLD_MAIN} />
              <stop offset="100%" stopColor={GOLD_DARK} />
            </linearGradient>
          </defs>
          <polygon
            points="20,50 5,10 20,0 35,10"
            fill="url(#pointerGold)"
            stroke={GOLD_DARK}
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
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="rgba(201, 162, 77, 0.4)" />
          </filter>
          <linearGradient id="ringGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={GOLD_LIGHT} />
            <stop offset="30%" stopColor={GOLD_MAIN} />
            <stop offset="70%" stopColor={GOLD_MAIN} />
            <stop offset="100%" stopColor={GOLD_DARK} />
          </linearGradient>
        </defs>

        {/* Outer ring - Golden Ticket style */}
        <circle
          cx={centerX}
          cy={centerY}
          r={radius + 15}
          fill="none"
          stroke="url(#ringGold)"
          strokeWidth="10"
          filter="url(#wheelShadow)"
        />
        <circle
          cx={centerX}
          cy={centerY}
          r={radius + 6}
          fill="none"
          stroke={GOLD_DARK}
          strokeWidth="2"
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

            return (
              <g key={index}>
                <path
                  d={createSectorPath(startAngle, endAngle)}
                  fill={getSectorColor(sector, index)}
                  stroke={getStrokeColor(sector)}
                  strokeWidth="1"
                />
                <text
                  x={textPos.x}
                  y={textPos.y}
                  fill={getTextColor(sector)}
                  fontSize={getFontSize(sector.label)}
                  fontWeight="bold"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  transform={`rotate(${textPos.rotation}, ${textPos.x}, ${textPos.y})`}
                  style={{ fontFamily: 'system-ui, sans-serif' }}
                >
                  {sector.label}
                </text>
              </g>
            );
          })}
        </g>

        {/* Center button - Golden style */}
        <circle
          cx={centerX}
          cy={centerY}
          r="40"
          fill="url(#ringGold)"
          stroke={GOLD_DARK}
          strokeWidth="3"
          className={`${!isSpinning && !disabled ? 'cursor-pointer hover:opacity-90' : ''}`}
        />
        <text
          x={centerX}
          y={centerY}
          fill={GOLD_TEXT}
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