import { useEffect, useState } from 'react';
import OrderListCard from './OrderListCard/OrderListCard';

function DashboardOrderList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      const response = await fetch(
        'https://backend-projeto-integrador-2-perfumaria.onrender.com/orders',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        setOrders(data.data);
      }
    }

    return fetchOrders();
  }, []);

  return (
    orders &&
    orders.map((order) => <OrderListCard key={order.id} order={order} />)
  );
}

export default DashboardOrderList;
