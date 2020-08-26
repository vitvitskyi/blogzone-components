import React, { FC } from 'react';

// custom components
import { InfoBlock } from '../../components/HeaderInfo/InfoBlock';
import { IdCallUser } from '../../components/IdCall/IdCallUser';

export const IdCallInfo: FC<{}> = () => {
  const data: Object = {
    number: '0000',
    gender: 'Mrs',
    name: 'Matthes',
    address: '10 Main St',
    date: '01-01-70',
  };
  // @ts-ignore
  const { number, gender, name, address, date } = data;
  return (
    <div className="px-4 py-8" style={{ backgroundColor: '#f1f5f7' }}>
      <IdCallUser
        isArrowBack={true}
        svgColor1={'#434445'}
        svgColor2={'#434445'}
        svgColor3={'#434445'}
        colorText={'#434445'}
        backgroundColor={'#f1f5f7'}
        name={'John Doe'}
      />
      <InfoBlock
        forExample={true}
        backgroundColor={'#fff'}
        call
        number={number}
        name={name}
        address={address}
        gender={gender}
        date={date}
        title={'ID CALL'}
      />
    </div>
  );
};
