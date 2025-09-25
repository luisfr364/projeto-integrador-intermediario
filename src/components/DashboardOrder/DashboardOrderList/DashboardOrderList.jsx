import { useEffect, useState } from 'react';
import OrderListCard from './OrderListCard/OrderListCard.jsx';
import styles from './DashboardOrderList.module.css';
import { apiUrl } from '../../../util/urls.js';

function DashboardOrderList() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('todos'); // todos, pendente, entregue, cancelado

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(`${apiUrl}/orders`, {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Erro ao carregar pedidos');
        }

        const data = await response.json();
        setOrders(data.data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  // Filter orders based on selected filter
  const filteredOrders = orders.filter((order) => {
    if (filter === 'todos') return true;
    return order.status === filter;
  });

  if (loading) {
    return <div className={styles.loading}>Carregando pedidos...</div>;
  }

  if (error) {
    return <div className={styles.error}>Erro: {error}</div>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Meus Pedidos</h2>

      <div className={styles.filters}>
        <button
          className={`${styles.filterButton} ${
            filter === 'todos' ? styles.active : ''
          }`}
          onClick={() => setFilter('todos')}
        >
          Todos
        </button>
        <button
          className={`${styles.filterButton} ${
            filter === 'pendente' ? styles.active : ''
          }`}
          onClick={() => setFilter('pendente')}
        >
          Pendentes
        </button>
        <button
          className={`${styles.filterButton} ${
            filter === 'entregue' ? styles.active : ''
          }`}
          onClick={() => setFilter('entregue')}
        >
          Entregues
        </button>
        <button
          className={`${styles.filterButton} ${
            filter === 'cancelado' ? styles.active : ''
          }`}
          onClick={() => setFilter('cancelado')}
        >
          Cancelados
        </button>
      </div>

      <div className={styles.wrapper}>
        {filteredOrders.length === 0 ? (
          <p>Nenhum pedido encontrado.</p>
        ) : (
          filteredOrders.map((order) => (
            <OrderListCard key={order.id} order={order} />
          ))
        )}
      </div>
    </div>
  );
}

export default DashboardOrderList;
