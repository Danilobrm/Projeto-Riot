import styled from 'styled-components';

export const Container = styled.div`
  width: 290px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .riot-logo {
    height: fit-content;
    width: fit-content;
    margin-top: 75px;
    margin-bottom: 60px;

    img {
      width: 115px;
      height: 35px;
    }
  }

  h1 {
    margin-bottom: 20px;
    font-weight: 550;
    font-size: 1.4rem;
    letter-spacing: 0.1px;
  }
`;
