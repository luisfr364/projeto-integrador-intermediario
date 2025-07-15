import useProdutosLocalStorage from '../../hooks/useProdutosLocalStorage';
import RemoveAdicionaBtn from '../../components/reusable/removeAdicionaBtn/RemoveAdicionaBtn';
import styles from './CheckoutCarrinho.module.css';
import CardCheckoutCarrinho from '../../components/CardCheckoutCarrinho/CardCheckoutCarrinho';

function CheckoutCarrinho() {
  const {
    produtos,
    removeProduto,
    aumentaQuantidadeProduto,
    diminuiQuantidadeProduto,
  } = useProdutosLocalStorage();

  return (
    <div className={styles.checkoutContainer}>
      <div className={styles.tituloListaContainer}>
        <h1 className={styles.tituloPagina}>Checkout do Carrinho</h1>

        <ul className={styles.lista}>
          {produtos != null &&
            produtos.map((produto) => (
              <CardCheckoutCarrinho
                key={produto.produtoId}
                produtoObj={produto}
                removeProduto={removeProduto}
                aumentaQuantidadeProduto={aumentaQuantidadeProduto}
                diminuiQuantidadeProduto={diminuiQuantidadeProduto}
              />
            ))}
        </ul>
      </div>
      <div className={styles.resumoPedidoContainer}>
        <h4>Total: </h4>
        <span>
          {produtos
            .reduce(
              (accumulator, current) =>
                accumulator + current.preco * current.quantidade,
              0
            )
            .toFixed(2)}
        </span>
        <button></button>
        <button className={styles.btnFinalizarCompra}>Finalizar Compra</button>
        <button className={styles.btnLimparCarrinho}>Limpar Carrinho</button>
      </div>
    </div>
  );
}

export default CheckoutCarrinho;
