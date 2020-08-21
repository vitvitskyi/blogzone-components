import React, { FC } from 'react';

import { SidebarHeader } from '../Sidebar/SidebarHeader';
import { ChatsItem } from './ChatsItem';

export const Chats: FC<{}> = () => {
  return (
    <div className="py-4 pl-4 pr-2" style={{ backgroundColor: '#0086b4' }}>
      <div className="mb-4">
        <SidebarHeader title="Chats" />
      </div>

      {[1, 2, 3, 4, 5, 6, 7, 8].map(index => (
        <ChatsItem key={index} name={'John Doe'} />
      ))}
    </div>
  );
};
