import styles from './RemoveAdicionaBtn.module.css';
import RemoveBtnSVG from '../../../assets/remove_btn.svg?react';
import AddBtnSVG from '../../../assets/add_btn.svg?react';

function RemoveAdicionaBtn({ produtoId, aumenta, diminui, quantidade }) {
  return (
    <div className={styles.btnsContainer}>
      <button
        className={styles.btn}
        onClick={() => diminui(produtoId, () => {})}
      >
        <RemoveBtnSVG className={styles.btnImg} />
      </button>
      <span>{quantidade}</span>
      <button
        className={styles.btn}
        onClick={() => aumenta(produtoId, () => {})}
      >
        <AddBtnSVG className={styles.btnImg} />
      </button>
    </div>
  );
}

export default RemoveAdicionaBtn;
