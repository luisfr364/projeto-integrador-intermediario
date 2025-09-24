import { createBrowserRouter } from 'react-router-dom';
import CheckoutCarrinho from './pages/CheckoutCarrinho/CheckoutCarrinho';
import App from './App';
import ProdutosPage from './pages/Produtos/ProdutosPage';
import Home from './pages/Home.jsx';
import Login from './pages/Login/login.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';

let router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
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
