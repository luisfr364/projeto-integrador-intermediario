import './App.css';
import Products from './components/Products/Products';
import { CarrinhoProvider } from './context/CarrinhoContext';
import CarrinhoBtn from './components/CarrinhoBtn/CarrinhoBtn';
import { CarrinhoProvider } from './context/CarrinhoContext';
import CheckoutCarrinho from './pages/CheckoutCarrinho/CheckoutCarrinho';
import Products from './components/Products/Products';
import Home from './pages/Home.jsx';

function App() {
  return (
    <div>
      {/* O CÓDIGO ANTIGO DO CARRINHO E PRODUTOS ESTÁ COMENTADO AQUI.
        Ele é ignorado pelo navegador, mas continua guardado no seu arquivo.
        <CarrinhoProvider>
          <div>
            <AddNoCarrinhoBtn produtoId={100} />
            <AddNoCarrinhoBtn produtoId={101} />
            <CarrinhoBtn />
            <Products />
            <a href="./CheckoutCarrinho">ssss</a>
          </div>
        </CarrinhoProvider>
      */}
      {/* Apenas o componente <Home /> está ativo e será exibido na tela. */}
      <Home />
    </div>
  );
}

export default App;
