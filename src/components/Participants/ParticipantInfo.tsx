import React, { FC } from 'react';

//svgs
import NoPassword from '../../svgs/NoPassword';
import Open from '../../svgs/Open';
import Persistent from '../../svgs/Persistent';
import NotAnonymous from '../../svgs/NotAnonymous';
import NotModerated from '../../svgs/NotModerated';
import MessageArchiving from '../../svgs/MessageArchiving';

export const ParticipantInfo: FC<{}> = () => {
  return (
    <div className="bg-white flex flex-col pt-4 pb-2 pl-8 pt-4 border border-gray-300">
      <div className="flex">
        <NoPassword />
        <span className="ml-3 tracking-wide text-xs font-serif">
          No password
        </span>
      </div>
      <div className="flex pt-5">
        <Open />
        <span className="ml-3 tracking-wide text-xs font-serif">Open</span>
      </div>
      <div className="flex pt-5">
        <Persistent />
        <span className="ml-3 tracking-wide text-xs font-serif">
          Persistent
        </span>
      </div>
      <div className="flex pt-5">
        <NotAnonymous />
        <span className="ml-3 tracking-wide text-xs font-serif">
          Not anonymous
        </span>
      </div>
      <div className="flex pt-5">
        <NotModerated />
        <span className="ml-3 tracking-wide text-xs font-serif">
          Not moderator
        </span>
      </div>
      <div className="flex pt-5">
        <MessageArchiving />
        <span className="ml-3 tracking-wide text-xs font-serif">
          Message archiving
        </span>
      </div>
    </div>
  );
};
