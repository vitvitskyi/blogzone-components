import React, { FC } from 'react';

type ParticipantItem = {
  name: string;
  status: string;
};

export const ParticipantItem: FC<ParticipantItem> = ({ name, status }) => {
  return (
    <div className="flex mb-6">
      <img
        src={require('../../../public/images/default_image.png')}
        className="h-8 w-8"
        alt=""
      />
      <div className="flex flex-col ml-3">
        <h3 className="text-xs">{name}</h3>
        <span className="text-gray-700 uppercase" style={{ fontSize: 9 }}>
          {status}
        </span>
      </div>
    </div>
  );
};
