import { useState } from 'react';
import styles from './ProductCard.module.css';
import propTypes from 'prop-types';
import AddNoCarrinhoBtn from '../AddNoCarrinhoBtn/AddNoCarrinhoBtn';
function ProductCard({ data, onClick, handleCarrinhoClick }) {
  const [showBtn, setShowBtn] = useState(false); //Estado para controlar a visibilidade do botão

  // Format price to avoid scientific notation and display as currency
  const formatPrice = (price) => {
    // Handle very small numbers (essentially zero) or invalid prices
    if (!price || price < 0.01) {
      return 'R$ 0,00';
    }
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const price = data.unit_price;

  return (
    <section
      className={styles.productCard}
      onClick={onClick}
      onMouseEnter={() => setShowBtn(true)} //Exibe o botão ao passar o mouse
      onMouseLeave={() => setShowBtn(false)} //Esconde o botão ao retirar o mouse
    >
      <img src={data.image_url} className={styles.cardImage} />
      <AddNoCarrinhoBtn
        showBtn={showBtn}
        produtoNome={data.title}
        produtoId={data.id}
        produtoPreco={formatPrice(data.unit_price)}
        linkImg={data.image_url}
        handleCarrinhoClick={handleCarrinhoClick}
      />

      <div className={styles.cardInfos}>
        <h2 className={styles.cardTitle}>{data.title}</h2>
        <h2 className={styles.cardPrice}>{formatPrice(data.unit_price)}</h2>
        <h3 className={styles.cardDescription}>{data.description}</h3>
      </div>
    </section>
  );
}

export default ProductCard;
