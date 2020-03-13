import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/header/HeaderComponent';
import QuemSomos from './components/quemSomos/QuemSomos';


const App = () => (
  <div className="App">
    <HeaderComponent />
    <QuemSomos />
    
  </div>
);

export default App;