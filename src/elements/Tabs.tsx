import styled, { css } from 'styled-components';

export type TabType = {
  isActive?: boolean;
};

export const Tabs = styled.div`
  display: flex;
  width: 100%;
  font-size: 0.68rem;
  justify-content: space-around;
  border-color: rgb(255, 138, 0);
  border-style: solid;
  border-width: 0px 0px 1px;
`;

export const Tab = styled.span<TabType>`
  position: relative;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  text-align: center;
  width: 100%;
  cursor: pointer;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  background-color: rgb(17, 17, 17);

  ${({ isActive }) =>
    isActive &&
    css`
      color: rgb(255, 138, 0);
      font-weight: 600;
      pointer-events: none;
      &:after {
        position: absolute;
        bottom: 0px;
        height: 0px;
        width: 0px;
        border-style: solid;
        left: 50%;
        content: '';
        border-color: rgba(255, 138, 0, 0);
        border-bottom-color: #ff8a00;
        margin-left: -7px;
        border-width: 5px 7px;
      }
    `}
`;
