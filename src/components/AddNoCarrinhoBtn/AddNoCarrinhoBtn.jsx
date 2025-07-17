import { useState } from 'react';
import styles from './AddNoCarrinhoBtn.module.css';
import AddCarrinhoSVG from '../../assets/add_shopping_cart.svg?react';
import CheckmarkSVG from '../../assets/checkmark.svg?react';
import { useCarrinho } from '../../context/CarrinhoContext';

function AddNoCarrinhoBtn({
  produtoId,
  showBtn,
  produtoNome,
  linkImg,
  produtoPreco,
}) {
  const [clicked, setClicked] = useState(false);
  const { produtos, addUmProdutoNoLS, aumentaQuantidadeProduto } =
    useCarrinho();

  function clickedBtn() {
    if (clicked) return;

    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 300);
  }

  function addProduto(produtoId) {
    if (clicked) return;

    if (produtos == null) {
      addUmProdutoNoLS(produtoId, produtoNome, linkImg, produtoPreco);
      clickedBtn();
      return;
    }

    if (produtos.find((produto) => produto.produtoId == produtoId)) {
      clickedBtn();
      aumentaQuantidadeProduto(produtoId, () => {});
    } else {
      clickedBtn();
      addUmProdutoNoLS(produtoId, produtoNome, linkImg, produtoPreco);
    }
  }

  return (
    <>
      {showBtn && (
        <button className={styles.btn} onClick={() => addProduto(produtoId)}>
          {clicked ? (
            <CheckmarkSVG
              className={`${styles.btnImg} ${styles.btnCheckmarkImg}`}
            />
          ) : (
            <AddCarrinhoSVG className={styles.btnImg} />
          )}
        </button>
      )}
    </>
  );
}

export default AddNoCarrinhoBtn;
