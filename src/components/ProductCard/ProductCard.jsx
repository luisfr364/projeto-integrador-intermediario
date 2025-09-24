import { useState } from 'react';
import styles from './ProductCard.module.css';
import propTypes from 'prop-types';
import AddNoCarrinhoBtn from '../AddNoCarrinhoBtn/AddNoCarrinhoBtn';
function ProductCard({ data, onClick, handleCarrinhoClick }) {
  const { title, thumbnail, price, description, id } = data;
  const [showBtn, setShowBtn] = useState(false); //Estado para controlar a visibilidade do botão

  return (
    <section
      className={styles.productCard}
      onClick={onClick}
      onMouseEnter={() => setShowBtn(true)} //Exibe o botão ao passar o mouse
      onMouseLeave={() => setShowBtn(false)} //Esconde o botão ao retirar o mouse
    >
      <img src={thumbnail} className={styles.cardImage} />
      <AddNoCarrinhoBtn
        showBtn={showBtn}
        produtoNome={title}
        produtoId={id}
        produtoPreco={price}
        linkImg={thumbnail}
        handleCarrinhoClick={handleCarrinhoClick}
      />

      <div className={styles.cardInfos}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <h2 className={styles.cardPrice}>{price}</h2>
        <h3 className={styles.cardDescription}>{description}</h3>
      </div>
    </section>
  );
}

ProductCard.propTypes = {
  data: propTypes.shape({
    title: propTypes.string,
    thumbnail: propTypes.string,
    price: propTypes.oneOfType([propTypes.string, propTypes.number]),
  }).isRequired,
  onClick: propTypes.func, // <-- adicionar validação
};

export default ProductCard;
