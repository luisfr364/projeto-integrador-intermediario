import React, { useState, useEffect, useCallback } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import styles from './HomeProductsList.module.css';

const HomeProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState({
    title: '',
    category: '',
    priceSort: '',
  });

  const limit = 20;

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const queryParams = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        title: filters.title,
        category: filters.category || undefined,
        priceSort: filters.priceSort || undefined,
      }).toString();

      const response = await fetch(
        `https://render.com/docs/web-services#port-binding/api/v1/products?${queryParams}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(data.data);
      // Assuming backend returns total count or something, but for now, assume 1 page
      setTotalPages(1); // TODO: adjust based on backend response
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [page, filters]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setPage(1); // Reset to first page on filter change
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        <input
          type="text"
          placeholder="Search by title"
          value={filters.title}
          onChange={(e) => handleFilterChange('title', e.target.value)}
          className={styles.searchInput}
        />
        <select
          value={filters.category}
          onChange={(e) => handleFilterChange('category', e.target.value)}
          className={styles.categorySelect}
        >
          <option value="">All Categories</option>
          <option value="femininos">Femininos</option>
          <option value="masculinos">Masculinos</option>
        </select>
        <select
          value={filters.priceSort}
          onChange={(e) => handleFilterChange('priceSort', e.target.value)}
          className={styles.sortSelect}
        >
          <option value="">No Sort</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>
      <div className={styles.productsGrid}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            data={{
              id: product.id,
              title: product.title,
              thumbnail: product.image_url,
              price: product.unit_price,
              description: product.description,
            }}
            onClick={() => {
              /* TODO: handle product click */
            }}
            handleCarrinhoClick={() => {
              /* TODO: handle add to cart */
            }}
          />
        ))}
      </div>
      <div className={styles.pagination}>
        <button
          className={styles.pageBtn}
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          Previous
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          className={styles.pageBtn}
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HomeProductsList;
