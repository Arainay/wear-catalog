import React, { forwardRef, useState } from 'react';
import classnames from 'classnames';
import './input.scss';

const Input = ({ type = 'text', className, label, name, value, inputRef, ...props }) => {
  const defaultValue = value ?? '';
  const [inputValue, setInputValue] = useState(defaultValue);

  const handleChange = event => {
    setInputValue(event.target.value);
  };

  return (
    <div className={classnames('input-container', className)}>
      <input
        {...props}
        type={type}
        id={name}
        className="input"
        name={name}
        value={value}
        ref={inputRef}
        onChange={handleChange}
      />
      {label && (
        <label
          htmlFor={name}
          className={classnames(
            'input-label',
            { 'input-label--shrink': inputValue.length > 0 }
          )}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default forwardRef((props, ref) => <Input {...props} inputRef={ref}/>);
