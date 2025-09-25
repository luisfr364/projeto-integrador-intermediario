import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import {
  FiPackage,
  FiShoppingCart,
  FiDollarSign,
  FiSettings,
} from 'react-icons/fi';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const location = useLocation();

  const getLinkClassName = (path) => {
    return location.pathname.includes(path)
      ? `${styles.navLink} ${styles.active}`
      : styles.navLink;
  };

  return (
    <div className={styles.dashboard}>
      <aside className={styles.sidebar}>
        <h2>Dashboard</h2>
        <nav>
          <ul className={styles.nav}>
            <li className={styles.navItem}>
              <Link to="products" className={getLinkClassName('products')}>
                <FiPackage />
                <span>Meus Produtos</span>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="orders" className={getLinkClassName('orders')}>
                <FiShoppingCart />
                <span>Pedidos</span>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="vendas" className={getLinkClassName('vendas')}>
                <FiDollarSign />
                <span>Vendas</span>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                to="configuracoes"
                className={getLinkClassName('configuracoes')}
              >
                <FiSettings />
                <span>Configurações da Conta</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className={styles.content}>
        {/* Nested route components will be rendered here */}
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
