import React from 'react';

import {HeaderInfo} from '../src/components/HeaderInfo'
export default {
    title: 'Header',
    component: HeaderInfo,
};

export const Default = () => {
    return (
        <div className='pt-32 bg-gray-300 h-screen'>
            <div className='w-8/12 m-auto'>
                <HeaderInfo/>
            </div>
        </div>
    );
};