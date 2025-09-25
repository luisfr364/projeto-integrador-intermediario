import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import { useCarrinho } from '../context/CarrinhoContext.jsx';
import { apiUrl } from '../util/urls.js';

function Home() {
  const { addUmProdutoNoLS } = useCarrinho();
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Buscar produtos da API
  useEffect(() => {
    fetch(`${apiUrl}/products`)
      .then((response) => response.json())
      .then((data) => {
        setProdutos(data.data || []);
        setLoading(false);
      })
      .catch((error) => {
        console.log('Erro:', error);
        setLoading(false);
      });
  }, []);

  // Formatar preço
  const formatPrice = (price) => {
    return `R$ ${price.toFixed(2).replace('.', ',')}`;
  };

  if (loading) {
    return (
      <div className={styles.homeContainer}>
        <Header />
        <div className={styles.container}>
          <div className={styles.loading}>Carregando produtos...</div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className={styles.homeContainer}>
      <Header />
      <div className={styles.container}>
        <div className={styles.mainContent}>
          {/* Banner promocional */}
          <div className={styles.promoBanner}>
            <h3>Frete Grátis</h3>
            <p>Para todo o Brasil</p>
            <p>Em compras acima de R$ 300,00</p>
          </div>

          {/* Lista de produtos */}
          <div className={styles.productsSection}>
            <h2 className={styles.sectionTitle}>Nossos Produtos</h2>
            <div className={styles.productsGrid}>
              {produtos.map((produto) => (
                <div key={produto.id} className={styles.productCard}>
                  <img src={produto.image_url} alt={produto.title} />
                  <h4>{produto.title}</h4>
                  <div className={styles.price}>
                    {formatPrice(produto.unit_price)}
                  </div>
                  <button
                    className={styles.addToCart}
                    onClick={() =>
                      addUmProdutoNoLS(
                        produto.id,
                        produto.title,
                        produto.image_url,
                        formatPrice(produto.unit_price)
                      )
                    }
                  >
                    Comprar
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
