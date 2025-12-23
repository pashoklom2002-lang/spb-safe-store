export interface Prize {
  label: string;
  weight: number;
  color: 'primary' | 'dark' | 'gold';
  isSpecial?: boolean;
}

export interface WheelState {
  played: boolean;
  prize: string;
  date: string;
}

export const PRIZES: Prize[] = [
  { label: "−10%", weight: 3, color: 'dark' },
  { label: "−12%", weight: 3, color: 'primary' },
  { label: "−15%", weight: 4, color: 'dark' },
  { label: "−17%", weight: 3, color: 'gold', isSpecial: true },
  { label: "+ 2 недели", weight: 1, color: 'gold', isSpecial: true },
];

// Generate 14 sectors based on weights with proper color alternation
export const generateSectors = (): Prize[] => {
  const sectors: Prize[] = [];
  
  PRIZES.forEach((prize) => {
    for (let i = 0; i < prize.weight; i++) {
      sectors.push({ ...prize });
    }
  });
  
  // Shuffle sectors for better distribution
  const shuffled = sectors.sort(() => Math.random() - 0.5);
  
  // Apply alternating colors, keeping special prizes gold
  return shuffled.map((sector, index) => ({
    ...sector,
    color: sector.isSpecial ? 'gold' : (index % 2 === 0 ? 'dark' : 'primary')
  }));
};

export const WHEEL_STORAGE_KEY = 'wheel_played';

export const getWheelState = (): WheelState | null => {
  const stored = localStorage.getItem(WHEEL_STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return null;
    }
  }
  return null;
};

export const setWheelState = (prize: string): void => {
  const state: WheelState = {
    played: true,
    prize,
    date: new Date().toISOString(),
  };
  localStorage.setItem(WHEEL_STORAGE_KEY, JSON.stringify(state));
};
