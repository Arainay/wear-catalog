import React from 'react';
import classnames from 'classnames';
import Form, { Button, Input } from '@app/components/Form';
import { signInWithGoolge } from '../../firebase/firebase.utils';
import './sign-in.scss';

const SignIn = ({ className }) => {
  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <article className={classnames('sign-in', className)}>
      <header className="sign-in__header">
        <h2 className="sign-in__title">
          I already have an account
        </h2>
        <span className="sign-in__description">
          Sign in with your email and password
        </span>
      </header>
      <Form className="sign-in__form" onSubmit={handleSubmit}>
        <Input
          type="email"
          name="sign-in-email"
          className="sign-in__field sign-in__email"
          label="Email"
        />
        <Input
          type="password"
          name="sign-in-password"
          className="sign-in__field sign-on__password"
          label="Password"
        />
        <div className="sign-in__buttons">
          <Button type="submit" className="sign-in__button">
            Sign in
          </Button>
          <Button
            className="sign-in__google-button"
            onClick={signInWithGoolge}
          >
            Sign in with Google
          </Button>
        </div>
      </Form>
    </article>
  );
};

export default SignIn;
