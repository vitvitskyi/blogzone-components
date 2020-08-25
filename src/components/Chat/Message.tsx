import React, { FC } from 'react';

type MessageProps = {
  message: string;
  time: string;
  username: string;
  me: boolean;
};

export const Message: FC<MessageProps> = ({ message, username, time, me }) => {
  return (
    <div>
      <div className={me ? 'flex justify-end mb-2' : 'flex'}>
        <span>{username}</span>
        {/*<span className="me?ml-3 text-gray-500 text-sm">{time}</span>*/}
        <div className={me ? 'justify-end' : ''}>
          <span className={'ml-3 text-gray-500 text-sm'}>{time}</span>
        </div>
      </div>
      <div className={me ? 'flex justify-end' : 'my-4'}>
        <span
          className={
            me
              ? 'bg-blue-600 px-2 py-2 mb-2 rounded text-white text-sm flex'
              : 'border border-green-400 px-2 py-2 rounded text-sm flex'
          }
        >
          {message}
        </span>
      </div>
    </div>
  );
};
