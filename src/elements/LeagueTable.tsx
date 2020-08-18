import styled from 'styled-components';

export const LeagueTable = styled.div`
  width: 100%;
  color: #aaa;
  font-size: 11px;

  .dark-blue {
    background-color: #00356e;
    color: #fff;
  }

  .medium-blue {
    background-color: #00448c;
    color: #fff;
  }

  .light-blue {
    background-color: #0052aa;
    color: #fff;
  }

  .dark-yellow {
    background-color: #6e6200;
    color: #fff;
  }

  .light-yellow {
    background-color: #9b9b00;
    color: #fff;
  }

  .dark-green {
    background-color: #006400;
    color: #fff;
  }

  .light-green {
    background-color: #1e821e;
    color: #fff;
  }

  .dark-red {
    background-color: #6e0000;
    color: #fff;
  }

  .light-red {
    background-color: #a00000;
    color: #fff;
  }

  .dark-purple {
    background-color: #570057;
    color: #fff;
  }

  .light-purple {
    background-color: purple;
    color: #fff;
  }

  .dark-teal {
    background-color: #006e6e;
    color: #fff;
  }

  .light-teal {
    background-color: #008c8c;
    color: #fff;
  }
`;
export const Title = styled.div`
  display: flex;
  align-items: center;

  & > *:not(button) {
    flex: 1;
  }
`;
export const THead = styled.thead`
  background: #212121;
`;
export const CenterHeader = styled.th`
  width: 27px;
  text-align: center;
`;
export const RightHeader = styled(CenterHeader)`
  text-align: right;
  padding: 0 4px;
`;
export const TeamsHeader = styled.th`
  text-align: left;
  padding: 0 4px;
`;
export const CenterCell = styled.td`
  text-align: center;
`;
export const RightCell = styled.td`
  text-align: right;
`;
export const TeamCell = styled.td`
  padding: 0 4px;
`;
