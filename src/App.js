import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/header/HeaderComponent';
import QuemSomos from './components/quemSomos/QuemSomos';
import SolutionsComponent from './components/solucoes/SolutionsComponent';

const App = () => (
  <div className="App">
    <HeaderComponent />
    <QuemSomos />
    <SolutionsComponent />
    
  </div>
);

export default App;