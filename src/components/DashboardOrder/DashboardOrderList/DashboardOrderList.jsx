import { useEffect, useState } from 'react';
import OrderListCard from './OrderListCard/OrderListCard.jsx';
import styles from './DashboardOrderList.module.css';
import { apiUrl } from '../../../util/urls.js';

function DashboardOrderList() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        console.log(data);
        setOrders(data.data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Carregando pedidos...</div>;
  }

  if (error) {
    return <div className={styles.error}>Erro: {error}</div>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Meus Pedidos</h2>

      <div className={styles.wrapper}>
        {orders.length === 0 ? (
          <p>Nenhum pedido encontrado.</p>
        ) : (
          orders.map((order) => <OrderListCard key={order.id} order={order} />)
        )}
      </div>
    </div>
  );
}

export default DashboardOrderList;
