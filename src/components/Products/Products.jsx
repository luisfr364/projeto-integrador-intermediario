import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './Products.module.css';
import ProductCard from '../ProductCard/ProductCard';
import ProductModal from '../ProductModal/ProductModal';
import { apiUrl } from '../../util/urls';

function Products() {
  const [searchParams] = useSearchParams();
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
      const searchCategory = searchParams.get('category');
      const response = await fetch(
        `${apiUrl}/products${
          searchCategory ? `?category=${searchCategory}` : ''
        }`,
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
  }, [searchParams]);

  return (
    <section className={styles.products + ' container'}>
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
