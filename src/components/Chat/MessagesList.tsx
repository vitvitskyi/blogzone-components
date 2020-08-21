import React, { FC } from 'react';

//custom components
import { Message } from './Message';

type MessagesListProps = {
  data: any;
  day: string;
};

export const MessagesList: FC<MessagesListProps> = ({ day, data }) => {
  return (
    <>
      <span className="uppercase text-gray-600 tracking-wide text-xs">
        {day}
      </span>
      <div className="mt-8">
        {data.map(
          (
            msg: {
              message: string;
              time: string;
              username: string;
              me: boolean;
            },
            index: number
          ) => (
            <Message
              message={msg.message}
              time={msg.time}
              username={msg.username}
              key={index}
              me={msg.me}
            />
          )
        )}
      </div>
    </>
  );
};
