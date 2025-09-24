import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
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
              <Link to="pedidos" className={getLinkClassName('pedidos')}>
                Pedidos
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="vendas" className={getLinkClassName('vendas')}>
                Vendas
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                to="configuracoes"
                className={getLinkClassName('configuracoes')}
              >
                Configurações da Conta
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
