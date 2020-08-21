import React, { FC } from 'react';

//custom component
import { ChatToolbar } from './ChatToolbar';

export const MessageControls: FC<{}> = () => {
  return (
    <div className="py-2 px-4">
      <ChatToolbar />
      <textarea
        className="w-full border border-gray-300 px-2 py-2 text-sm focus:outline-none"
        placeholder="Type message, drag and drop or paste picture here"
        name=""
        id=""
      />
      <div className="flex justify-between">
        <span className="text-gray-700 text-xs">
          This groupchat is not anonymous
        </span>
        <button className="text-white rounded bg-green-300 px-2 py-1 text-sm focus:outline-none hover:bg-green-500">
          Send
        </button>
      </div>
    </div>
  );
};
