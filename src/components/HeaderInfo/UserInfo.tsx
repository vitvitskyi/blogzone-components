import React, { FC } from 'react';

type UserInfoProps = {
  data: any;
};

export const UserInfo: FC<UserInfoProps> = ({
  data: [{ number, gender, name, address, date }],
}) => {
  return (
    <div className="w4/5 p-6" style={{ backgroundColor: '#f2f5f7' }}>
      <div className="flex justify-around">
        <span>{number}</span>
        <span>{gender}</span>
        <span>{name}</span>
        <span>{address}</span>
        <span>{date}</span>
      </div>
      <div className="flex justify-around">
        <span className="text-gray-500 text-sm uppercase">NR</span>
        <span className="text-gray-500 text-sm uppercase">Gender</span>
        <span className="text-gray-500 text-sm uppercase">Name</span>
        <span className="text-gray-500 text-sm uppercase">Address</span>
        <span className="text-gray-500 text-sm uppercase">DOB</span>
      </div>
    </div>
  );
};
