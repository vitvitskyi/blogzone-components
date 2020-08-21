import React from "react";

//custom components
import {Participants} from "../src/components/Participants";
import {ParticipantInvite} from '../src/components/Participants/ParticipantInvite';
import {ParticipantList} from "../src/components/Participants/ParticipantList";
import {ParticipantInfo} from "../src/components/Participants/ParticipantInfo";

export default {
    title: 'Participants',
    component: Participants,
};

export const Default = () => {
    return (
        <div className='h-screen flex align-center pt-2 justify-center bg-gray-300'>
            <div className='w-2/12'>
                <Participants />
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