import { createBrowserRouter } from 'react-router-dom';
import CheckoutCarrinho from './pages/CheckoutCarrinho/CheckoutCarrinho';
import App from './App';
import ProdutosPage from './pages/Produtos/ProdutosPage';
import Home from './pages/Home.jsx';
import Login from './pages/Login/Login.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import DashboardOrderList from './components/DashboardOrder/DashboardOrderList/DashboardOrderList.jsx';

let router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        path: 'orders',
        element: <DashboardOrderList />,
      },
    ],
  },
  {
    path: '/produtos',
    element: <ProdutosPage />,
  },
  {
    path: '/checkout',
    element: <CheckoutCarrinho />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export default router;
