import home from "../Home/home.jsx";
import styles from "../Home/home.css";

export default function home() {
  return (
    <div className={styles.home}>
      {/* Hero com carrossel */}
      <section className={styles.hero}>
        <home />
      </section>

      {/* Produtos em destaque */}
      <section className={styles.products}>
        <h2>Produtos em Destaque</h2>
        <div className={styles.productGrid}>
          <div className={styles.card}>
            <img src="/images/masculinos/perfume1.png" alt="Perfume 1" />
            <h3>Perfume Clássico</h3>
            <p>R$ 199,90</p>
            <button>Comprar</button>
          </div>
          <div className={styles.card}>
            <img src="/images/masculinos/perfume2.png" alt="Perfume 2" />
            <h3>Perfume Moderno</h3>
            <p>R$ 249,90</p>
            <button>Comprar</button>
          </div>
          <div className={styles.card}>
            <img src="/images/masculinos/perfume3.png" alt="Perfume 3" />
            <h3>Perfume Exclusivo</h3>
            <p>R$ 299,90</p>
            <button>Comprar</button>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className={styles.features}>
        <h2>Por que escolher a AromaUP?</h2>
        <div className={styles.featureGrid}>
          <div className={styles.feature}>
            <span>🚚</span>
            <p>Entrega rápida</p>
          </div>
          <div className={styles.feature}>
            <span>🌸</span>
            <p>Fragrâncias exclusivas</p>
          </div>
          <div className={styles.feature}>
            <span>💳</span>
            <p>Pagamento seguro</p>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className={styles.testimonials}>
        <h2>O que nossos clientes dizem</h2>
        <div className={styles.testimonialGrid}>
          <div className={styles.testimonial}>
            <p>"Simplesmente maravilhoso! Recomendo a todos."</p>
            <span>- João</span>
          </div>
          <div className={styles.testimonial}>
            <p>"O melhor perfume que já usei, fixação incrível."</p>
            <span>- Maria</span>
          </div>
        </div>
      </section>
    </div>
  );
}
