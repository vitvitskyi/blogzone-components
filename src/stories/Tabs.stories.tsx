import React, { useState } from 'react'
import { Tabs } from '../components/Tabs'

export default {
  title: 'TypeScript/Tabs',
  decorators: [
    // @ts-ignore TODO: Will fix it later
    storyFn => <>{storyFn()}</>,
  ],
}

export const Default = () => {
  const [activeTab, setActiveTab] = useState<number>(0)

  return (
    <Tabs
      style={{ color: 'red' }}
      activeTab={activeTab}
      changeTab={setActiveTab}
      tabs={['Tabs 1', 'Tabs 2', 'Tabs 3']}
    />
  )
}
