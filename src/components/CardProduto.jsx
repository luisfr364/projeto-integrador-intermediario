function CardProduto({
  produtoId,
  linkImg,
  imgAlt,
  produtoNome,
  produtoDesc,
  preco,
  tipo,
}) {
  return (
    <div>
      <img src={linkImg} alt={imgAlt} />
      <h3>{produtoNome}</h3>
      <p>{tipo}</p>
      <p>{produtoDesc}</p>
      <h4>{preco}</h4>
      {/* add-carrinho btn*/}
    </div>
  );
}

export default CardProduto;
