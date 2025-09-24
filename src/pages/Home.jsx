import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard/ProductCard';
import './Home.css';

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Função para lidar com clique no carrinho
  const handleCarrinhoClick = (produto) => {
    console.log('Adicionado ao carrinho:', produto);
    // aqui você pode adicionar lógica para salvar no carrinho
  };

  useEffect(() => {
    fetch('/products.json')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Erro ao carregar produtos:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Carregando produtos...</p>;
  }

  return (
    <div className="products-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          data={product} // 🔑 ajuste: agora passa como `data`
          handleCarrinhoClick={handleCarrinhoClick}
        />
      ))}
    </div>
  );
}

export default Home;
