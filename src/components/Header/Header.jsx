import { Link } from 'react-router-dom';
import '../Header/header.css'
import CarrinhoBtn from '../CarrinhoBtn/CarrinhoBtn';
import { body } from 'framer-motion/client';

function Header() {
  return (
    <div className="header">
      <h2 className="logo">Logo</h2>
      <nav className='navigation'>
        <a href="#">Home</a>
        <a href="#">Produtos</a>
        <a href="#">Carrinho</a>
        <button className='btnLogin'>Login</button>
      </nav>
    </div>
  );
}

export default Header;
