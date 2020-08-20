import React, { FC } from 'react';

import Lock from '../../svgs/Lock';
import BookmarkBorder from '../../svgs/BookmarkBorder';
import Arrow from '../../svgs/Arrow';
import Info from '../../svgs/Info';

type ChatsItemProps = {
  name: string;
};

export const ChatsItem: FC<ChatsItemProps> = ({ name }) => {
  return (
    <div
      style={{ backgroundColor: '#009ace' }}
      className="flex justify-between items-center rounded px-4 py-4  mb-3"
    >
      <Lock />
      <span className="text-white">{name}</span>
      <div className="flex items-center">
        <button className="focus:outline-none">
          <BookmarkBorder className="mr-3 text-white" />
        </button>
        <button className="focus:outline-none">
          <Info className="mr-3 text-white" />
        </button>
        <button className="focus:outline-none">
          <Arrow className="text-white" />
        </button>
      </div>
    </div>
  );
};
