import React from 'react';
import classnames from 'classnames';
import './button.scss';

const Button = ({ type = 'button', className, children, ...props }) => (
  <button
    {...props}
    type={type}
    className={classnames('button', className)}
  >
    {children}
  </button>
);

export default Button;
