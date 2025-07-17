import { useState } from 'react';
import './ProductCard.css';
import propTypes from 'prop-types';
import AddNoCarrinhoBtn from '../AddNoCarrinhoBtn/AddNoCarrinhoBtn';
function ProductCard({ data, onClick }) {
  const { title, thumbnail, price, description, id } = data;
  const [showBtn, setShowBtn] = useState(false); //Estado para controlar a visibilidade do botão

  return (
    <section
      className="product-card"
      onClick={onClick}
      onMouseEnter={() => setShowBtn(true)} //Exibe o botão ao passar o mouse
      onMouseLeave={() => setShowBtn(false)} //Esconde o botão ao retirar o mouse
    >
      <img src={thumbnail} className="card__image" />
      <AddNoCarrinhoBtn
        showBtn={showBtn}
        produtoNome={title}
        produtoId={id}
        produtoPreco={price}
        linkImg={thumbnail}
      />

      <div className="card__infos">
        <h2 className="card__title">{title}</h2>
        <h2 className="card__price">{price}</h2>
        <h3 className="card__description">{description}</h3>
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
