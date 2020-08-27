import React, { FC, useState, useEffect, FormEvent, ChangeEvent } from 'react';

// types
import { ProfileData } from '../../types/common';

//custom components
import { FileUploader } from './FileUploader';

//custom elements
import { Input } from '../../elements/Input';
import { Button } from '../../elements/Button';

//svg
import Close from '../../svgs/Close';

const helpText: string =
  'Use commas to separate multiple roles. Your roles are shown next to your name on your chat messages.';

type ProfileBoxesProps = {
  data: ProfileData;
};

export const ProfileBoxes: FC<ProfileBoxesProps> = ({ data }) => {
  const [formData, setFormData] = useState<ProfileData>({
    fullName: '',
    nickName: '',
    url: '',
    email: '',
    role: '',
  });

  useEffect(() => {
    setFormData({
      fullName: data.fullName,
      nickName: data.nickName,
      url: data.url,
      email: data.email,
      role: data.role,
    });
  }, [data.fullName, data.nickName, data.role, data.email, data.url]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(JSON.stringify(formData));
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { value: inputText, name: inputName },
    } = e;

    setFormData({ ...formData, [inputName]: inputText });
  };

  const { fullName, nickName, email, role, url } = formData;
  // style={{ height: 700, overflow: 'auto' }}
  return (
    <div className="border pt-4">
      <div className="flex justify-between px-4 mb-4">
        <span className="text-xl text-gray-600">Your Profile</span>
        <button className="focus:outline-none" onClick={() => alert('closed')}>
          <Close />
        </button>
      </div>
      <hr />
      <div className="flex ml-6 py-4">
        <FileUploader />
        <div className="ml-4 mt-2">
          <span className="text-md text-gray-800">XMPP Address (JID):</span>
          <p className="text-sm text-gray-600 mt-2">
            5620@bloqzone.goodbytes.im
          </p>
        </div>
      </div>
      <form className="px-6" onSubmit={handleSubmit}>
        <Input
          type="text"
          label="Full Name:"
          value={fullName}
          inputTextWeight="font-hairline"
          // inputTextColor='text-md'
          labelFont="font-semibold"
          labelColor="text-gray-600"
          name="fullName"
          margin="mt-4"
          onChange={handleInputChange}
        />
        <Input
          type="text"
          label="NickName:"
          labelColor="text-gray-600"
          labelFont="font-semibold"
          value={nickName}
          margin="mt-4"
          name="nickName"
          onChange={handleInputChange}
        />
        <Input
          type="text"
          label="URL:"
          labelColor="text-gray-600"
          labelFont="font-semibold"
          value={url}
          name="url"
          margin="mt-4"
          onChange={handleInputChange}
        />
        <Input
          type="text"
          label="Email:"
          labelColor="text-gray-600"
          labelFont="font-semibold"
          value={email}
          margin="mt-4"
          name="email"
          onChange={handleInputChange}
        />
        <Input
          type="text"
          value={role}
          margin="mt-4 mb-4"
          label="Role:"
          labelColor="text-gray-600"
          labelFont="font-semibold"
          name="role"
          onChange={handleInputChange}
          helpText={helpText}
          helpTextStyles="text-xs text-gray-500 font-mono mt-2 ml-2"
        />
        <hr />
        <Button
          type="submit"
          margin="mt-8 mb-8"
          title="Save and Close"
          labelColor="text-gray-600"
          backgroundColor="bg-blue-700"
          hover="bg-blue-800"
          rounded={5}
        />
      </form>
    </div>
  );
};
