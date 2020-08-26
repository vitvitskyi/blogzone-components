import React from 'react';

//custom components
import { Message } from './Message';

type message = {
  message: string;
  time: string;
  username?: string | undefined;
  me: boolean;
};

type MessagesListProps = {
  data: Array<message>;
  day: string;
};

export const MessagesList = ({ day, data }: MessagesListProps) => {
  return (
    <>
      <span className="block text-center lg:text-left uppercase text-gray-600 tracking-wide text-xs">
        {day}
      </span>
      <div className="mt-8">
        {data.map((msg, index) => (
          <Message
            message={msg.message}
            time={msg.time}
            username={msg.username}
            key={index}
            me={msg.me}
          />
        ))}
      </div>
    </>
  );
};
