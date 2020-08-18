import { responseInterface } from 'swr';

export const validateParams = <P extends any[]>(
  cacheId: string,
  params: P
): string[] | null => (params.every(Boolean) ? [...params, cacheId] : null);

export const getResponseData = <T extends any>(
  response: responseInterface<any, any>,
  data: T
) => {
  // TODO: just spread ...response after https://github.com/vercel/swr/pull/436 is released
  const { isValidating, error } = response;
  return {
    isValidating,
    error,
    data,
  };
};
