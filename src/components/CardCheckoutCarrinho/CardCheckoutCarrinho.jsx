import styles from './CardCheckoutCarrinho.module.css';
import AddBtnSVG from '/src/assets/add_btn.svg?react';
import RemoveBtnSVG from '/src/assets/remove_btn.svg?react';
import RemoveAdicionaBtn from '../reusable/removeAdicionaBtn/RemoveAdicionaBtn';

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
      <p>Preço Unit: R$ {produtoObj.preco.toFixed(2)}</p>
      <RemoveAdicionaBtn
        produtoId={produtoObj.produtoId}
        remove={removeProduto}
        aumenta={aumentaQuantidadeProduto}
        diminui={diminuiQuantidadeProduto}
        quantidade={produtoObj.quantidade}
        containerStyles={styles.btnsContainer}
      />
      <div className={styles.precoContainer}>
        <p>Total: </p>
        <p>R$ {(produtoObj.quantidade * produtoObj.preco).toFixed(2)}</p>
      </div>
    </li>
  );
}

export default CardCheckoutCarrinho;
