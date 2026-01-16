import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

const METRIKA_ID = 105962931;
const UTM_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
const UTM_STORAGE_KEY = 'skladnotut_utm';

declare global {
  interface Window {
    ym?: (id: number, action: string, ...args: unknown[]) => void;
  }
}

// Извлечение UTM-параметров из URL
export const extractUTMParams = (): Record<string, string> => {
  const params = new URLSearchParams(window.location.search);
  const utm: Record<string, string> = {};
  
  UTM_PARAMS.forEach(param => {
    const value = params.get(param);
    if (value) {
      utm[param] = value;
    }
  });
  
  return utm;
};

// Сохранение UTM в sessionStorage
export const saveUTMParams = (utm: Record<string, string>): void => {
  if (Object.keys(utm).length > 0) {
    sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(utm));
  }
};

// Загрузка UTM из sessionStorage
export const loadUTMParams = (): Record<string, string> => {
  try {
    const stored = sessionStorage.getItem(UTM_STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
};

// Формирование URL с UTM-параметрами
export const buildURLWithUTM = (baseUrl: string): string => {
  // Сначала пробуем из URL, затем из storage
  let utm = extractUTMParams();
  if (Object.keys(utm).length === 0) {
    utm = loadUTMParams();
  }
  
  if (Object.keys(utm).length === 0) {
    return baseUrl;
  }
  
  const url = new URL(baseUrl, window.location.origin);
  Object.entries(utm).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });
  
  return url.toString();
};

// Хук для SPA-трекинга с Яндекс Метрикой
export const useYandexMetrika = () => {
  const location = useLocation();

  // Отправка hit при смене роута (для SPA)
  useEffect(() => {
    // Сохраняем UTM при первом входе
    const currentUTM = extractUTMParams();
    if (Object.keys(currentUTM).length > 0) {
      saveUTMParams(currentUTM);
    }

    // Отправляем hit для текущей страницы
    if (window.ym) {
      window.ym(METRIKA_ID, 'hit', window.location.href, {
        title: document.title,
        referer: document.referrer,
      });
    }
  }, [location.pathname, location.search]);

  // Функция для отправки целей
  const reachGoal = useCallback((goal: string, params?: Record<string, unknown>) => {
    if (window.ym) {
      window.ym(METRIKA_ID, 'reachGoal', goal, params);
    }
  }, []);

  // Функция для отправки параметров визита
  const setUserParams = useCallback((params: Record<string, unknown>) => {
    if (window.ym) {
      window.ym(METRIKA_ID, 'userParams', params);
    }
  }, []);

  return {
    reachGoal,
    setUserParams,
    buildURLWithUTM,
    extractUTMParams,
    loadUTMParams,
  };
};

export default useYandexMetrika;
