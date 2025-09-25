import React, { useState, useEffect } from 'react';
import styles from './DashboardProductList.module.css';
import { apiUrl } from '../../util/urls';
import EditProductModal from './EditProductModal';
import CreateProductModal from './CreateProductModal';

function DashboardProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingProduct, setEditingProduct] = useState(null);
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);

  const fetchProducts = async () => {
    try {
      console.log(
        'Fetching products from:',
        `${apiUrl}/products/productsselling`
      );
      console.log('Using credentials: include');

      const response = await fetch(`${apiUrl}/products/productsselling`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Fetched products response status:', response.status);
      console.log(
        'Fetched products response headers:',
        Object.fromEntries(response.headers.entries())
      );

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Não autorizado. Faça login novamente.');
        } else if (response.status === 403) {
          throw new Error('Acesso negado.');
        } else {
          throw new Error(`Erro ao carregar produtos: ${response.status}`);
        }
      }

      const responseJSON = await response.json();
      console.log('Raw API response:', responseJSON);
      let productsData = [];

      if (Array.isArray(responseJSON?.data)) {
        productsData = responseJSON.data;
      } else if (
        responseJSON?.data?.nodes &&
        Array.isArray(responseJSON.data.nodes)
      ) {
        productsData = responseJSON.data.nodes;
      } else if (typeof responseJSON?.data === 'string') {
        try {
          const parsed = JSON.parse(responseJSON.data);
          if (Array.isArray(parsed)) {
            productsData = parsed;
          } else if (parsed && typeof parsed === 'object') {
            productsData = Object.values(parsed);
          }
        } catch (parseError) {
          console.warn('Failed to parse stringified data payload', parseError);
        }
      } else if (responseJSON?.data && typeof responseJSON.data === 'object') {
        productsData = Object.values(responseJSON.data);
      } else {
        console.warn(
          'Expected an array of products but received:',
          responseJSON?.data
        );
      }

      console.log('Final products data:', productsData);
      setProducts(productsData);
    } catch (err) {
      console.error('Error fetching products:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handleCloseModal = () => {
    setEditingProduct(null);
  };

  const handleProductCreated = () => {
    fetchProducts(); // Re-fetch products after a new one is created
  };

  const handleProductDelete = async (productId) => {
    try {
      const response = await fetch(`${apiUrl}/products/${productId}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error(`Erro ao deletar produto: ${response.status}`);
      }
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== productId)
      );
    } catch (err) {
      console.error('Error deleting product:', err);
      setError(err.message);
    }
  };

  const handleSave = (productId, updatedData) => {
    console.log('Saving product:', productId, updatedData);
    setProducts((prevProducts) => {
      if (!Array.isArray(prevProducts)) {
        console.warn(
          'Products state is not an array; skipping local update.',
          prevProducts
        );
        return prevProducts;
      }

      return prevProducts.map((p) =>
        p.id === productId ? { ...p, ...updatedData } : p
      );
    });
    handleCloseModal();
  };

  if (loading) {
    return <div className={styles.loading}>Loading products...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  const safeProducts = Array.isArray(products) ? products : [];

  return (
    <div className={styles.productListContainer}>
      <div className={styles.header}>
        <h2 className={styles.title}>Meus produtos</h2>
        <button
          onClick={() => setCreateModalOpen(true)}
          className={styles.createButton}
        >
          Cadastrar Novo Produto
        </button>
      </div>
      {safeProducts.length === 0 ? (
        <p>Não há produtos listados</p>
      ) : (
        <table className={styles.productTable}>
          <thead>
            <tr>
              <th></th>
              <th>Nome</th>
              <th>Preço</th>
              <th>Categoria</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {safeProducts.map((product) => (
              <tr key={product.id}>
                <td>
                  <img
                    src={product.image_url}
                    alt={product.title}
                    className={styles.productImage}
                  />
                </td>
                <td>{product.title}</td>
                <td>{product.unit_price}</td>
                <td>{product.category}</td>
                <td>
                  <button
                    className={styles.actionButton}
                    onClick={() => handleEdit(product)}
                  >
                    Editar
                  </button>
                  <button
                    className={`${styles.actionButton} ${styles.deleteButton}`}
                    onClick={async () => {
                      if (
                        window.confirm(
                          'Tem certeza que deseja deletar este produto?'
                        )
                      ) {
                        await handleProductDelete(product.id);
                      }
                    }}
                  >
                    Deletar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <EditProductModal
        product={editingProduct}
        onClose={handleCloseModal}
        onSave={handleSave}
      />
      {isCreateModalOpen && (
        <CreateProductModal
          onClose={() => setCreateModalOpen(false)}
          onProductCreated={handleProductCreated}
        />
      )}
    </div>
  );
}

export default DashboardProductList;
