import styled from 'styled-components';
import backgroundImage from '../../../assets/league-inicializador-background.jpg';

export const Container = styled.div`
  background-image: url(${backgroundImage});
  background-position: center;
  background-size: cover;
  background-position: -300px;
  background-repeat: no-repeat;
  width: calc(1535px - 420px);
  display: flex;
  justify-content: space-between;
`;
