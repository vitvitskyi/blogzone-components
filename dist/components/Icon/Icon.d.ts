import React from 'react';
import * as icons from '../../svgs';
export declare type IconNames = keyof typeof icons;
declare type Props = {
    name: IconNames;
} & React.SVGProps<SVGSVGElement>;
export declare const Icon: ({ name, ...props }: Props) => JSX.Element | null;
export {};
