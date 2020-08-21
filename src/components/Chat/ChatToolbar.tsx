import React, { FC } from 'react';

//svgs
import Asset15 from '../../svgs/Asset15';
import Asset12 from '../../svgs/Asset12';
import Asset10 from '../../svgs/Asset10';
import AttachFile from '../../svgs/AttachFile';
import PlayCircleOutline from '../../svgs/PlayCircleOutline';
import Mood from '../../svgs/Mood';
import MoodBad from '../../svgs/MoodBad';
import Phone from '../../svgs/Phone';
import ThumbUp from '../../svgs/ThumbUp';

export const ChatToolbar: FC<{}> = () => {
  return (
    <div className="flex py-2 px-4">
      <Asset15 className="mr-2" />
      <Asset12 className="mr-2" />
      <AttachFile className="mr-2" />
      <Asset10 className="mr-2" />
      <PlayCircleOutline className="mr-2" />
      <Mood className="mr-2" />
      <MoodBad className="mr-2" />
      <Phone className="mr-2" />
      <ThumbUp className="mr-2" />
    </div>
  );
};
