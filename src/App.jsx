import './index.css';
//#####################################
import AddNoCarrinhoBtn from './components/AddNoCarrinhoBtn/AddNoCarrinhoBtn';
import CarrinhoBtn from './components/CarrinhoBtn/CarrinhoBtn';
import { CarrinhoProvider } from './context/CarrinhoContext';
import CheckoutCarrinho from './pages/CheckoutCarrinho/CheckoutCarrinho';
import Products from './components/Products/Products'
function App() {
  return (
    <CarrinhoProvider>
      <div>
        <AddNoCarrinhoBtn produtoId={100} />
        <AddNoCarrinhoBtn produtoId={101} />
        <CarrinhoBtn />
        <Products />
        <a href="./CheckoutCarrinho">ssss</a>
      </div>
    </CarrinhoProvider>
  );
}

export default App;
