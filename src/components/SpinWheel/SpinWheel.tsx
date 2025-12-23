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
  const radius = 150;
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
    const textRadius = radius * 0.65;
    return {
      x: centerX + textRadius * Math.cos(radians),
      y: centerY + textRadius * Math.sin(radians),
      rotation: angle + 90,
    };
  };

  const getSectorColor = (color: Prize['color']) => {
    switch (color) {
      case 'primary':
        return 'hsl(84 100% 64%)'; // lime green
      case 'gold':
        return 'hsl(43 50% 35%)'; // dark matte gold
      case 'dark':
      default:
        return 'hsl(0 0% 12%)'; // dark
    }
  };

  const getTextColor = (color: Prize['color']) => {
    switch (color) {
      case 'primary':
        return 'hsl(0 0% 4%)'; // dark text on lime
      case 'gold':
      case 'dark':
      default:
        return 'hsl(0 0% 98%)'; // white text
    }
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
        tickInterval += 10; // Slow down over time
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

  return (
    <div className="relative w-full max-w-[400px] mx-auto">
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
        className="w-full h-full drop-shadow-2xl cursor-pointer"
        onClick={spin}
      >
        <defs>
          <filter id="wheelShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="hsl(84 100% 64% / 0.3)" />
          </filter>
        </defs>

        {/* Outer ring */}
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

            return (
              <g key={index}>
                <path
                  d={createSectorPath(startAngle, endAngle)}
                  fill={getSectorColor(sector.color)}
                  stroke="hsl(var(--background))"
                  strokeWidth="1"
                />
                <text
                  x={textPos.x}
                  y={textPos.y}
                  fill={getTextColor(sector.color)}
                  fontSize={sector.label.length > 5 ? "9" : "14"}
                  fontWeight="bold"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  transform={`rotate(${textPos.rotation}, ${textPos.x}, ${textPos.y})`}
                >
                  {sector.label}
                </text>
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
