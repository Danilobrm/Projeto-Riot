import styled from 'styled-components';

export const LoginSocial = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 10px 0 0 0;

  button {
    width: 100%;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:nth-child(1) {
      background-color: #0966de;
      width: 100%;
    }
    &:nth-child(2) {
      background-color: #fff;
    }
    &:nth-child(3) {
      background-color: black;
      img {
        width: fit-content;
      }
    }
    &:nth-child(4) {
      background-color: #076907;
    }
  }

  span {
    width: 100%;
    height: 30px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);

    img {
      width: 18px;
      height: 18px;
    }
  }
`;
