import React from 'react';
import classnames from 'classnames';

const Form = ({ children, className, onSubmit, ...props }) => (
  <form
    {...props}
    className={classnames('form', className)}
    onSubmit={onSubmit}
  >
    {children}
  </form>
);

export default Form;
