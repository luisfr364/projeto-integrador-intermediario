import { useState, useRef } from 'react';
import styles from './CarrinhoBtn.module.css';
import CartSVG from '/src/assets/shopping_cart.svg?react';
import CarrinhoBtnPopup from '../CarrinhoBtnPopup/CarrinhoBtnPopup';

function CarrinhoBtn() {
  const [carrinhoOpen, setCarrinhoOpen] = useState(false);

  function toggleCarrinho(isOpen) {
    setCarrinhoOpen(isOpen);
  }

  const carrinhoBtnRef = useRef(null); //ref para o botão do carrinho, evita re-renderização desnecessária

  return (
    <div className={styles.container} ref={carrinhoBtnRef}>
      <div className={styles.btn} onClick={() => toggleCarrinho(!carrinhoOpen)}>
        <CartSVG className={styles.btnImg} />
      </div>
      {carrinhoOpen && (
        <CarrinhoBtnPopup
          toggleCarrinho={toggleCarrinho}
          refBtn={carrinhoBtnRef}
        />
      )}
    </div>
  );
}

export default CarrinhoBtn;
