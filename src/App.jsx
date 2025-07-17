import './App.css';

import Home from './pages/Home.jsx';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
