import { useContext } from 'react';
import { DogesCountContext } from '../../context/DogeCountContext';

import { Container } from './styles';


export function Doge() {
  const { doges, click, } = useContext(DogesCountContext)
  return (
    <Container>
      <div  
        onClick={click}
      />
      <p>{doges} doges clicked!</p>
    </Container>
  );
}