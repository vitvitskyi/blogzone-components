import React, { FC } from 'react';

import { Sidebar } from '../Sidebar/Sidebar';

export const Layout: FC<{}> = () => {
  return (
    <div>
      <div className="w-6/12">
        <Sidebar />
      </div>
    </div>
  );
};
