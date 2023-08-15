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
        <Route path="/" element={<Main />} />
        <Route path="/pr1" element={<Product1Details />} />
        <Route path="/pr2" element={<Product2Details />} />
        <Route path="/buynow" element={<BuyNow />} />
      </Routes>
      < Footer />
      <a className='txttochat' href="https://wa.me/917352281493?text=Hey,%20i%20want%20to%20know%20more%20about%20the%20product%20">
        <img className='chat' alt="Chat on WhatsApp" src={require("./Media/wa.webp")} />
      </a>
    </div>
  );
}

export default App;
