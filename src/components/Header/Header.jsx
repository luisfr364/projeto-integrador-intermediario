import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import CarrinhoBtn from '../CarrinhoBtn/CarrinhoBtn';
import Container from '../Layout/Container'
import logo from '../../../public/images/logo.png'

function Header() {
  return (
    <nav class={styles.navbar}>
      <Container>
        <Link to="/">
          <img src="public/images/logo.png" alt="" />
        </Link>
        <ul class={styles.list}>
          <li><h1>Usuário</h1></li>
          <li><h1>Carrinho</h1></li>
          
        </ul>
      </Container>
    </nav>
  );
}

export default Header;
