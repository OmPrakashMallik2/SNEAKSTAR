import React from 'react'

import Home from './Home';
import Video from './Video';
import Product1 from './Product1';
import Product2 from './Product2';
import Reviews from './Reviews';
import BulkOrder from './BulkOrder';
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

