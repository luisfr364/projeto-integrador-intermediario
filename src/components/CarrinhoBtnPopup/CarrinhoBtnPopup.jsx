import CardCarrinhoBtnPopup from './Card/CardCarrinhoBtnPopup';
import styles from './CarrinhoBtnPopup.module.css';
import { useRef, useEffect } from 'react';
import { useCarrinho } from '../../context/CarrinhoContext';
import currencyToFloat from '../../util/currencyToFloat';
import { Link } from 'react-router-dom';

function CarrinhoBtnPopup({ toggleCarrinho, refBtn }) {
  // const [produtosCarrinho, setProdutosCarrinho] = useState(
  //   JSON.parse(localStorage.getItem('carrinho'))
  // );

  const {
    produtos,
    removeProduto,
    aumentaQuantidadeProduto,
    diminuiQuantidadeProduto,
  } = useCarrinho();

  // function aumentaQuantidadeProduto(produtoId) {
  //   const updatedProducts = produtosCarrinho.map((produto) => {
  //     if (produto.produtoId === produtoId) {
  //       return { ...produto, quantidade: produto.quantidade + 1 };
  //     }
  //     return produto;
  //   });
  //   setProdutosCarrinho(updatedProducts);
  // }

  // function diminuiQuantidadeProduto(produtoId) {
  //   //Filtra os produtos para diminuir a quantidade ou remover se for 1
  //   //Se a quantidade for 1, remove o produto do carrinho
  //   const updatedProducts = produtosCarrinho
  //     .filter((produto) => {
  //       if (produto.produtoId === produtoId && produto.quantidade > 1) {
  //         return produto;
  //       }
  //       if (produto.produtoId === produtoId && produto.quantidade === 1) {
  //         return false; // Remove o produto se a quantidade for 1
  //       }
  //       return produto; // Retorna o produto inalterado se não for o produtoId
  //     }) //Altera a quantidade do produto
  //     .map((produto) => {
  //       if (produto.produtoId === produtoId && produto.quantidade > 1) {
  //         return { ...produto, quantidade: produto.quantidade - 1 };
  //       }
  //       // Retorna o produto inalterado se não for o produtoId
  //       return produto;
  //     });
  //   setProdutosCarrinho(updatedProducts);
  // }

  const popupRef = useRef(null);

  //Atualiza o carrinho no localStorage sempre que produtosCarrinho mudar
  // useEffect(() => {
  //   localStorage.setItem('carrinho', JSON.stringify(produtosCarrinho));
  // }, [produtosCarrinho]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target) &&
        !refBtn.current.contains(event.target) //Checa se o clique fora do popup foi no botão do carrinho
      ) {
        toggleCarrinho(false); //Fecha o popup se o clique for fora do popup e do botão
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside); //Remove o listener quando o componente é desmontado
    };
  }, [popupRef, toggleCarrinho, refBtn]);

  return (
    <div className={styles.listaContainer} ref={popupRef}>
      <ul className={styles.lista}>
        {produtos != null &&
          produtos.map((produto) => (
            <CardCarrinhoBtnPopup
              key={produto.produtoId}
              produtoObj={produto}
              removeProdutoFn={removeProduto}
              diminuiQuantidadeProdutoFn={diminuiQuantidadeProduto}
              aumentaQuantidadeProdutoFn={aumentaQuantidadeProduto}
            />
          ))}
      </ul>
      <div className={styles.totalNCheckoutContainer}>
        <p className={styles.total}>
          Total: R${' '}
          {produtos
            .reduce((acc, produto) => {
              return acc + produto.quantidade * currencyToFloat(produto.preco);
            }, 0)
            .toFixed(2)}
        </p>
        <Link to={'/checkout'} className={styles.anchorToCheckout}>
          Finalizar
        </Link>
      </div>
    </div>
  );
}

export default CarrinhoBtnPopup;
