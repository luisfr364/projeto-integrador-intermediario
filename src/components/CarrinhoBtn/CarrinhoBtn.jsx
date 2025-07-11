import styles from './CarrinhoBtn.module.css';
import CartSVG from '/src/assets/shopping_cart.svg?react';

function CarrinhoBtn() {
  return (
    <div className={styles.btn}>
      <CartSVG className={styles.btnImg} />
    </div>
  );
}

export default CarrinhoBtn;
