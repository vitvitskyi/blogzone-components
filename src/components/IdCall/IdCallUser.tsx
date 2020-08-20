import React, { FC } from 'react';

//import svgs
import Lock from '../../svgs/Lock';
import BookmarkBorder from '../../svgs/BookmarkBorder';
import Arrow from '../../svgs/Arrow';
import Info from '../../svgs/Info';

type IdCallUser = {
  name: string;
};

export const IdCallUser: FC<IdCallUser> = ({ name }) => {
  return (
    <div
      style={{ backgroundColor: '#009ace' }}
      className="flex justify-between items-center rounded px-4 py-4 w-11/12"
    >
      <Lock />
      <span className="text-white">{name}</span>
      <div className="flex items-center">
        <BookmarkBorder className="mr-3 text-white" />
        <Info className="mr-3 text-white" />
        <Arrow className="text-white з" />
      </div>
    </div>
  );
};
