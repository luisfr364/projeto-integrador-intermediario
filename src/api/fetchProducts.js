const fetchProducts = async (query) => {
  const response = await fetch('/data/products.json');
  const data = await response.json();

  // Se quiser filtrar pela query (ex: categoria 'masculinos' ou 'femininos')
  if (query) {
    return data.filter((product) => product.category === query);
  }

  return data;
};

export default fetchProducts;
