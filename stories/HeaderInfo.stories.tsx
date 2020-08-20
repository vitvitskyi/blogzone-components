import React from 'react';

import {HeaderInfo} from '../src/components/HeaderInfo'
export default {
    title: 'Header',
    component: HeaderInfo,
};

export const Default = () => {
    return (
        <div className='p-8 bg-gray-300 h-screen '>
            <HeaderInfo/>
        </div>
    )
};