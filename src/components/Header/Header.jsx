import { Link } from 'react-router-dom';
import styles from './header.module.css';
import CarrinhoBtn from '../CarrinhoBtn/CarrinhoBtn';
import Container from '../Layout/Container'

function header() {
  return (
    <nav class={styles.navbar}>
      <Container>
        <Link to="/">
        </Link>
        <ul class={styles.list}>
          <li className={styles.item}><h1>Usuário</h1></li>
          <li className={styles.item}>
            <Link to="products">Produtos</Link>
          </li>
          <li className={styles.item}><h1>Carrinho</h1></li>
        </ul>
      </Container>
    </nav>
  );
}

export default header;
