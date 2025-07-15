import RemoveAdicionaBtn from '../removeAdicionaBtn/RemoveAdicionaBtn';
import styles from './CardCarrinhoBtnPopup.module.css';

function CardCarrinhoBtnPopup({
  produtoObj,
  removeProdutoFn,
  diminuiQuantidadeProdutoFn,
  aumentaQuantidadeProdutoFn,
}) {
  return (
    <li className={styles.card}>
      <img src={produtoObj.linkImg} alt={produtoObj.imgAlt} />

      <RemoveAdicionaBtn
        aumenta={aumentaQuantidadeProdutoFn}
        diminui={diminuiQuantidadeProdutoFn}
        remove={removeProdutoFn}
        produtoId={produtoObj.produtoId}
        quantidade={produtoObj.quantidade}
      />

      <div className={styles.precoContainer}>
        <p>Preço unit.</p>
        <p>R$ {produtoObj.preco.toFixed(2)}</p>
      </div>
      <div className={styles.totalContainer}>
        <p>Total </p>
        <p>R$ {(produtoObj.quantidade * produtoObj.preco).toFixed(2)}</p>
      </div>
    </li>
  );
}

export default CardCarrinhoBtnPopup;
