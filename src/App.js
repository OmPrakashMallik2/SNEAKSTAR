import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Video from './components/Video';
import Product1 from './components/Product1';
import Product2 from './components/Product2';
import Reviews from './components/Reviews';
import BulkOrder from './components/BulkOrder';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      < Nav />
      < Home/>
      < Video />
      < Product1 />
      < Product2 />
      < Reviews/>
      < BulkOrder/>
      < Footer />
    </div>
  );
}

export default App;
