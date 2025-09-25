import React from 'react';
import styles from './OrderListCard.module.css';

function OrderListCard({ order }) {
  const orderDate = new Date(order.date).toLocaleDateString('pt-BR');

  const getStatusClass = (status) => {
    if (status === 'entregue') return styles.entregue;
    if (status === 'pendente') return styles.pendente;
    if (status === 'cancelado') return styles.cancelado;
    return styles.pendente;
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
          <strong>Total:</strong> R$ {order.total.toFixed(2)}
        </p>
        {order.user && (
          <p>
            <strong>Comprador:</strong> {order.user.name}
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
