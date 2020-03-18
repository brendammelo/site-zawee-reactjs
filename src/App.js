import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/header/HeaderComponent';
import QuemSomos from './components/quemSomos/QuemSomos';
import SolutionsComponent from './components/solucoes/SolutionsComponent';
import Diferencial from './components/diferencial/DiferencialZawee';

const App = () => (
  <div className="App">
    <HeaderComponent />
    <QuemSomos />
    <SolutionsComponent />
    < Diferencial />
    
  </div>
);

export default App;