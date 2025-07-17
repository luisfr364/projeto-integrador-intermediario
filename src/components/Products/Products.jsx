import React, { useState, useEffect } from 'react';
import './Products.css';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';
import ProductModal from '../ProductModal/ProductModal';

function Products() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch('/products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section className='products container'>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          data={product}
          onClick={() => setSelectedProduct(product)}
        />
      ))}

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={(product) => console.log("Adicionar ao carrinho:", product)}
      />
    </section>
  );
}

export default Products;
