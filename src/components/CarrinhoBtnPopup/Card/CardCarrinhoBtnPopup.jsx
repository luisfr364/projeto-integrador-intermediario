import styles from './CardCarrinhoBtnPopup.module.css';

function CardCarrinhoBtnPopup({ produto, linkImg, imgAlt, quantidade, preco }) {
  return (
    <li className={styles.card}>
      <img src={linkImg} alt={imgAlt} />
      <div className={styles.nomeQuantidadeContainer}>
        <h4>{produto}</h4>
        <p>Quantidade: {quantidade}</p>
      </div>

      <div className={styles.precoContainer}>
        <p>Preço unit.</p>
        <p>R$ {preco.toFixed(2)}</p>
      </div>
      <div className={styles.totalContainer}>
        <p>Total </p>
        <p>R$ {(quantidade * preco).toFixed(2)}</p>
      </div>
      <button className={styles.btn}>r</button>
      {/* TODO: Implementar funcionalidade de remover produto */}

      {/*TODO: Implementar funcionalidade de adicionar mais produtos*/}
    </li>
  );
}

export default CardCarrinhoBtnPopup;
