import { useEffect, useState } from 'react';
import OrderListCard from './OrderListCard/OrderListCard.jsx';
import styles from './DashboardOrderList.module.css';
import { apiUrl } from '../../../util/urls.js';

function DashboardOrderList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      const response = await fetch(`${apiUrl}/orders`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if (response.ok) {
        const ordersData = Array.isArray(data.data) ? data.data : [];
        setOrders(ordersData);
      }
    }

    fetchOrders();
  }, []);

  const safeOrders = Array.isArray(orders) ? orders : [];

  return (
    <div className={styles.wrapper}>
      {safeOrders.map((order) => (
        <OrderListCard key={order.id} order={order} />
      ))}
    </div>
  );
}

export default DashboardOrderList;
