import React, { FC, CSSProperties } from 'react';

type ButtonProps = {
  size?: string;
  textColor?: string;
  backgroundColor?: string;
  width?: number;
  height?: number;
  title?: string;
  textSize?: string;
  rounded?: number;
  hover?: string;
  disabled?: boolean;
  [x: string]: any;
};

export const Button: FC<ButtonProps> = ({
  width = 120,
  height = 40,
  backgroundColor = 'bg-blue-800',
  textColor = 'text-white',
  title = 'button',
  textSize = 'text-sm',
  rounded,
  hover,
  disabled,
  ...props
}) => {
  const styles: CSSProperties = {
    width: width,
    height: height,
    borderRadius: rounded,
  };
  return (
    <>
      <button
        {...props}
        style={styles}
        className={`focus:outline-none 
        ${
          disabled
            ? 'bg-gray-600 text-white cursor-not-allowed'
            : `transition ease-in duration-300  
            ${backgroundColor} 
            hover:${hover} 
            ${textSize} 
            ${textColor}`
        }`}
      >
        {title}
      </button>
    </>
  );
};
