import React, { useEffect } from "react";
import './App.css';
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './Login'


function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={ <Login key="login" />} />
          <Route path="/" element={[<Header key="header" />, <Home key="home" />]} />
          <Route path="/checkout" element={[<Header key="header" />, <Checkout key="Checkout" />]} />
          {/* <Route path='/checkout' element={<Checkout />} /> */}
          </Routes>
      </div>
    </Router>
  );
}

export default App;