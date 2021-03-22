import { Header } from './components/Header';
import { Main } from './components/Main';
import { DogesCountProvider } from './context/DogeCountContext';
import { GlobalStyle } from './styles/globals';

export function App() {
  return (
    <DogesCountProvider>
      <Header />
      <Main />
      <GlobalStyle />
    </DogesCountProvider>
  );
}