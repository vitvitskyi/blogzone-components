import React, { FC } from 'react';
import { InputProps } from 'types/common';

export const Input: FC<InputProps> = ({
  type = 'text',
  label = 'Text Input',
  labelColor = 'text-black',
  labelSize,
  labelFont,
  labelWeight,
  inputTextColor = 'text-black',
  width,
  height,
  borderWidth = 'border',
  borderColor = 'border-gray-500',
  borderRadius = 'rounded',
  placeholder = 'type...',
  backgroundColor,
  className,
  disabled,
  ...props
}) => {
  return (
    <>
      <label
        className={`flex flex-col 
      ${labelColor} 
      ${labelSize} 
      ${labelFont}
      ${labelWeight}
      `}
      >
        {label}
        <input
          {...props}
          disabled={disabled}
          className={
            disabled
              ? 'bg-gray-400 cursor-not-allowed px-3 py-1 mt-1'
              : `
                    ${inputTextColor}
                    ${width}
                    ${height}
                    ${borderWidth}
                    ${borderColor}
                    ${borderRadius}
                    ${backgroundColor}
                    px-3 py-1 mt-1
                    focus:border-blue-400
                    focus:outline-none
                    `
          }
          type={type}
          placeholder={placeholder}
        />
      </label>
    </>
  );
};
