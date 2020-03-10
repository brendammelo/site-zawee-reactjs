import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/header/HeaderComponent';
import Motivo from './components/motivo/PorqueZawee';
import Solucao from './components/solucoes/SolutionsComponent';
import Impulsionar from './components/impulsionar/ImpulsionarComponent';
import Form from './components/form/Form';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      < Header />
      < Motivo />
      < Solucao />
      < Form />
      < Footer />

    </div>
  );
}

export default App;
