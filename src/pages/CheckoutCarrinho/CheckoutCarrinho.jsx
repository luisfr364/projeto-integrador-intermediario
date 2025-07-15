import { useState } from 'react';
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

  const [cep, setCep] = useState('');
  const [precoFrete, setPrecoFrete] = useState(0);

  return (
    <div className={styles.checkoutContainer}>
      <div className={styles.tituloListaContainer}>
        <h1 className={styles.tituloPagina}>Checkout do Carrinho</h1>
        {produtos.length === 0 ? (
          <div className={styles.emptyCart}>
            <h2>Seu carrinho está vazio</h2>
          </div>
        ) : (
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
        )}
      </div>
      <div className={styles.resumoPedidoContainer}>
        <h2 className={styles.tituloResumo}>Resumo do Pedido</h2>
        <div className={styles.resumoPedidoTotalContainer}>
          <h4>Total: </h4>
          <span>
            R${' '}
            {produtos
              .reduce(
                (accumulator, current) =>
                  accumulator + current.preco * current.quantidade,
                0
              )
              .toFixed(2)}
          </span>
        </div>

        <div className={styles.resumoPedidoTotalContainer}>
          <h4>Frete: </h4>
          <span>R$ {precoFrete > 0 ? precoFrete.toFixed(2) : '0.00'}</span>
        </div>
        <div className={styles.calculaFreteContainer}>
          <div className={styles.inputEnderecoContainer}>
            <label htmlFor="cep">Calcule o frete</label>
            <input
              id="cep"
              type="text"
              placeholder="Digite seu endereço"
              className={styles.inputEndereco}
            />
          </div>
          <button onClick={() => setPrecoFrete(Math.random() * 100)}>a</button>
        </div>
        <div>
          <button></button>
          <button></button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutCarrinho;
