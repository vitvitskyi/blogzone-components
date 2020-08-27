import React, { useState, FC, ChangeEvent } from 'react';

export const FileUploader: FC<{}> = () => {
  const [photo, setPhoto] = useState<string>('');

  const handleChangePhoto = (e: ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
      // @ts-ignore
      setPhoto(e.target.result);
    };
    reader.readAsDataURL(file);
  };
  return (
    <>
      <label htmlFor="upload-button">
        {photo ? (
          <div className="w-24 h-24 rounded-full">
            <img
              src={photo}
              style={{ objectFit: 'contain' }}
              className="w-full h-full rounded-full"
              alt=""
            />
          </div>
        ) : (
          <div
            className="flex justify-center items-center w-24 h-24 rounded-full"
            style={{ backgroundColor: '#0f2027' }}
          >
            <h5 className="text-white">Upload photo</h5>
          </div>
        )}
      </label>
      <input
        type="file"
        id="upload-button"
        style={{ display: 'none' }}
        onChange={handleChangePhoto}
      />
    </>
  );
};
