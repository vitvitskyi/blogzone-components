import React, { FC, useState } from 'react';

//svgs
import ArrowForward from '../../svgs/ArrowForward';
import Lock from '../../svgs/Lock';

type UserInfoProps = {
  data: any;
};

export const UserInfo: FC<UserInfoProps> = ({
  data: [{ number, gender, name, address, date }],
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className="w4/5  py-2 px-3 rounded-md rounded-lg hidden lg:block"
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
      <div className="shadow-md p-4 block lg:hidden">
        <div className="flex justify-between items-center">
          <div className="flex">
            <button
              className="focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <ArrowForward
                  className="rotate-90 w-4 h-4"
                  style={{ transform: `rotate(${-90}deg)`, color: '#fff' }}
                />
              ) : (
                <ArrowForward
                  className="rotate-90 w-4 h-4"
                  style={{ transform: `rotate(${90}deg)` }}
                />
              )}
            </button>
            <h1 className="ml-2">ID INFORMATION</h1>
          </div>
          <Lock />
        </div>
        {isOpen ? (
          <table className="w-full">
            <tr className="border-b">
              <td className="py-2 pl-1">NR</td>
              <td>{number}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pl-1">Gender</td>
              <td>{gender}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pl-1">Name</td>
              <td>{name}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pl-1">Address</td>
              <td>{address}</td>
            </tr>
            <tr>
              <td className="py-2 pl-1">DOB</td>
              <td>{date}</td>
            </tr>
          </table>
        ) : null}
      </div>
    </>
  );
};
