import styled from 'styled-components';

export const Container = styled.div`
  form {
    display: flex;
    flex-direction: column;
    width: 290px;
    gap: 20px;
    position: relative;

    &:focus {
      font-size: 0.6rem;
      transition: 0.1s ease-in-out;
      align-items: flex-start;
      border: 3px solid green;
    }
    h3 {
      font-size: 0.7rem;
      text-align: center;
      color: #b2b2b2;
      cursor: pointer;
      margin-top: -22px;
      &:hover {
        color: black;
      }
      &:not(:last-child) {
        margin-top: 50px;
      }
    }
  }
`;
