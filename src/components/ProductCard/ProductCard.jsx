import React from 'react';
import './ProductCard.css';
import propTypes from 'prop-types';

function ProductCard({ data }) {
  const { title, thumbnail, price, description } = data;

  return (
    <section className="product-card">
      <img src={thumbnail} className="card__image" />

      <div className="card__infos">
        <h2 className="card__title">{title}</h2>
        <h2 className="card__price">{price}</h2>
        <h3 className="card__description">{description}</h3>
      </div>

      <button type="button" className="button__add-cart">
        +
      </button>
    </section>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
