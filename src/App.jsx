import './App.css';
//#####################################
import AddNoCarrinhoBtn from './components/AddNoCarrinhoBtn/AddNoCarrinhoBtn';
import CarrinhoBtn from './components/CarrinhoBtn/CarrinhoBtn';
import { CarrinhoProvider } from './context/CarrinhoContext';
import CheckoutCarrinho from './pages/CheckoutCarrinho/CheckoutCarrinho';

function App() {
  return (
    <CarrinhoProvider>
      <div>
        <AddNoCarrinhoBtn produtoId={100} />
        <AddNoCarrinhoBtn produtoId={101} />
        <CarrinhoBtn />
        <a href="./CheckoutCarrinho">ssss</a>
      </div>
    </CarrinhoProvider>
  );
}

export default App;
