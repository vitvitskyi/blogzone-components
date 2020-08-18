import styled, { css } from 'styled-components';

export const LiveRow = styled.div<{
  isLive: boolean;
}>`
  ${({ isLive }) =>
    isLive &&
    css`
      &:before {
        background: #ff8a00;
        position: absolute;
        content: '';
        height: 100%;
        width: 4px;
        display: block;
        left: 0;
        z-index: 20;
        top: 0;
      }
    `}
`;
