import React from 'react';
import classnames from 'classnames';
import Form, { Button, Input } from '@app/components/Form';

const Registration = ({ className }) => {
  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <article className={classnames('registration', className)}>
      <header className="registration__header">
        <h2 className="registration__title">
          {"I don't have an account"}
        </h2>
        <span className="registration__description">
          Sign up with your email and password
        </span>
      </header>
      <Form className="registration__form" onSubmit={handleSubmit}>
        <Input
          name="register-name"
          className="registration__field sign-in__name"
          label="Display Name"
        />
        <Input
          type="email"
          name="register-email"
          className="registration__field registration__email"
          label="Email"
        />
        <Input
          type="password"
          name="register-password"
          className="registration__field sign-on__password"
          label="Password"
        />
        <Input
          type="password"
          name="register-confirm-password"
          className="registration__field sign-on__password"
          label="Confirm Password"
        />
        <Button type="submit" className="registration__button">
          Sign Up
        </Button>
      </Form>
    </article>
  );
};

export default Registration;
