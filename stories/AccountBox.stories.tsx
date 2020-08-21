import React from 'react';

import {AccountBox} from "../src/components/AccountBox";

export default {
    title: 'Account Box',
    component: AccountBox,
}

export const Default = () => {
    return (
        <div className='h-screen flex justify-center items-center  bg-gray-300'>
            <div className='w-3/12'>
                <AccountBox name={'John Doe'}/>
            </div>
        </div>
      )
}