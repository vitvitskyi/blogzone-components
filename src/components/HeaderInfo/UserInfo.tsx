import React, { FC } from 'react';

type UserInfoProps = {
  data: any;
};

export const UserInfo: FC<UserInfoProps> = ({
  data: [{ number, gender, name, address, date }],
}) => {
  return (
    <div
      className="w4/5 py-2 px-3 rounded-md rounded-lg"
      style={{ backgroundColor: '#f2f5f7' }}
    >
      <div className="flex justify-around">
        <span className="md:ml-2">{number}</span>
        <span className="md:ml-4">{gender}</span>
        <span className="md:ml-6"> {name}</span>
        <span className="md:ml-2">{address}</span>
        <span className="md:ml-2">{date}</span>
      </div>
      <div className="flex justify-around">
        <span className="text-gray-500 text-xs uppercase">NR</span>
        <span className="text-gray-500 text-xs uppercase">Gender</span>
        <span className="text-gray-500 text-xs uppercase">Name</span>
        <span className="text-gray-500 text-xs uppercase">Address</span>
        <span className="text-gray-500 text-xs uppercase">DOB</span>
      </div>
    </div>
  );
};
