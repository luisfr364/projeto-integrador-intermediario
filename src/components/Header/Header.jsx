import { Link } from 'react-router-dom';
import styles from './header.module.css';
import CarrinhoBtn from '../CarrinhoBtn/CarrinhoBtn';

function header() {
  return (
    <nav class={styles.navbar}>
        <Link to="/">
        </Link>
        <ul class={styles.list}>
          <li className={styles.item}><h1>Usuário</h1></li>
          <li className={styles.item}>
            <Link to="products">Produtos</Link>
          </li>
          <li className={styles.item}><h1>Carrinho</h1></li>
        </ul>
    </nav>
  );
}

export default header;
