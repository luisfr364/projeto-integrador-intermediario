import { useState } from 'react';
import useProdutosLocalStorage from '../../hooks/useProdutosLocalStorage';
import styles from './CheckoutCarrinho.module.css';
import CardCheckoutCarrinho from '../../components/CardCheckoutCarrinho/CardCheckoutCarrinho';
import currencyToFloat from '../../util/currencyToFloat';
import Header from '../../components/Header/Header.jsx';
import PaymentForm from './PaymentForm';

function CheckoutCarrinho() {
  const {
    produtos,
    removeProduto,
    aumentaQuantidadeProduto,
    diminuiQuantidadeProduto,
  } = useProdutosLocalStorage();

  const [cep, setCep] = useState('');
  const [precoFrete, setPrecoFrete] = useState(0);
  const [showPayment, setShowPayment] = useState(false);

  const handlePaymentSubmit = (paymentInfo) => {
    //
    console.log('Finalizing order with payment info:', paymentInfo);
    alert('Compra finalizada com sucesso!');
  };

  const subtotal = produtos.reduce(
    (accumulator, current) =>
      accumulator + currencyToFloat(current.preco) * current.quantidade,
    0
  );

  const total = subtotal + precoFrete;

  return (
    <>
      <Header showCarrinho={false} />
      <div className={styles.checkoutContainer}>
        <div className={styles.tituloListaContainer}>
          <h1 className={styles.tituloPagina}>Checkout do Carrinho</h1>
          {produtos.length === 0 ? (
            <div className={styles.emptyCart}>
              <h2>Seu carrinho está vazio</h2>
            </div>
          ) : (
            <ul className={styles.lista}>
              {produtos.map((produto) => (
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
            <h4>Subtotal: </h4>
            <span>R$ {subtotal.toFixed(2)}</span>
          </div>

          <div className={styles.resumoPedidoTotalContainer}>
            <h4>Frete: </h4>
            <span>R$ {precoFrete > 0 ? precoFrete.toFixed(2) : '0.00'}</span>
          </div>

          <div className={styles.resumoPedidoTotalContainer}>
            <h4>Total: </h4>
            <span>R$ {total.toFixed(2)}</span>
          </div>

          <div className={styles.calculaFreteContainer}>
            <div className={styles.inputEnderecoContainer}>
              <label htmlFor="cep">Calcule o frete</label>
              <input
                id="cep"
                type="text"
                placeholder="Digite seu CEP"
                className={styles.inputEndereco}
                value={cep}
                onChange={(e) => setCep(e.target.value)}
              />
            </div>
            <button onClick={() => setPrecoFrete(Math.random() * 100)}>
              Calcular
            </button>
          </div>
          {!showPayment ? (
            <div className={styles.checkoutBtnContainer}>
              <button
                className={`${styles.checkoutBtn} ${styles.primary}`}
                onClick={() => setShowPayment(true)}
                disabled={produtos.length === 0}
              >
                Ir para o Pagamento
              </button>
            </div>
          ) : (
            <PaymentForm onPaymentSubmit={handlePaymentSubmit} />
          )}
        </div>
      </div>
    </>
  );
}

export default CheckoutCarrinho;
