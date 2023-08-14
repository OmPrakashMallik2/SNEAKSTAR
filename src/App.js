import './App.css';
import { Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import Footer from './components/Footer';
import Main from './components/Main';
import BuyNow from './components/BuyNow';
import Product2Details from './components/Product2Details';
import Product1Details from './components/Product1Details';

function App() {
  return (
    <div className="App">
      < Nav />
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/pr1" element={<Product1Details/>}/>
        <Route path="/pr2" element={<Product2Details/>}/>
        <Route path="/buynow" element={<BuyNow/>}/>
      </Routes>
      < Footer />
    </div>
  );
}

export default App;
