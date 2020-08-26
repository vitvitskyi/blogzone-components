import React from 'react';

//custom components
import { ParticipantInvite } from './ParticipantInvite';
import { ParticipantList } from './ParticipantList';
import { ParticipantInfo } from './ParticipantInfo';
import { ParticipantData } from 'types/common';

type ParticipantProps = {
  data: Array<ParticipantData>;
};

export const Participants = ({ data }: ParticipantProps) => {
  return (
    <div className="m-auto">
      <ParticipantInvite />
      <ParticipantList data={data} />
      <ParticipantInfo />
    </div>
  );
};
