import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import CarrinhoBtn from '../CarrinhoBtn/CarrinhoBtn';

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className="logo">
        <img
          src="/images/logo.png"
          className={styles.headerLogo}
          alt="Logo da loja"
        />
      </Link>
      <CarrinhoBtn />
    </header>
  );
}

export default Header;
