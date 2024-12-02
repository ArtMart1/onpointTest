import React from 'react';

import './Button.css';

const Button = ({
  children,
  handler,
  isAbsolute,
  icon,
}) => (
  <button className={`button ${isAbsolute ? 'button_type_absolute' : ''}`} onClick={handler}>
    <div className="button__arrow-box">
      <img className="button__arrow" src={icon} alt="Right arrow" />
    </div>
    <span className="button__text">
      {children}
    </span>
  </button>
);

export default Button;
