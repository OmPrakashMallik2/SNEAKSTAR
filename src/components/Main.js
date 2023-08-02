import React from 'react'

import { Routes, Route } from "react-router-dom";
import Nav from './Nav';
import Home from './Home';
import Video from './Video';
import Product1 from './Product1';
import Product2 from './Product2';
import Reviews from './Reviews';
import BulkOrder from './BulkOrder';
import Footer from './Footer';
import product1Details from './product1Details';

function Main() {
  return (
    <div className="App">
      {/* < Nav /> */}
      < Home/>
      < Video />
      < Product1 />
      < Product2 />
      < Reviews/>
      < BulkOrder/>
      {/* < Footer /> */}
    </div>
  );
}

export default Main

