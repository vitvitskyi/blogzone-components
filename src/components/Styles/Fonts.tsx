import React, { FC } from 'react';

export const Fonts: FC<{}> = () => {
  return (
    <>
      <table className="border-collapse">
        <tr>
          <th className="font-normal border p-2">classes</th>
          <th className="font-normal border p-2">size</th>
          <th className="font-normal border p-2">Example</th>
        </tr>
        <tr>
          <th className="text-xs py-4 px-8 border">text-xs</th>
          <th className="text-xs font-normal border py-4 px-8">12px</th>
          <th className="text-xs font-normal border py-4 px-8">text</th>
        </tr>
        <tr>
          <th className="text-sm border py-4 px-8">text-sm</th>
          <th className="text-sm font-normal border py-4 px-8">14px</th>
          <th className="text-sm font-normal border py-4 px-8">text</th>
        </tr>
        <tr>
          <th className="text-base border p-4">text-base</th>
          <th className="text-base font-normal border py-4 px-8">16px</th>
          <th className="text-base font-normal border py-4 px-8">text</th>
        </tr>
        <tr>
          <th className="text-lg border p-4">text-lg</th>
          <th className="text-lg font-normal border py-4 px-8">18px</th>
          <th className="text-lg font-normal border py-4 px-8">text</th>
        </tr>
        <tr>
          <th className="text-xl border py-4 px-8">text-xl</th>
          <th className="text-xl font-normal border py-4 px-8">20px</th>
          <th className="text-xl font-normal border py-4 px-8">text</th>
        </tr>
      </table>
    </>
  );
};
