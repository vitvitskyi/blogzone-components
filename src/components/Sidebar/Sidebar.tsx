import React, { FC } from 'react';

import { SidebarHeader } from './SidebarHeader';
import { IdCall } from '../IdCall';
import { Chats } from '../Chats';
import { FooterSidebar } from '../Footer/FooterSidebar';

export const Sidebar: FC<{}> = () => {
  return (
    <>
      <div
        className="w-2/5 m-auto p-2 rounded"
        style={{ backgroundColor: '#0086b4' }}
      >
        <SidebarHeader title={'id call'} />
        <IdCall />
      </div>
      <div className="mt-3 w-2/5 m-auto">
        <Chats />
      </div>
      <div className="mt-3 w-2/5 m-auto">
        <FooterSidebar />
      </div>
    </>
  );
};
