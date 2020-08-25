import React, { FC, useState } from 'react';
import ArrowForward from '../../svgs/ArrowForward';
import Lock from '../../svgs/Lock';

type InfoBlockProps = {
  number: number;
  gender: string;
  name: string;
  address: string;
  date: string;
  title: string;
  call: boolean;
  backgroundColor: string;
  forExample: boolean;
};
export const InfoBlock: FC<InfoBlockProps> = ({
  number,
  gender,
  name,
  address,
  date,
  title,
  call,
  backgroundColor,
  forExample,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={forExample ? 'shadow-md p-4' : 'shadow-md p-4 block lg:hidden'}
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="flex justify-between items-center">
        <div className="flex">
          {!call ? (
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
          ) : null}

          <h1 className="ml-2">{title}</h1>
        </div>
        <Lock />
      </div>
      {isOpen || call ? (
        <table className="w-full">
          <tr className="border-b">
            <td className="py-2 pl-1 text-gray-600">NR</td>
            <td>{number}</td>
          </tr>
          <tr className="border-b">
            <td className="py-2 pl-1 text-gray-600">Gender</td>
            <td>{gender}</td>
          </tr>
          <tr className="border-b">
            <td className="py-2 pl-1 text-gray-600">Name</td>
            <td>{name}</td>
          </tr>
          <tr className="border-b">
            <td className="py-2 pl-1 text-gray-600">Address</td>
            <td>{address}</td>
          </tr>
          <tr>
            <td className="py-2 pl-1 text-gray-600">DOB</td>
            <td>{date}</td>
          </tr>
        </table>
      ) : null}
    </div>
  );
};
