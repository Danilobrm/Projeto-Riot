import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  div:nth-child(1) {
    width: 50px;
    height: 50px;
    margin: 35px 23px;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.01);
    border-radius: 16px;
    box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(0.9px);
    -webkit-backdrop-filter: blur(0.9px);
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      border: 0;
      background: transparent;
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg {
        transition: 0.3s ease-in-out;
        color: #c6b0b7;
        &.active {
          color: #fff;
        }
      }
      &:hover {
        svg {
          color: #fff;
        }
      }
    }
  }
  .user-menu.active {
    width: 245px;
    height: 165px;
    background: #211f1f;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 35px -15px;

    nav {
      gap: 10px;
      display: flex;
      flex-direction: column;
      color: #b8b8b8;
      width: 80%;
      height: 80%;
      justify-content: center;
      a {
        font-weight: 500;
        font-size: 0.9rem;
        cursor: pointer;
        padding: 5px 20px;
        &:nth-child(2) {
          color: #525252;
        }
        &:hover:not(:nth-child(2)) {
          color: #fff;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 5px;
        }
      }
    }
  }
  .user-menu {
    display: none;
  }
`;
