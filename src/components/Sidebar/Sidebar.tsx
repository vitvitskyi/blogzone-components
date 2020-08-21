import React, { FC } from 'react';

//custom components
import { SidebarHeader } from './SidebarHeader';
import { IdCall } from '../IdCall';
import { Chats } from '../Chats';
import { FooterSidebar } from '../Footer/FooterSidebar';

export const Sidebar: FC<{}> = () => {
  return (
    <>
      <div className=" m-auto rounded" style={{ backgroundColor: '#0086b4' }}>
        <div className="px-3 py-2">
          <SidebarHeader title={'id call'} />
        </div>
        <div className="w-full">
          <IdCall />
        </div>
      </div>
      <div className="mt-3 m-auto">
        <Chats />
      </div>
      <div className="mt-3  m-auto">
        <FooterSidebar />
      </div>
    </>
  );
};
