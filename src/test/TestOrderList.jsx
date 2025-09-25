// Test component to verify DashboardOrderList functionality
// You can temporarily import this in your App.jsx to test the component

import React from 'react';
import DashboardOrderList from '../components/DashboardOrder/DashboardOrderList/DashboardOrderList.jsx';

const TestOrderList = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Teste - Lista de Pedidos</h1>
      <DashboardOrderList />
    </div>
  );
};

export default TestOrderList;
