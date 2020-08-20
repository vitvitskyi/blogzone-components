import React from 'react'

import {Sidebar} from '../src/components/Sidebar'
import {IdCallUser} from "../src/components/IdCall/IdCallUser";
import {Chats} from '../src/components/Chats'

export default {
  title: 'Sidebar',
  component: Sidebar,
}

export const InAll = () => {
  return (
   <div className='mt-5'>
     <Sidebar/>
   </div>
  )
};

export const IdCallUserComponent = () => {
    return (
        <div className='m-auto mt-5 w-2/6'>
            <IdCallUser name='John '/>
        </div>
    )
}
export const ChatsSidebar = () => {
    return (
        <div className='m-auto mt-5 w-2/6'>
            <Chats/>
        </div>
    )
}
