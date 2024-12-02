import React from 'react';

import './Feature.css';

const Feature = ({ number, content }) => (
  <li className="feature">
    <p className="feature__number">{`0${number}`}</p>
    <p className="feature__text">{content}</p>
  </li>
);

export default Feature;
