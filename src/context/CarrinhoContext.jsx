import { createContext, useContext, useState, useEffect } from 'react';

const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {
  const [produtos, setProdutos] = useState(
    JSON.parse(localStorage.getItem('carrinho')) || []
  );

  function addUmProdutoNoLS(produtoId, produtoNome, linkImg, produtoPreco) {
    if (produtos != null) {
      setProdutos([
        ...produtos,
        {
          produtoId: produtoId,
          produtoNome: produtoNome,
          linkImg: linkImg,
          imgAlt: '#',
          quantidade: 1,
          preco: produtoPreco,
        },
      ]);
    } else {
      setProdutos([
        {
          produtoId: produtoId,
          produtoNome: produtoNome,
          linkImg: linkImg,
          imgAlt: '#',
          quantidade: 1,
          preco: produtoPreco,
        },
      ]);
    }
  }

  //   // localStorage.setItem(
  //   //   'carrinho',
  //   //   JSON.stringify(
  //   //     productsArr != null
  //   //       ? [
  //   //           ...productsArr,
  //   //           {
  //   //             produtoId: produtoId,
  //   //             produtoNome: 'Produto',
  //   //             linkImg: '#',
  //   //             imgAlt: '#',
  //   //             quantidade: 1,
  //   //             preco: 0,
  //   //           },
  //   //         ] //TODO: adicionar informacoes dos produtos
  //   //       : [
  //   //           {
  //   //             produtoId: produtoId,
  //   //             produtoNome: 'Produto',
  //   //             quantidade: 1,
  //   //             linkImg: '#',
  //   //             imgAlt: '#',
  //   //             preco: 0,
  //   //           },
  //   //         ]
  //   //   )
  //   // );
  // }

  const aumentaQuantidadeProduto = (produtoId, callbackFn) => {
    const updatedProdutos = produtos.map((produto) => {
      if (produto.produtoId == produtoId) {
        return {
          ...produto,
          quantidade: produto.quantidade + 1,
        };
      }
      return produto;
    });
    setProdutos(updatedProdutos);
    callbackFn();
  };

  function removeProduto(produtoId, callbackFn) {
    const updatedProducts = produtos.filter(
      (produto) => produto.produtoId !== produtoId
    );
    setProdutos(updatedProducts);
    callbackFn();
  }

  function diminuiQuantidadeProduto(produtoId, callbackFn) {
    //Filtra os produtos para diminuir a quantidade ou remover se for 1
    //Se a quantidade for 1, remove o produto do carrinho
    const updatedProducts = produtos
      .filter((produto) => {
        if (produto.produtoId === produtoId && produto.quantidade > 1) {
          return produto;
        }
        if (produto.produtoId === produtoId && produto.quantidade === 1) {
          return false; // Remove o produto se a quantidade for 1
        }
        return produto; // Retorna o produto inalterado se não for o produtoId
      }) //Altera a quantidade do produto
      .map((produto) => {
        if (produto.produtoId === produtoId && produto.quantidade > 1) {
          return { ...produto, quantidade: produto.quantidade - 1 };
        }
        // Retorna o produto inalterado se não for o produtoId
        return produto;
      });

    setProdutos(updatedProducts);
    callbackFn();
  }

  function removeProduto(produtoId) {
    const updatedProducts = produtos.filter(
      (produto) => produto.produtoId !== produtoId
    );
    setProdutos(updatedProducts);
  }

  //Atualiza o carrinho no localStorage sempre que produtos mudar
  useEffect(() => {
    localStorage.setItem('carrinho', JSON.stringify(produtos));
  }, [produtos]);

  return (
    <CarrinhoContext.Provider
      value={{
        produtos,
        setProdutos,
        addUmProdutoNoLS,
        aumentaQuantidadeProduto,
        removeProduto,
        diminuiQuantidadeProduto,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinho() {
  return useContext(CarrinhoContext);
}
