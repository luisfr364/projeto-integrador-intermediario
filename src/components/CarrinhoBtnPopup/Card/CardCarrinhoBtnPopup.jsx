import RemoveAdicionaBtn from '../../reusable/removeAdicionaBtn/RemoveAdicionaBtn';
import styles from './CardCarrinhoBtnPopup.module.css';
import currencyToFloat from '../../../util/currencyToFloat';

function CardCarrinhoBtnPopup({
  produtoObj,
  removeProdutoFn,
  diminuiQuantidadeProdutoFn,
  aumentaQuantidadeProdutoFn,
}) {
  return (
    <li className={styles.card}>
      <img
        className={styles.cardImg}
        src={produtoObj.linkImg}
        alt={produtoObj.imgAlt}
      />
      <p className={styles.cardNome}>{produtoObj.produtoNome}</p>

      <RemoveAdicionaBtn
        aumenta={aumentaQuantidadeProdutoFn}
        diminui={diminuiQuantidadeProdutoFn}
        remove={removeProdutoFn}
        produtoId={produtoObj.produtoId}
        quantidade={produtoObj.quantidade}
      />
      <div className={styles.precoETotalContainer}>
        <div className={styles.precoContainer}>
          <p>Preço unit.</p>
          <p>R$ {currencyToFloat(produtoObj.preco).toFixed(2)}</p>
        </div>
        <div className={styles.totalContainer}>
          <p>Total </p>
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

export default CardCarrinhoBtnPopup;
