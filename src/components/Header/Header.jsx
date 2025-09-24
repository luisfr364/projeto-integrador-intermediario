import { Link } from 'react-router-dom';
import '../Header/header.css';
import CarrinhoBtn from '../CarrinhoBtn/CarrinhoBtn';
import { body } from 'framer-motion/client';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <h2>AromaUP</h2>
        </Link>
        <nav className="navigation">
          <Link to="/">Home</Link>
          <Link to="/produtos">Produtos</Link>
          <Link to="/login" className="btn-login">Login</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
