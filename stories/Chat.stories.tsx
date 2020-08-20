import React from 'react';

import {Chat} from '../src/components/Chat'
export default {
    title: 'Chat',
    component: Chat,
};

export const Default = () => {
    return (
        <div className='p-8'>
            <div className='w-6/12 m-auto'>
                <Chat/>
            </div>

        </div>
    )
};