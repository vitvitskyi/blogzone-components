import React, { FC } from 'react';

//import svgs
import Lock from '../../svgs/Lock';
import BookmarkBorder from '../../svgs/BookmarkBorder';
import Arrow from '../../svgs/Arrow';
import Info from '../../svgs/Info';
import ArrowForward from '../../svgs/ArrowForward';

type IdCallUser = {
  name: string;
  backgroundColor: string;
  colorText: string;
  svgColor1: string;
  svgColor2: string;
  svgColor3: string;
  isArrowBack: boolean;
};

export const IdCallUser: FC<IdCallUser> = ({
  name,
  isArrowBack,
  backgroundColor,
  colorText,
  svgColor1,
  svgColor2,
  svgColor3,
}) => {
  // @ts-ignore
  return (
    <div
      className={`flex justify-between items-center rounded-lg px-4 py-4 w-full`}
      style={{ backgroundColor: backgroundColor }}
    >
      {isArrowBack ? (
        <div className="flex">
          <button className="focus:outline-none mr-4">
            <ArrowForward
              className="w-4 h-4"
              style={{ transform: `rotate(${-180}deg)`, color: '#fff' }}
            />
          </button>
          <Lock />
        </div>
      ) : (
        <Lock />
      )}
      <span className="text-white" style={{ color: colorText }}>
        {name}
      </span>
      <div className="flex items-center">
        <BookmarkBorder
          className="mr-3 text-white"
          style={{ color: svgColor1 }}
        />
        <Info className="mr-3" style={{ color: svgColor2 }} />
        <Arrow className="text-white " style={{ color: svgColor3 }} />
      </div>
    </div>
  );
};
