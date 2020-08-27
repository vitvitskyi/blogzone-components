import React from "react";

//custom components
import {ProfileBoxes} from '../src/components/ProfileBoxes'

//types
import {ProfileData} from '../src/types/common'

export default {
    title: 'Profile Boxes',
    component: ProfileBoxes,
};

const data:ProfileData = {
    fullName: 'John Doe',
    nickName: 5620,
    url: 'http://testurl',
    email: 'doe@example.com',
    role: 'Admin'
}

export const All = () => {
    return (
        <div className='m-auto w-4/12'>
            <ProfileBoxes data={data}/>
        </div>
    )
};