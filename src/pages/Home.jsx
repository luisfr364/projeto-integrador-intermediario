import React, { useState, useEffect, useCallback } from 'react';
import styles from './Home.module.css';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import { Link } from 'react-router-dom';
import { useCarrinho } from '../context/CarrinhoContext.jsx';

function Home() {
  const { addUmProdutoNoLS } = useCarrinho();
  const [produtos, setProdutos] = useState([]);
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    // Fetch products
    fetch('/products.json')
      .then((response) => response.json())
      .then((data) => setProdutos(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  // Sample promo products
  const promoProdutos = produtos.slice(0, 3).map((p) => ({
    ...p,
    oldPrice: `R$ ${(
      parseFloat(p.price.replace('R$ ', '').replace(',', '.')) * 1.2
    )
      .toFixed(2)
      .replace('.', ',')}`,
    discount: '-17%',
  }));

  // Best sellers
  const bestSellers = produtos.slice(3, 8);

  // All products for grid
  const gridProdutos = produtos.slice(0, 6);

  // Carousel functions
  const nextSlide = useCallback(() => {
    setCarouselIndex((prevIndex) => (prevIndex + 1) % promoProdutos.length);
  }, [promoProdutos.length]);

  const prevSlide = useCallback(() => {
    setCarouselIndex(
      (prevIndex) =>
        (prevIndex - 1 + promoProdutos.length) % promoProdutos.length
    );
  }, [promoProdutos.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className={styles.homeContainer}>
      <Header />
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.topSection}>
            <div className={styles.promoCarousel}>
              <h2 className={styles.sectionTitle}>Promoções do Dia</h2>
              <div className={styles.carousel}>
                <div
                  className={styles.carouselInner}
                  style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
                >
                  {promoProdutos.map((produto) => (
                    <div key={produto.id} className={styles.carouselItem}>
                      <img src={produto.thumbnail} alt={produto.title} />
                      <h3>{produto.title}</h3>
                      <div className={styles.price}>
                        <span className={styles.oldPrice}>
                          {produto.oldPrice}
                        </span>
                        {produto.price}
                        <span className={styles.discount}>
                          {produto.discount}
                        </span>
                      </div>
                      <button
                        className={styles.addToCart}
                        onClick={() =>
                          addUmProdutoNoLS(
                            produto.id,
                            produto.title,
                            produto.thumbnail,
                            produto.price
                          )
                        }
                      >
                        Adicionar ao Carrinho
                      </button>
                    </div>
                  ))}
                </div>
                <button
                  className={`${styles.carouselControl} ${styles.carouselControlPrev}`}
                  onClick={prevSlide}
                >
                  &lt;
                </button>
                <button
                  className={`${styles.carouselControl} ${styles.carouselControlNext}`}
                  onClick={nextSlide}
                >
                  &gt;
                </button>
              </div>
            </div>

            <div className={styles.bestSellers}>
              <h2 className={styles.sectionTitle}>Mais Vendidos</h2>
              <div className={styles.bestSellersList}>
                {bestSellers.map((produto) => (
                  <div key={produto.id} className={styles.bestSellerItem}>
                    <img src={produto.thumbnail} alt={produto.title} />
                    <div className={styles.bestSellerInfo}>
                      <h4>{produto.title}</h4>
                      <div className={styles.price}>{produto.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.promoBanner}>
            <h3>Frete Grátis</h3>
            <p>Para todo o Brasil</p>
            <p>Em compras acima de R$ 300,00</p>
            <img
              src="/images/masculinos/perfume1.png"
              alt="Imagem Promocional"
            />
          </div>

          <div className={styles.productsSection}>
            <h2 className={styles.sectionTitle}>Nossos Produtos</h2>
            <div className={styles.productsGrid}>
              {gridProdutos.map((produto) => (
                <div key={produto.id} className={styles.productCard}>
                  <img src={produto.thumbnail} alt={produto.title} />
                  <h4>{produto.title}</h4>
                  <div className={styles.price}>{produto.price}</div>
                  <button
                    className={styles.addToCart}
                    onClick={() =>
                      addUmProdutoNoLS(
                        produto.id,
                        produto.title,
                        produto.thumbnail,
                        produto.price
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
