import styled from '@emotion/styled'
import { css } from '@emotion/core'

export const TabsWrapper = styled.div<{
  isBottomLine: boolean
}>`
  display: flex;
  font-size: 0.68rem;
  width: 100%;
  justify-content: space-around;

  ${({ isBottomLine }) =>
    isBottomLine &&
    css`
      border-bottom: 1px solid #ff8a00;
    `}
`

type TabProps = {
  isActive?: boolean
}

export const TabItem = styled.span<TabProps>`
  position: relative;
  display: flex;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  text-align: center;
  width: 100%;
  cursor: pointer;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  background-color: #111111;

  &:hover {
    background-color: #212121;
  }
  ${({ isActive }) =>
    isActive &&
    css`
      color: #ff8a00;
      font-weight: 600;
      pointer-events: none;
      &:after {
        position: absolute;
        bottom: 0;
        border-style: solid;
        border-color: transparent;
        height: 0;
        width: 0;
        left: 50%;
        content: '';
        border-color: rgba(255, 138, 0, 0);
        border-bottom-color: #ff8a00;
        margin-left: -7px;
        border-width: 5px 7px;
      }
    `}
`

export const IdCallWrapper = styled.div<{}>`
  width: 320px;
  height: 139px;
  border-radius: 6px 0 0 6px;
  background-color: #0086b4;
`
export const TextStyle = styled.p<{}>`
  font-size: 16px;
  text-transform: uppercase;
  color: #ffffff;
  font-family: sans-serif;
`

export const Flex = styled.div<{}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const FlexWrap = styled(Flex)<{}>`
  margin: 0 auto;
  max-width: 272px;
`
export const FlexInner = styled(Flex)<{}>`
  min-width: 53px;
`
