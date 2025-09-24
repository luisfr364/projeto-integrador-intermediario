import { useState, useEffect } from 'react';
import './Products.css';
import ProductCard from '../ProductCard/ProductCard';
import ProductModal from '../ProductModal/ProductModal';

function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [carrinhoOpen, setCarrinhoOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  function handleCarrinhoClick() {
    setCarrinhoOpen(true);

    setTimeout(() => {
      setCarrinhoOpen(false);
      setSelectedProduct(null);
    }, 300);
  }

  useEffect(() => {
    fetch('/products.json')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Erro ao carregar produtos:', err);
        setLoading(false);
      });
  }, []);

  // Atualiza lista ao trocar filtro
  useEffect(() => {
    if (selectedCategory === 'todos') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((p) => p.category === selectedCategory)
      );
    }
  }, [selectedCategory, products]);

  return (
    <main className="products-page">
      <section className="products-hero">
        <h1>Nossa Coleção Completa</h1>
        <p>Explore todos os perfumes e encontre a fragrância perfeita para você</p>

        {/* Filtro */}
        <div className="filter">
          <label>Filtrar por: </label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="todos">Todos</option>
            <option value="masculinos">Masculinos</option>
            <option value="femininos">Femininos</option>
          </select>
        </div>
      </section>

      <section className="products container">
        {loading ? (
          <div className="loading">
            <div className="loading-spinner"></div>
            <p>Carregando produtos...</p>
          </div>
        ) : filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              data={product}
              onClick={() => setSelectedProduct(product)}
              handleCarrinhoClick={handleCarrinhoClick}
            />
          ))
        ) : (
          <p className="no-results">Nenhum produto encontrado nessa categoria.</p>
        )}
      </section>

      {selectedProduct && !carrinhoOpen ? (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      ) : null}
    </main>
  );
}

export default Products;
