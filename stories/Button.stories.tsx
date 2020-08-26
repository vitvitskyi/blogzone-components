import React from 'react';

import {Button} from '../src/components/Button'

export default {
    title: 'Components',
    component: Button,
};

export const Buttons = () => {
    return (
        <div className='pt-8 pl-8 flex'>
            <div>
                <p>Small button</p>
                <Button
                    backgroundColor='bg-red-600'
                    rounded={8}
                    width={60}
                    textSize='text-xs'
                    height={40}
                    textColor='text-white'
                    title='Small'
                    hover='bg-red-800'
                    onClick={()=>alert('It is a small button!')}/>
            </div>
            <div className='ml-6'>
                <p>Default button</p>
                <Button
                    backgroundColor='bg-ls_primary'
                    hover='bg-orange-800'
                    onClick={()=>alert('It is a default button!')}/>
            </div>
            <div className='ml-6'>
                <p>Large</p>
                <Button
                    height={60}
                    width={140}
                    rounded={12}
                    backgroundColor='bg-green-600'
                    hover='bg-green-500'
                    title='Large'
                    onClick={()=>alert('It is a large button!')}/>
            </div>
            <div className='ml-6'>
                <p>Disabled</p>
                <Button
                    disabled
                    height={40}
                    width={120}
                    rounded={4}
                    title='Large'
                />
            </div>
        </div>
    );
};