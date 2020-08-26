import React from "react";

//types
import {ParticipantData} from '../src/types/common'

//custom components
import {Participants} from "../src/components/Participants";
import {ParticipantInvite} from '../src/components/Participants/ParticipantInvite';
import {ParticipantList} from "../src/components/Participants/ParticipantList";
import {ParticipantInfo} from "../src/components/Participants/ParticipantInfo";

export default {
    title: 'Participants',
    component: Participants,
};

const data: Array<ParticipantData> = [
    { id: '1', name: 'user1', status: 'owner | moderator' },
    { id: '2', name: 'user2', status: 'moderator' },
    { id: '3', name: 'user3', status: 'moderator' },
    { id: '4', name: 'user4', status: 'moderator' },
    { id: '5', name: 'user5', status: 'moderator' },
    { id: '6',  name: 'user6', status: 'moderator' },
]

export const Default = () => {
    return (
        <div className='h-screen flex align-center pt-2 justify-center bg-gray-300'>
            <div className='w-2/12'>
                <Participants data={data} />
            </div>
        </div>
    );
};

export const Invite = () => {
    return (
        <div className='h-screen bg-gray-300 pt-32'>
            <div className='w-2/12 m-auto'>
                <ParticipantInvite/>
            </div>
        </div>
    );
};

export const InviteList = () => {
    const data: Array<Object> = [
        { name: 'user1', status: 'owner | moderator' },
        { name: 'user2', status: 'moderator' },
        { name: 'user3', status: 'moderator' },
        { name: 'user4', status: 'moderator' },
        { name: 'user5', status: 'moderator' },
        { name: 'user6', status: 'moderator' },
    ];
    return (
        <div className='pt-32 h-screen bg-gray-300'>
            <div className='w-2/12 m-auto'>
                <ParticipantList data={data}/>
            </div>
        </div>
    );
};

export const Info = () => {
    return (
        <div className='pt-32 h-screen bg-gray-300'>
            <div className='w-2/12 m-auto'>
                <ParticipantInfo/>
            </div>
        </div>
    );
};