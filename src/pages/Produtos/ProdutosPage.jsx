import CarrinhoBtn from '../../components/CarrinhoBtn/CarrinhoBtn';
import Header from '../../components/Header/Header';
import Products from '../../components/Products/Products';
import { CarrinhoProvider } from '../../context/CarrinhoContext';

function ProdutosPage() {
  return (
    <>
      <CarrinhoProvider>
        <Header />

        <Products />
      </CarrinhoProvider>
    </>
  );
}

export default ProdutosPage;
