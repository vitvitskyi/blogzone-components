import React, { FC } from 'react';

//svgs
import Menu from '../../svgs/Menu';
import AddCircle from '../../svgs/AddCircle';

type SidebarHeaderProps = {
  title: string;
};

export const SidebarHeader: FC<SidebarHeaderProps> = ({ title }) => {
  return (
    <div className="flex justify-between">
      <h4 className="text-white tracking-wide font-medium uppercase">
        {title}
      </h4>
      <div className="flex">
        <button className="focus:outline-none">
          <Menu className="text-white w-4 h-4 mr-4 " />
        </button>
        <button className="focus:outline-none">
          <AddCircle className="text-white w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
