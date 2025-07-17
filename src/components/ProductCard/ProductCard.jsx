import React from "react";
import'./ProductCard.css';
import propTypes from 'prop-types';
import AddNoCarrinhoBtn from '../AddNoCarrinhoBtn/AddNoCarrinhoBtn'
function ProductCard({ data, onClick }){
    
    const {title, thumbnail, price, description} = data

    return(
        <section className="product-card" onClick={onClick}>
            <img src={thumbnail} 
            className="card__image"/>

            <div className="card__infos">
                <h2 className="card__title">{title}</h2>
                <h2 className="card__price">{price}</h2>
                <h3 className="card__description">{description}</h3>
            </div>

            <AddNoCarrinhoBtn />

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