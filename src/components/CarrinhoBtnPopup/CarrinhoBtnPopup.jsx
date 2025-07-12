import { useState } from 'react';
import CardCarrinhoBtnPopup from './Card/CardCarrinhoBtnPopup';
import styles from './CarrinhoBtnPopup.module.css';

function CarrinhoBtnPopup() {
  const [produtosCarrinho, setProdutosCarrinho] = useState(
    JSON.parse(localStorage.getItem('carrinho'))
  );

  return (
    <div className={styles.listaContainer}>
      <ul className={styles.lista}>
        {produtosCarrinho != null &&
          produtosCarrinho.map((produto) => (
            <CardCarrinhoBtnPopup
              key={produto.produtoId}
              produto={produto.produtoNome}
              linkImg={produto.linkImg}
              imgAlt={produto.imgAlt}
              quantidade={produto.quantidade}
              preco={produto.preco}
            />
          ))}
      </ul>
    </div>
  );
}

export default CarrinhoBtnPopup;
