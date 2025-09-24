import { CarrinhoProvider } from './context/CarrinhoContext.jsx';
import Home from './pages/Home.jsx';

function App() {
  return (
    <CarrinhoProvider>
      <Home />
    </CarrinhoProvider>
  );
}

export default App;
