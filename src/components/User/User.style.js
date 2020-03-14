import styled from 'styled-components';

export const UserCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 310px;
  margin: 10px;
  border: 2px solid black;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);
  transition: 0.5s;
  :hover {
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  }
  .company-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const Divider = styled.hr`
  width: 80%;
`;
