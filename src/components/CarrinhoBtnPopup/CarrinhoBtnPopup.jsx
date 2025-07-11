import { useState } from 'react';

function CarrinhoBtnPopup() {
  const [produtosCarrinho, setProdutosCarrinho] = useState(
    localStorage.getItem('carrinho')
  );
  return (
    <div>
      <ul>produtosCarrinho.map()</ul>
    </div>
  );
}

export default CarrinhoBtnPopup;
