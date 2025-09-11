import { Link } from 'react-router-dom';
import styles from './header.module.css';
import CarrinhoBtn from '../CarrinhoBtn/CarrinhoBtn';
import Container from '../Layout/Container'
import logo from '../../../public/images/logo.png'

function header() {
  return (
    <nav class={styles.navbar}>
      <Container>
        <Link to="/">
          <img src="public/images/logo.png" alt="" />
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
