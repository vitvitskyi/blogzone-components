import { RefObject } from 'react';
export declare const useClickOutside: (ref: RefObject<Element> | Element | null | undefined, onClickOutside: (e: Event) => void, { disabled }: {
    disabled: boolean;
}) => void;
