import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import CarrinhoBtn from '../CarrinhoBtn/CarrinhoBtn';
import LoginBtn from '../LoginBtn/LoginBtn';

function Header({ showCarrinho = true }) {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <Link to="/" className="logo">
            <img
              src="/images/logo.png"
              className={styles.logoImg}
              alt="Logo da loja"
            />
          </Link>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/produtos">Produtos</Link>
              </li>
              <li>
                <Link to="/produtos">Masculino</Link>
              </li>
              <li>
                <Link to="/produtos">Feminino</Link>
              </li>
            </ul>
          </nav>
          <div className={styles.searchCart}>
            <LoginBtn />
            {showCarrinho && <CarrinhoBtn />}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
