import React from 'react';
import styles from './OrderListCard.module.css';

function OrderListCard({ order }) {
  // Format date for better readability
  const orderDate = new Date(order.date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'entregue':
        return styles.entregue;
      case 'pendente':
        return styles.pendente;
      case 'cancelado':
        return styles.cancelado;
      default:
        return '';
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h3 className={styles.orderId}>Pedido #{order.id}</h3>
        <span className={`${styles.status} ${getStatusClass(order.status)}`}>
          {order.status}
        </span>
      </div>
      <div className={styles.cardBody}>
        <p>
          <strong>Data:</strong> {orderDate}
        </p>
        <p>
          <strong>Total:</strong>{' '}
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(order.total)}
        </p>
        {order.user && (
          <p>
            <strong>Comprador:</strong> {order.user.name}
          </p>
        )}
        {order.address && (
          <p className={styles.address}>
            <strong>Endereço de Entrega:</strong>
            {` ${order.address.street_name}, ${order.address.house_number} - ${order.address.city}, ${order.address.state}`}
          </p>
        )}
      </div>
      <div className={styles.cardFooter}>
        <button className={styles.detailsButton}>Ver Detalhes</button>
      </div>
    </div>
  );
}

export default OrderListCard;
