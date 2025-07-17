import { useState, useEffect } from 'react';
import './Products.css';
import ProductCard from '../ProductCard/ProductCard';
import ProductModal from '../ProductModal/ProductModal';

function Products() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch('/products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const data = await fetch('/products.json');
  //       const json = await data.json();
  //       setProducts(json);
  //     };

  //     fetchData();
  //   }, []);

  return (
    <section className="products container">
      {products.map((product) => (
        <ProductCard key={product.id} data={product} />
      ))}
    </section>
  );
}

export default Products;
