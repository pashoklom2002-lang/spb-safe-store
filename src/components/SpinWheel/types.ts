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
  { label: "−10%", weight: 4, color: 'dark' },  // 4 sectors (one between 17% and 2 weeks)
  { label: "−12%", weight: 3, color: 'primary' },
  { label: "−15%", weight: 4, color: 'dark' },
  { label: "−17%", weight: 3, color: 'gold', isSpecial: true },
  { label: "+ 2 недели", weight: 1, color: 'gold', isSpecial: true },
];

// Generate 15 sectors based on weights with proper color alternation
// Ensures 17% and +2 weeks are separated by a 10% sector
export const generateSectors = (): Prize[] => {
  const regularPrizes: Prize[] = [];
  const specialPrizes: Prize[] = [];
  
  PRIZES.forEach((prize) => {
    for (let i = 0; i < prize.weight; i++) {
      if (prize.isSpecial) {
        specialPrizes.push({ ...prize });
      } else {
        regularPrizes.push({ ...prize });
      }
    }
  });
  
  // Shuffle regular prizes
  const shuffledRegular = regularPrizes.sort(() => Math.random() - 0.5);
  
  // Apply alternating colors to regular prizes
  const coloredRegular = shuffledRegular.map((sector, index) => ({
    ...sector,
    color: (index % 2 === 0 ? 'dark' : 'primary') as Prize['color']
  }));
  
  // Insert special prizes with separation
  // Find a 10% dark sector to place between them
  const separator = coloredRegular.find(s => s.label === "−10%" && s.color === 'dark');
  const separatorIndex = separator ? coloredRegular.indexOf(separator) : -1;
  
  // Build final array: insert specials with separator between
  const result: Prize[] = [];
  let regularIndex = 0;
  
  for (let i = 0; i < coloredRegular.length; i++) {
    if (i === separatorIndex) {
      // Insert: 17%, separator (10%), 2 weeks
      result.push(specialPrizes[0]); // 17%
      result.push(coloredRegular[i]); // 10% separator
      result.push(specialPrizes[1]); // +2 weeks
    } else {
      result.push(coloredRegular[i]);
    }
    regularIndex++;
  }
  
  // If we didn't find a good separator, just append specials at end with any separator
  if (separatorIndex === -1) {
    const lastRegular = result.pop();
    result.push(specialPrizes[0]);
    if (lastRegular) result.push(lastRegular);
    result.push(specialPrizes[1]);
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
