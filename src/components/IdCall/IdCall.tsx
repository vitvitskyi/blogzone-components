import React, { FC } from 'react';

import { IdCallUser } from './IdCallUser';

export const IdCall: FC<{}> = () => {
  return (
    <div className="mb-2">
      <div className="flex justify-center pb-2 mt-3">
        <IdCallUser
          isArrowBacK={false}
          svgColor1={'#fff'}
          svgColor2={'#fff'}
          svgColor3={'#fff'}
          colorText={'#fff'}
          name="0000 Matthes"
          backgroundColor="#009ace"
        />
      </div>
    </div>
  );
};
