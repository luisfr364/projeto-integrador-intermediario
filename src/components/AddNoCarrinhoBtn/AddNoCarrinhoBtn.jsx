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

  //TODO: Remover se não for mais necessária
  // function increaseProductQuantity(produtoId) {
  //   const productsArr = JSON.parse(localStorage.getItem('carrinho'));
  //   productsArr.forEach((produto, index) => {
  //     if (produto.produtoId == produtoId) {
  //       productsArr[index].quantidade++;
  //     }
  //   });
  //   localStorage.setItem('carrinho', JSON.stringify(productsArr));
  //   setClicked(!clicked);
  //   setTimeout(() => {
  //     setClicked(false);
  //   }, 1000);
  // }

  //TODO Remover função addUmProdutoNoLS se não for mais necessária
  // function addUmProdutoNoLS(produtoId) {
  //   const productsArr = JSON.parse(localStorage.getItem('carrinho'));

  //   localStorage.setItem(
  //     'carrinho',
  //     JSON.stringify(
  //       productsArr != null
  //         ? [
  //             ...productsArr,
  //             {
  //               produtoId: produtoId,
  //               produtoNome: 'Produto',
  //               linkImg: '#',
  //               imgAlt: '#',
  //               quantidade: 1,
  //               preco: 0,
  //             },
  //           ] //TODO: adicionar informacoes dos produtos
  //         : [
  //             {
  //               produtoId: produtoId,
  //               produtoNome: 'Produto',
  //               quantidade: 1,
  //               linkImg: '#',
  //               imgAlt: '#',
  //               preco: 0,
  //             },
  //           ]
  //     )
  //   );
  // }

  function addProduto(produtoId) {
    if (clicked) return;

    if (produtos == null) {
      addUmProdutoNoLS(produtoId, produtoNome, linkImg, produtoPreco);
      return;
    }

    if (produtos.find((produto) => produto.produtoId == produtoId)) {
      aumentaQuantidadeProduto(produtoId, () => {
        setClicked(!clicked);
        setTimeout(() => {
          setClicked(false);
        }, 400);
      });
    } else {
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
