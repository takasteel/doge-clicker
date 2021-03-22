import { useContext } from 'react';
import { DogesCountContext } from '../../context/DogeCountContext';

import dogeImg from '../../assets/doge.png';

import { Container } from './styles';


export function Doge() {
  const { doges, click, } = useContext(DogesCountContext)
  return (
    <Container>
      <img 
        src={dogeImg} 
        alt="Doge"
        onClick={click}
      />
      <p>{doges} doges clicked!</p>
    </Container>
  );
}