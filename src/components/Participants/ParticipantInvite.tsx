import React, { FC } from 'react';

//custom components
import { Button } from '../../elements/Button';

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
        <Button
          backgroundColor="bg-green-300"
          rounded={4}
          title="invite"
          width="w-5/6"
          height="h-8"
          hover="bg-green-400"
        />
      </div>
    </div>
  );
};
