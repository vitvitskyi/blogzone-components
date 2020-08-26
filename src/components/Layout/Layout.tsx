import React, { FC } from 'react';

//import components
import { Sidebar } from '../Sidebar/Sidebar';
import { Chat } from '../Chat';
import { AccountBox } from '../AccountBox';
import { Participants } from '../Participants';
import { HeaderInfo } from '../HeaderInfo';

//types
import { ParticipantData } from 'types/common';

const data: Array<ParticipantData> = [
  { id: '1', name: 'user1', status: 'owner | moderator' },
  { id: '2', name: 'user2', status: 'moderator' },
  { id: '3', name: 'user3', status: 'moderator' },
  { id: '4', name: 'user4', status: 'moderator' },
  { id: '5', name: 'user5', status: 'moderator' },
  { id: '6', name: 'user6', status: 'moderator' },
];

export const Layout: FC<{}> = () => {
  return (
    <div className="p-8 bg-gray-300">
      <div className="flex justify-center">
        <div className="w-3/12">
          <Sidebar />
        </div>
        <div className="block lg:hidden w-full">
          <AccountBox name="Adam Lee" />
        </div>
        <div className="hidden lg:w-8/12 lg:block">
          <HeaderInfo />
          <div className="hidden lg:block mt-4">
            <Chat />
          </div>
        </div>
        <div className="hidden lg:w-2/12 lg:block">
          <div className="ml-2">
            <AccountBox name="Adam Lee" />
          </div>
          <div className="mt-4">
            <Participants data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};
