import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer.jsx';
import Header from '../components/Header/Header.jsx';
import HomeProductsList from '../components/HomeProductsList/HomeProductsList.jsx';

function Home() {
  return (
    <div>
      <Header />
      <HomeProductsList />
      <Footer />
    </div>
  );
}
export default Home;
