import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Bloco de informações */}
        <div className={styles.info}>
          <h3>AromaUP</h3>
          <p>Perfumes exclusivos para todas as ocasiões.</p>
          <p>📍 Rua dos Desenvolvedores, 1024</p>
          <p>📧 contato@aromaup.com</p>
          <p>📞 (85) 5555-1010</p>
        </div>

        {/* Redes sociais */}
        <div className={styles.social}>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://wa.me/5585999999999" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.copyright}>
        <p>© {new Date().getFullYear()} AromaUP — O cheiro do futuro está em nossas mãos.</p>
      </div>
    </footer>
  );
}
