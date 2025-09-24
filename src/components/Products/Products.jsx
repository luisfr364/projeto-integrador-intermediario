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
    async function fetchProducts() {
      const response = await fetch(
        'https://backend-projeto-integrador-2-perfumaria.onrender.com/api/v1/products',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const data = await response.json();
      setProducts(data.data);
      console.log(data);
    }
    fetchProducts();
  }, []);

  return (
    <section className="products container">
      {products &&
        products.map((product) => (
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
