import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header/header.jsx';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const handleGoToProducts = () => {
    navigate('/produtos'); // navega para a página de produtos
  };

  return (
    <div className="home-container">
      <Header />

      <main className="main-content">
        {/* Seção Hero */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>Descubra sua Fragrância Perfeita</h1>
            <p>Explore nossa coleção exclusiva de perfumes premium das melhores marcas do mundo</p>
            <button className="btn-primary" onClick={handleGoToProducts}>
              Ver Produtos
            </button>
          </div>
        </section>

        {/* Seção de Estatísticas */}
        <section className="stats-section">
          <div className="stats-grid">
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Fragrâncias</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Marcas</span>
            </div>
            <div className="stat">
              <span className="stat-number">10k+</span>
              <span className="stat-label">Clientes Satisfeitos</span>
            </div>
          </div>
        </section>

        {/* Seção de Promoções / Destaques */}
        <section className="promo-section">
          <h2>Promoções Exclusivas</h2>
          <p>Aproveite descontos incríveis em nossas fragrâncias selecionadas.</p>
          <div className="promo-cards">
            <div className="promo-card">
              <h3>Perfume Masculino</h3>
              <p>Descubra aromas sofisticados e marcantes.</p>
            </div>
            <div className="promo-card">
              <h3>Perfume Feminino</h3>
              <p>Notas florais e frutadas para todos os momentos.</p>
            </div>
            <div className="promo-card">
              <h3>Lançamentos</h3>
              <p>Novas fragrâncias chegando todas as semanas.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
