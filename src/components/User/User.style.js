import styled from 'styled-components';

export const UserCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  margin: 10px;
  border: 2px solid black;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;

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
