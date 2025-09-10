import React from 'react';
import './Home.css';
import Carrossel from '../components/Carrossel/carrossel.jsx';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer.jsx';
import Header from '../components/Header/Header.jsx'

function Home() {
  return (
    <div>
    <Header/>
    <Footer/>
    </div>
  );
}
export default Home;
