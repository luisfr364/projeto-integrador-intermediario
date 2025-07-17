import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h3>aromaUP</h3>
          <p>Transformando o mundo um cheiro de código de cada vez.</p>
          <p>📍 Rua dos Desenvolvedores, 1024</p>
          <p>📧 contato@aromaup.com</p>
          <p>📞 (85) 5555-1010</p>
        </div>

        <div className={styles.copyright}>
          <p>
            © {new Date().getFullYear()} aromaUP — "O cheiro do futuro está em
            nossas mãos (e em nossos servidores)."
          </p>
        </div>
      </div>
    </footer>
  );
}
