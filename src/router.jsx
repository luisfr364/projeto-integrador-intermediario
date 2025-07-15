import { createBrowserRouter } from 'react-router-dom';
import CheckoutCarrinho from './pages/CheckoutCarrinho/CheckoutCarrinho';
import App from './App';

let router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/CheckoutCarrinho',
    element: <CheckoutCarrinho />,
  },
]);

export default router;
