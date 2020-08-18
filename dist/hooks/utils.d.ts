import { responseInterface } from 'swr';
export declare const validateParams: <P extends any[]>(cacheId: string, params: P) => string[] | null;
export declare const getResponseData: <T extends unknown>(response: responseInterface<any, any>, data: T) => {
    isValidating: boolean;
    error: any;
    data: T;
};
