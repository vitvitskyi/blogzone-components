import React from 'react'

//custom components
import {Sidebar} from '../src/components/Sidebar'
import {IdCallUser} from "../src/components/IdCall/IdCallUser";
import {IdCallInfo} from '../src/components/IdCall/IdCallInfo';
import {Chats} from '../src/components/Chats'

export default {
  title: 'Sidebar',
  component: Sidebar,
}

export const InAll = () => {
  return (
   <div className='h-screen bg-gray-300 pt-5'>
       <div className='w-3/12 m-auto'>
           <Sidebar/>
       </div>

   </div>
  )
};

export const IdCallUserComponent = () => {
    return (
        <div className='h-screen pt-32 bg-gray-300'>
            <div className='w-3/6 m-auto'>
                <IdCallUser colorText={'#fff'}
                            svgColor1={'#fff'}
                            svgColor2={'#fff'}
                            svgColor3={'#fff'}
                            backgroundColor={'#009ace'}
                            name='John Doe'
                            isArrowBack={false}
                />
            </div>

        </div>
    )
};
export const IdCallInfoComponent = () => {
    return (
        <div className='w-3/6 m-auto pt-32'>
            <IdCallInfo/>
        </div>
    )
};

export const ChatsSidebar = () => {
    return (
        <div className='h-screen bg-gray-300 pt-32'>
            <div className=' w-2/6 m-auto'>
                <Chats/>
            </div>

        </div>
    )
};