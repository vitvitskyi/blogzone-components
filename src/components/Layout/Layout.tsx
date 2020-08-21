import React, { FC } from 'react';

//import components
import { Sidebar } from '../Sidebar/Sidebar';
import { Chat } from '../Chat';
import { AccountBox } from '../AccountBox';
import { Participants } from '../Participants';
import { HeaderInfo } from '../HeaderInfo';

export const Layout: FC<{}> = () => {
  return (
    <div className="p-8 bg-gray-300">
      <div className="flex justify-center">
        <div className="w-3/12">
          <Sidebar />
        </div>
        <div className="w-8/12">
          <HeaderInfo />
          <div className="mt-4">
            <Chat />
          </div>
        </div>
        <div className="w-2/12">
          <div className="ml-2">
            <AccountBox name="Adam Lee" />
          </div>
          <div className="mt-4">
            <Participants />
          </div>
        </div>
      </div>
    </div>
  );
};
