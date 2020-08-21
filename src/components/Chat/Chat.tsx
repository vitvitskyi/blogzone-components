import React, { FC } from 'react';

//custom component
// import { UserInfo } from '../HeaderInfo/UserInfo';
import { HeaderInfo } from '../HeaderInfo';
import { MessagesList } from './MessagesList';
import { MessageControls } from './MessageControls';

export const Chat: FC<{}> = () => {
  // const data: Array<Object> = [
  //   {
  //     number: '0002',
  //     gender: 'Mrs',
  //     name: 'King',
  //     address: '10 Main St',
  //     date: '01-01-70',
  //   },
  // ];
  const messages: any = [
    {
      date: 'Tuesday dec 17th 2020',
      data: [
        {
          username: 'Mrs.King',
          message:
            'lorem dsfsdfds sdfsdfds sdfsdfsdfs dsfdsfdsf sfdsdfsdfds vsdfsdf sdfsdfsdf sdfsdfdsf dsfsdfsdf sdfsdf',
          time: '21:22',
          me: false,
        },
        {
          message: 'lorem dsfsdfds sdfsdfds',
          time: '21:22',
          me: true,
        },
      ],
    },
    {
      date: 'Tuesday dec 19th 2020',
      data: [
        {
          username: 'Mrs.King',
          message:
            'lorem dsfsdfds sdfsdfds sdfsdfsdfs dsfdsfdsf sfdsdfsdfds vsdfsdf sdfsdfsdf',
          time: '19:22',
          me: false,
        },
        {
          message: 'lorem dsfsdfds',
          time: '20:15',
          me: true,
        },
      ],
    },
  ];
  return (
    <div className="bg-white">
      {/*<UserInfo data={data} />*/}
      <HeaderInfo />
      <div className="mt-12 mx-8 mb-4">
        {messages.map((msg: { data: any; date: string }, index: number) => (
          <MessagesList data={msg.data} key={index} day={msg.date} />
        ))}
      </div>
      <hr />
      <MessageControls />
    </div>
  );
};
