import useProdutosLocalStorage from '../../hooks/useProdutosLocalStorage';

function CheckoutCarrinho() {
  const {
    produtos,
    removeProduto,
    aumentaQuantidadeProduto,
    diminuiQuantidadeProduto,
  } = useProdutosLocalStorage();

  return (
    <div>
      {produtos != null &&
        produtos.map((produto) => (
          <div key={produto.produtoId}>
            <h3>{produto.produtoNome}</h3>
            <img src={produto.linkImg} alt={produto.imgAlt} />
            <p>Quantidade: {produto.quantidade}</p>
            <p>Preço: {produto.preco}</p>
            <RemoveAdicionaBtn
              produtoId={produto.produtoId}
              remove={removeProduto}
              aumenta={aumentaQuantidadeProduto}
              diminui={diminuiQuantidadeProduto}
              quantidade={produto.quantidade}
            />
          </div>
        ))}
      {produtos.length === 0 && <p>Seu carrinho está vazio.</p>}
    </div>
  );
}

export default CheckoutCarrinho;
