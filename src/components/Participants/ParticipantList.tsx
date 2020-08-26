import React, { FC } from 'react';

// custom components
import { ParticipantItem } from './ParticipantItem';

//types
import { ParticipantData } from 'types/common';

type ParticipantListProps = {
  data: Array<ParticipantData>;
};

export const ParticipantList: FC<ParticipantListProps> = ({ data }) => {
  return (
    <div className="p-5 border border-gray-300 flex flex-col justify-center bg-white">
      {data.map(
        (
          item: { name: string; status: string },
          index: string | number | undefined
        ) => (
          <ParticipantItem key={index} name={item.name} status={item.status} />
        )
      )}
    </div>
  );
};
