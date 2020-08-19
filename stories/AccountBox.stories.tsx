import React from 'react';

import {AccountBox} from "../src/components/AccountBox";

export default {
    title: 'Account Box',
    component: AccountBox,
}

export const Default = () => {
    return (
        <div className='h-screen flex align-center'>
            <AccountBox name={'John Doe'}/>
        </div>
      )
}