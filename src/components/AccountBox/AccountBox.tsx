import React, { FC } from 'react';

//img
import BoxMenu from '../../svgs/BoxMenu';
import Settings from '../../svgs/Settings';

// for example
// @ts-ignore
// import DefaultImage from '../../../public/images/default_image.png';

type AccountBoxProps = {
  name: string;
};

export const AccountBox: FC<AccountBoxProps> = ({ name }) => {
  return (
    <div className="bg-white m-auto py-3 px-4">
      <div className="flex justify-end">
        <button
          className="mr-3 focus:outline-none"
          onClick={() => alert('Menu')}
        >
          <BoxMenu />
        </button>
        <button className="focus:outline-none" onClick={() => alert('')}>
          <Settings />
        </button>
      </div>
      {/*need dynamic image, this for example */}
      <img
        src={require('../../../public/images/default_image.png')}
        className="mb-2 w-12 h-12"
        alt=""
      />
      <span className="text-black font-hairline">{name}</span>
    </div>
  );
};
