import React, { FC } from 'react';

import { IdCallUser } from './IdCallUser';

export const IdCall: FC<{}> = () => {
  return (
    <div className="mb-2">
      <div className="flex justify-center mt-3">
        <IdCallUser name="0000 Matthes" />
      </div>
    </div>
  );
};
