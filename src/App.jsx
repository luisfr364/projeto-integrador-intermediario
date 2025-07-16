import './App.css';
import Products from './components/Products/Products';
import { CarrinhoProvider } from './context/CarrinhoContext';
import CarrinhoBtn from './components/CarrinhoBtn/CarrinhoBtn';

function App() {
  return (
    <CarrinhoProvider>
      <div>
        <CarrinhoBtn />
        <Products />
      </div>
    </CarrinhoProvider>
  );
}

export default App;
