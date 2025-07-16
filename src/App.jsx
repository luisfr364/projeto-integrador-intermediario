import { useState } from 'react';
import './App.css';
import Products from './components/Products/Products';

function App() {
  return (
    <CarrinhoProvider>
      <div>
        <CarrinhoBtn />
        <Products />
      </div>
    </CarrinhoProvider>
  );
}

export default App;
