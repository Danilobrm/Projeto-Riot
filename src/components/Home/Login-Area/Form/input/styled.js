import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
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
  }
  .form-group {
    display: flex;
    align-items: center;

    input {
      width: 100%;
      height: 50px;
      border-radius: 4px;
      background-color: #e7e7e7;
      border: none;
      font-size: 0.9rem;
      padding-left: 10px;
      font-weight: 700;
      box-sizing: border-box;
      padding-top: 10px;

      &:focus {
        outline: 2px solid black;
        background-color: #fff;
      }
      &:invalid {
        background-color: red;
      }
    }
    span {
      transition: 0.1s ease-in-out;
      position: absolute;
      left: 15px;
      font-size: 0.7rem;
      font-weight: 700;
      color: #7c7c7c;
    }

    .active {
      transform: translateY(-15px);
      font-size: 0.6rem;
      left: 10px;
    }

    input:focus ~ span,
    textarea:focus ~ span {
      transform: translateY(-15px);
      font-size: 0.6rem;
      left: 10px;
    }
  }
  .form-group.active {
    span {
      transform: translateY(-15px);
      font-size: 0.6rem;
      left: 10px;
    }
  }
`;
