import { Container } from './styles';
import { Doge } from '../Doge';
import { Shop } from '../Shop';

export function Main() {
  return (
    <Container>
      <Doge />
      <Shop />
    </Container>
  );
}