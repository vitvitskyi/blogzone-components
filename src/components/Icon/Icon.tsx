import React from 'react'

import * as icons from '../../svgs'

export type IconNames = keyof typeof icons

type Props = {
  name: IconNames
} & React.SVGProps<SVGSVGElement>

export const Icon = ({ name, ...props }: Props) => {
  const Icon = icons[name]
  if (Icon) {
    return <Icon {...props} />
  }
  return null
}
