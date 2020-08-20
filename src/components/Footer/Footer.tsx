import React, { FC } from 'react';

import { FooterSidebar } from './FooterSidebar';
import { FooterContent } from './FooterContent';

export const Footer: FC<{}> = () => (
  <div>
    <FooterSidebar />
    <FooterContent />
  </div>
);
