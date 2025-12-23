export interface Prize {
  label: string;
  weight: number;
  color: 'primary' | 'dark';
}

export interface WheelState {
  played: boolean;
  prize: string;
  date: string;
}

export const PRIZES: Prize[] = [
  { label: "10%", weight: 3, color: 'dark' },
  { label: "12%", weight: 3, color: 'primary' },
  { label: "15%", weight: 4, color: 'dark' },
  { label: "17%", weight: 3, color: 'primary' },
  { label: "2 недели бесплатно", weight: 1, color: 'dark' },
];

// Generate 14 sectors based on weights
export const generateSectors = (): Prize[] => {
  const sectors: Prize[] = [];
  
  PRIZES.forEach((prize, index) => {
    for (let i = 0; i < prize.weight; i++) {
      sectors.push({
        ...prize,
        color: sectors.length % 2 === 0 ? 'dark' : 'primary'
      });
    }
  });
  
  // Shuffle sectors for better distribution
  return sectors.sort(() => Math.random() - 0.5);
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
