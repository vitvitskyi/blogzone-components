import React from 'react';

//custom
import {Button} from '../src/elements/Button'
import {Fonts} from '../src/components/Styles';
import {Input} from '../src/elements/Input'

export default {
    title: 'Styles Components',
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
                    width='w-16'
                    textSize='text-xs'
                    height='h-8'
                    textColor='text-white'
                    title='Small'
                    hover='bg-red-800'
                    onClick={()=>alert('It is a small button!')}/>
            </div>
            <div className='ml-6'>
                <p>Default button</p>
                <Button
                    backgroundColor='bg-ls_primary'
                    hover='bg-yellow-600'
                    onClick={()=>alert('It is a default button!')}/>
            </div>
            <div className='ml-6'>
                <p>Large</p>
                <Button
                    height='h-12'
                    width={'w-40'}
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
                    rounded={4}
                    title='disabled'
                />
            </div>
        </div>
    );
};

export const FontSize = () => {
    return (
        <div className='pt-32'>
            <div className='w-3/6 m-auto'>
                <Fonts/>
            </div>

        </div>
    );
};

export const Inputs = () => {
    return (
        <div className='w-2/6 pt-32 m-auto'>
            <div>
                <Input
                    type='text'
                    placeholder='default...'
                />
            </div>
          <div className='mt-4'>
              <Input
                  type='text'
                  disabled
                  placeholder='Disabled...'
                  labelColor='text-gray-600'
                  label='Disabled Input'
              />
          </div>
         <div className='mt-4'>
             <Input
                 type='text'
                 label='Colors Input'
                 labelColor='text-green-400'
                 placeholder='colors...'
                 inputTextColor='text-red-500'
             />
         </div>
        </div>
    )
}