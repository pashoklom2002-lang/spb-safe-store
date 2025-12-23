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
  { label: "−17%", weight: 2, color: 'gold', isSpecial: true },
  { label: "+ 2 недели", weight: 2, color: 'gold', isSpecial: true },
];

// Generate 14 sectors with STRICT color alternation
// Gold sectors count as their own color in the pattern
export const generateSectors = (): Prize[] => {
  // Create all sector instances
  const allSectors: Prize[] = [];
  
  PRIZES.forEach((prize) => {
    for (let i = 0; i < prize.weight; i++) {
      allSectors.push({ ...prize });
    }
  });
  
  // Separate special (gold) and regular prizes
  const specialSectors = allSectors.filter(s => s.isSpecial);
  const regularSectors = allSectors.filter(s => !s.isSpecial);
  
  // Shuffle regular sectors
  regularSectors.sort(() => Math.random() - 0.5);
  
  // Total sectors = 14 (10 regular + 4 special)
  // We need to place gold sectors so they break up same-color sequences
  // Pattern: dark, primary, dark, primary... with gold inserted to maintain alternation
  
  const result: Prize[] = [];
  let regularIndex = 0;
  let specialIndex = 0;
  let lastColor: 'dark' | 'primary' | 'gold' | null = null;
  
  // Distribute 14 sectors total
  const totalSectors = allSectors.length;
  
  // Place special sectors at positions that maintain alternation
  // Position them evenly: roughly at 1/3 and 2/3 of the wheel
  const specialPositions = [3, 7, 10, 13]; // Positions for up to 4 special sectors
  
  for (let i = 0; i < totalSectors; i++) {
    if (specialPositions.includes(i) && specialIndex < specialSectors.length) {
      // Place a special (gold) sector
      result.push(specialSectors[specialIndex]);
      lastColor = 'gold';
      specialIndex++;
    } else if (regularIndex < regularSectors.length) {
      // Place a regular sector with alternating color
      const sector = { ...regularSectors[regularIndex] };
      
      // Determine color based on last color
      if (lastColor === null || lastColor === 'gold') {
        // After gold or at start, use dark
        sector.color = 'dark';
      } else if (lastColor === 'dark') {
        sector.color = 'primary';
      } else {
        sector.color = 'dark';
      }
      
      result.push(sector);
      lastColor = sector.color;
      regularIndex++;
    }
  }
  
  return result;
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
