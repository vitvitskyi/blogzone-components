import React, { FC } from 'react';

import Lock from '../../svgs/Lock';
import { UserInfo } from './UserInfo';

export const HeaderInfo: FC<{}> = () => {
  const data: Array<Object> = [
    {
      number: '0000',
      gender: 'Mrs',
      name: 'Matthes',
      address: '10 Main St',
      date: '01-01-70',
    },
  ];
  return (
    <div className="p-0 lg:p-4 flex items-center bg-white">
      <div className="w-full  lg:w-11/12">
        <UserInfo data={data} />
      </div>
      <div className="hidden lg:block flex items-center ml-5">
        <Lock className="w-12 h-12" />
      </div>
    </div>
  );
};
