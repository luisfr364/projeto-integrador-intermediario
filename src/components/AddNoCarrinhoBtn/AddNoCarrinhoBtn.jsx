import styles from './AddNoCarrinhoBtn.module.css';

function AddNoCarrinhoBtn() {
  function increaseProductQuantity(produtoId) {
    const productsArr = JSON.parse(localStorage.getItem('carrinho'));
    productsArr.forEach((produto, index) => {
      if (produto.produtoId == produtoId) {
        productsArr[index].quantidade++;
      }
    });
    localStorage.setItem('carrinho', JSON.stringify(productsArr));
  }

  function addUmProdutoNoLS(produtoId) {
    const productsArr = JSON.parse(localStorage.getItem('carrinho'));

    localStorage.setItem(
      'carrinho',
      JSON.stringify(
        productsArr != null
          ? [...productsArr, { produtoId: produtoId, quantidade: 1 }]
          : [{ produtoId: produtoId, quantidade: 1 }]
      )
    );
  }

  function addProduto(produtoId) {
    const productsArr = JSON.parse(localStorage.getItem('carrinho'));

    if (productsArr == null) {
      addUmProdutoNoLS(produtoId);
      return;
    }

    if (productsArr.find((produto) => produto.produtoId == produtoId)) {
      increaseProductQuantity(produtoId);
    } else {
      addUmProdutoNoLS(produtoId);
    }
  }

  return (
    <>
      <div className={styles.btnContainer} onClick={() => addProduto(100)}>
        <p className={styles.btnText}>Adicionar</p>
        <img src="#" alt="" />
      </div>
    </>
  );
}

export default AddNoCarrinhoBtn;
