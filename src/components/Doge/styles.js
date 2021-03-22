import styled from 'styled-components';
import dogeImg from '../../assets/doge.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  margin-bottom: 3rem;

  div {
    width: 300px;
    height: 218px;
    cursor: pointer;
    user-select: none;
    background-image: url(${dogeImg});
  }

  p {
    margin-top: 2rem;
  }
`