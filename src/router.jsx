import { createBrowserRouter } from 'react-router-dom';
import CheckoutCarrinho from './pages/CheckoutCarrinho/CheckoutCarrinho';
import App from './App';
import ProdutosPage from './pages/Produtos/ProdutosPage';

let router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/produtos',
    element: <ProdutosPage />,
  },
  {
    path: '/checkout',
    element: <CheckoutCarrinho />,
  },
]);

export default router;
