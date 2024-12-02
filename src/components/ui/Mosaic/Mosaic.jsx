import React from 'react';

import './Mosaic.css';

const Mosaic = ({ children, isStreched }) => (
  <div className={`mosaic ${isStreched ? 'mosaic_type_streched' : ''}`}>
    <p className="mosaic__text">
      {children}
    </p>
  </div>
);

export default Mosaic;
