import React, { FC } from 'react'

import { IdCallWrapper, TextStyle, FlexWrap, FlexInner } from './styled'
import Menu from '../../svgs/Menu'
import AddCircle from '../../svgs/AddCircle'

interface TabDictionary {
  [key: number]: string
}

type IdCallsProps = {
  name: string
}

export const IdCalls: FC<IdCallsProps> = ({ name }) => {
  return (
    <IdCallWrapper>
      <FlexWrap>
        <TextStyle>{name}</TextStyle>
        <FlexInner>
          <Menu />
          <AddCircle />
        </FlexInner>
      </FlexWrap>
    </IdCallWrapper>
  )
}
