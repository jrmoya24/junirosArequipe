import React from 'react'
import { BrowserRouter as Router} from "react-router-dom";

import { Header } from "./components/Header";
import { Carrito } from "./components/Carrito";
import {DataProvider} from './context/DataProvider';
import Pages from "./Routes/routes";
import "boxicons";
import { Login2 } from 'components/login2/Login2';

function App() {

  return (
    <DataProvider>
    <div className="App">
      <Router>
      <Header />
      <Carrito />
      <Login2 />
      <Pages />
      </Router>
    </div>
    </DataProvider>
  );
}

export default App;
