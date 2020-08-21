import React from 'react'

import { Icon } from '../src/components/Icon'
import * as icons from '../src/svgs'

const iconList = [
  'AddCircle',
  'Arrow',
  'ArrowForward',
  'Asset10',
  'Asset12',
  'Asset15',
  'AttachFile',
  'BookmarkBorder',
  'BoxMenu',
  'Close',
  'Info',
  'Lock',
  'LockTwo',
  'Menu',
  'MessageArchiving',
  'Mood',
  'MoodBad',
  'NoPassword',
  'NotAnonymous',
  'NotModerated',
  'Open',
  'Persistent',
  'Phone',
  'PlayCircleOutline',
  'Settings',
  'ThumbUp',
] as const

export default {
  title: 'Icon',
  decorators: [
    (storyFn: any) => (
      <div style={{ backgroundColor: 'white', width: 500, padding: 32 }}>
        {storyFn()}
      </div>
    ),
  ],
}

const renderIcon = (icon: keyof typeof icons) => (
  <div style={{ display: 'flex', paddingBottom: 10 }}>
    <span style={{ width: 30 }}>
      <Icon name={icon} />
    </span>
    <span style={{ display: 'flex', alignItems: 'center', paddingLeft: 20 }}>
      {icon}
    </span>
  </div>
)

export const Default = () =>
  iconList.map(icon => <div key={icon}>{renderIcon(icon)}</div>)
