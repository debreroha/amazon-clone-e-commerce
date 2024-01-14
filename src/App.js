import './App.css';
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={[<Header key="header" />, <Home key="home" />]} />
          <Route path='/' element={<Checkout />} />
          {/* <Route path='/' element=<Route path="/" element={[<Header key="header" />, <Home key="home" />]} />
          <Route path='/' element={<Home />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
