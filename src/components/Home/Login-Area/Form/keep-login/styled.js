import styled from 'styled-components';

export const Container = styled.div`
  .container {
    display: block;
    position: relative;
    padding-left: 25px;
    cursor: pointer;
    font-size: 0.8rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* Hide the browser's default checkbox */
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked ~ .checkmark {
      background-color: #c73033;
    }
  }

  .checkmark {
    position: absolute;
    top: 2px;
    left: 0;
    height: 1rem;
    width: 1rem;
    border-radius: 4px;
    background-color: #e9e9e9;
  }
`;
