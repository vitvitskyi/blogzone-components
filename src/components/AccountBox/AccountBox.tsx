import React, { FC } from 'react';

//img
import BoxMenu from '../../svgs/BoxMenu';
import Settings from '../../svgs/Settings';

//custom components
import { Chats } from '../Chats';
import { IdCall } from '../IdCall';

type AccountBoxProps = {
  name: string;
};

export const AccountBox: FC<AccountBoxProps> = ({ name }) => {
  return (
    <div className="" style={{ backgroundColor: '#f1f5f7' }}>
      <div className="lg:bg-white py-3 px-4 flex flex-row-reverse justify-between items-center lg:items-start">
        <div className="flex lg:justify-end">
          <button
            className="mr-3 focus:outline-none"
            onClick={() => alert('Menu')}
          >
            <BoxMenu />
          </button>
          <button
            className="focus:outline-none"
            onClick={() => alert('Settings')}
          >
            <Settings />
          </button>
        </div>
        {/*need dynamic image, this for example */}
        <div className="flex items-center md:block ">
          <img
            src={require('../../../public/images/default_image.png')}
            className="mb-2 w-12 h-12"
            alt=""
          />
          <span className="text-black font-hairline ml-4 lg:ml-0">{name}</span>
        </div>
      </div>
      <div className="block lg:hidden p-4">
        <IdCall />
        <Chats />
      </div>
    </div>
  );
};
