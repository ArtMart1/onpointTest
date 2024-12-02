import React from 'react';

import './Title.css';

const Title = ({ children, mod }) => (
  <h2 className={`title ${mod}`}>{children}</h2>
);

export default Title;
