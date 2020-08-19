import styled from 'styled-components';

export const Tooltip = styled.div`
  display: none;
  position: absolute;
  background-color: #636262;
  border-radius: 4px;
  white-space: pre;
  text-align: left;
  padding: 4px;
  right: -5px;
  top: 50%;
  transform: translate(100%, -50%);
  color: white;

  :after {
    content: '';
    position: absolute;
    left: -5px;
    top: 50%;
    transform: translateY(-50%);

    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-right: 6px solid #636262;
  }
`;
