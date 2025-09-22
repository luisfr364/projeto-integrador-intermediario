import { Link } from 'react-router-dom';
import '../Header/header.css';
import CarrinhoBtn from '../CarrinhoBtn/CarrinhoBtn';
import { body } from 'framer-motion/client';

function Header() {
  return (
    <div className="header">
      <h2 className="logo">Logo</h2>
      <nav className="navigation">
        <Link to="/">Home</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/carrinho">Carrinho</Link>
        <Link to="/login" className="btnLogin">Login</Link>
      </nav>
    </div>
  );
}

export default Header;
