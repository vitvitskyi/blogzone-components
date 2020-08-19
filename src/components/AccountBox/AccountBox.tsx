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
    <div className="bg-white m-auto w-1/4 p-4 shadow-2xl rounded-lg">
      <div className="flex justify-end">
        <BoxMenu className="mr-3" />
        <Settings />
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
