import React from 'react';
import './Home.css';
import Carousel from '../components/Carousel/carousel.jsx';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer.jsx';

function Home() {
  return (
    <div className="home-container">
      <main className="home-content">
        <h1>Bem-vindo à Nossa Loja!</h1>
        <p>Confira nossos destaques da semana.</p>
      </main>
      {/* O Carrossel continua na parte de cima */}
      <Carousel />
      {/* Todo o resto do conteúdo agrupado */}
      <main className="home-content">
        {/* Apenas a seção de Chamada para Ação (CTA) permanece */}
        <section className="cta-section">
          <h2>Explore Todos os Nossos Produtos</h2>
          <Link to={'/produtos'} className="cta-button">
            Ver todos os produtos
          </Link>
          {/* O botão acima é um link para a página de produtos */}
        </section>
      </main>
      <Footer />
    </div>
  );
}
export default Home;
