import React, { FC } from 'react';

//img
import Close from '../../svgs/Close';

export const ParticipantInvite: FC<{}> = () => {
  return (
    <div className="py-8 border border-gray-300 bg-white">
      <div className="px-3 flex justify-between ">
        <h4 className="tracking-wider text-gray-700 text-lg">Participants</h4>
        <button className="focus:outline-none" onClick={() => alert('close')}>
          <Close />
        </button>
      </div>
      <div className="px-4 mt-3">
        <button
          onClick={() => alert('invite')}
          className="rounded bg-green-300 py-1 w-5/6 uppercase text-white text-xs hover:bg-green-400 focus:outline-none"
        >
          Invite
        </button>
      </div>
    </div>
  );
};
