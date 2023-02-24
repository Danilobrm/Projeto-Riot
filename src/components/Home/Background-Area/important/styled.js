import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  div:nth-child(1) {
    width: 35px;
    height: 35px;
    background: #d950e5;
    display: flex;
    transform: rotate(45deg);
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    margin: 35px 23px;
    button {
      background: transparent;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 35px;
      height: 35px;
      cursor: default;
      svg {
        transform: rotate(-45deg);
      }
      &:hover {
        background: #913599;
      }
    }
  }
  .message-box {
    display: none;
    height: fit-content;
    padding: 0 28px;
    margin-left: -40px;
    span:nth-child(1) {
      height: 15px;
      width: 15px;
      background: white;
      transform: rotate(45deg);
      z-index: 0;
      margin-top: 44px;
    }
    .message {
      width: 360px;
      height: 245px;
      background: #fff;
      z-index: 1;
      margin-left: -8px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      article {
        width: 70%;
        height: 80%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h4 {
          font-size: 0.9rem;
          font-weight: 500;
        }
        p {
          font-size: 0.7rem;
          color: #999999;
          display: flex;
          gap: 5px;
          align-items: center;
          width: 100%;
          text-align: left;
          margin-top: 5px;
          &:nth-child(3) {
            color: black;
            font-weight: 500;
          }
        }
        a {
          width: 100%;
          h6 {
            width: fit-content;
            text-align: left;
            margin-top: 50px;
            color: #999999;
            cursor: pointer;
            &:hover {
              color: black;
            }
          }
        }
      }
    }
  }
`;
