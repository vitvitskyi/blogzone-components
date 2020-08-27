import React, { FC, CSSProperties } from 'react';
import { ButtonProps } from 'types/common';

export const Button: FC<ButtonProps> = ({
  width = 'w-32',
  height = 'h-10',
  backgroundColor = 'bg-blue-800',
  textColor = 'text-white',
  title = 'default',
  textSize = 'text-sm',
  margin,
  rounded,
  hover,
  disabled,
  ...props
}) => {
  const styles: CSSProperties = {
    borderRadius: rounded,
  };

  return (
    <>
      <button
        {...props}
        style={styles}
        className={`focus:outline-none  ${width} ${height} ${margin} 
        ${
          disabled
            ? `bg-gray-600 text-white cursor-not-allowed ${width} ${height} `
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
