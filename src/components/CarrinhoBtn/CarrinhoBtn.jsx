import { useState } from 'react';
import styles from './CarrinhoBtn.module.css';
import CartSVG from '/src/assets/shopping_cart.svg?react';
import CarrinhoBtnPopup from '../CarrinhoBtnPopup/CarrinhoBtnPopup';

function CarrinhoBtn() {
  const [carrinhoOpen, setCarrinhoOpen] = useState(false);
  return (
    <>
      <div
        className={styles.btn}
        onClick={() => setCarrinhoOpen(!carrinhoOpen)}
      >
        <CartSVG className={styles.btnImg} />
      </div>
      {carrinhoOpen && <CarrinhoBtnPopup />}
    </>
  );
}

export default CarrinhoBtn;
