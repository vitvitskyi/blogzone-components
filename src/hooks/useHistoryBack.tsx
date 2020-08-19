import { useCallback } from 'react';

export const useHistoryBack = () => {
  const onClick = useCallback((e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    if (typeof window !== 'undefined' && window.history.length) {
      window.history.go(-1);
    }
  }, []);

  return onClick;
};
