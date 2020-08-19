import React from "react";

import {Participants} from "../src/components/Participants";

export default {
    title: 'Participants',
    component: Participants,
};

export const Default = () => {
    return (
        <div className='h-screen flex align-center'>
            <Participants/>
        </div>
    )
}