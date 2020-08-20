import React, { FC } from 'react';

//custom components
import { ParticipantInvite } from './ParticipantsInvite';
import { ParticipantList } from './ParticipantList';

export const Participants: FC<{}> = () => {
  const data: Array<Object> = [
    { name: 'user1', status: 'owner | moderator' },
    { name: 'user2', status: 'moderator' },
    { name: 'user3', status: 'moderator' },
    { name: 'user4', status: 'moderator' },
    { name: 'user5', status: 'moderator' },
    { name: 'user6', status: 'moderator' },
  ];
  return (
    <div className="m-auto w-1/5">
      <ParticipantInvite />
      <ParticipantList data={data} />
    </div>
  );
};
