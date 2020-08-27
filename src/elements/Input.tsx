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
  inputTextSize = 'text-md',
  inputTextWeight = 'font-normal',
  width,
  height,
  borderWidth = 'border',
  borderColor = 'border-gray-400',
  borderRadius = 'rounded',
  placeholder = 'type...',
  backgroundColor,
  className,
  disabled,
  helpText,
  helpTextStyles,
  margin,
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
        ${margin}
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
                    ${inputTextSize}
                    ${inputTextWeight}
                    px-3 py-1 mt-1
                    focus:border-blue-400
                    focus:outline-none
                    `
          }
          type={type}
          placeholder={placeholder}
        />
        <span className={helpTextStyles}>{helpText}</span>
      </label>
    </>
  );
};
