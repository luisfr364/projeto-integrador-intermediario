import { useState, useEffect } from 'react';
import './Products.css';
import ProductCard from '../ProductCard/ProductCard';
import ProductModal from '../ProductModal/ProductModal';

function Products() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [carrinhoOpen, setCarrinhoOpen] = useState(false);

  function handleCarrinhoClick() {
    setCarrinhoOpen(true);

    setTimeout(() => {
      setCarrinhoOpen(false);
      setSelectedProduct(null);
    }, 300); // Fecha o carrinho após 300ms
    // Fecha o modal ao clicar no carrinho
  }

  useEffect(() => {
    fetch('/products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section className="products container">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          data={product}
          onClick={() => setSelectedProduct(product)}
          handleCarrinhoClick={handleCarrinhoClick}
        />
      ))}
      {selectedProduct && !carrinhoOpen ? (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      ) : null}
    </section>
  );
}

export default Products;
