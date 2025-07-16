import styles from './CardCheckoutCarrinho.module.css';
import AddBtnSVG from '/src/assets/add_btn.svg?react';
import RemoveBtnSVG from '/src/assets/remove_btn.svg?react';
import RemoveAdicionaBtn from '../reusable/removeAdicionaBtn/RemoveAdicionaBtn';
import currencyToFloat from '../../util/currencyToFloat';

function CardCheckoutCarrinho({
  produtoObj,
  removeProduto,
  aumentaQuantidadeProduto,
  diminuiQuantidadeProduto,
}) {
  return (
    <li key={produtoObj.produtoId} className={styles.listaItem}>
      <img
        className={styles.cardImg}
        src={produtoObj.linkImg}
        alt={produtoObj.imgAlt}
      />
      <h3 className={styles.cardNome}>{produtoObj.produtoNome}</h3>
      <p>Quantidade: {produtoObj.quantidade}</p>
      <RemoveAdicionaBtn
        produtoId={produtoObj.produtoId}
        remove={removeProduto}
        aumenta={aumentaQuantidadeProduto}
        diminui={diminuiQuantidadeProduto}
        quantidade={produtoObj.quantidade}
        containerStyles={styles.btnsContainer}
      />
      <div className={styles.precoETotalContainer}>
        <div>
          <p>Preço Unit:</p>
          <p>R$ {currencyToFloat(produtoObj.preco).toFixed(2)}</p>
        </div>

        <div>
          <p>Total: </p>
          <p>
            R${' '}
            {(
              produtoObj.quantidade * currencyToFloat(produtoObj.preco)
            ).toFixed(2)}
          </p>
        </div>
      </div>
    </li>
  );
}

export default CardCheckoutCarrinho;
