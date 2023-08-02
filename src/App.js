import './App.css';
import { Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import Home from './components/Home';
import Video from './components/Video';
import Product1 from './components/Product1';
import Product2 from './components/Product2';
import Reviews from './components/Reviews';
import BulkOrder from './components/BulkOrder';
import Footer from './components/Footer';
import product1Details from './components/product1Details';
import Main from './components/Main';
import BuyNow from './components/BuyNow';
import ProductOne from './Product1/ProductOne';


function App() {
  return (
    <div className="App">
      < Nav />
      {/* < Home/> */}
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/pr1" element={<product1Details/>}/>
        <Route path="/buynow" element={<BuyNow/>}/>
        <Route path="/product1" element={<ProductOne/>}/>
      </Routes>
      {/* < Video />
      < Product1 />
      < Product2 />
      < Reviews/>
      < BulkOrder/> */}
      < Footer />
    </div>
  );
}

export default App;
