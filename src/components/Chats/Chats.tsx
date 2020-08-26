import React, { FC, CSSProperties } from 'react';

//custom components
import { SidebarHeader } from '../Sidebar/SidebarHeader';
import { ChatsItem } from './ChatsItem';

const styles: CSSProperties = { backgroundColor: '#0086b4' };

export const Chats: FC<{}> = () => {
  return (
    <div className="rounded-lg lg:rounded-none py-4 pl-4 pr-2" style={styles}>
      <div className="mb-4">
        <SidebarHeader title="Chats" />
      </div>

      {[1, 2, 3, 4, 5, 6, 7, 8].map(index => (
        <ChatsItem key={index} name={'John Doe'} />
      ))}
    </div>
  );
};
