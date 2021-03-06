import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CurrentUserContext } from '@app/providers/CurrentUser';
import { auth } from '@app/firebase/firebase.utils';

const SignInButton = () => {
  const {
    selectors: {
      getCurrentUser
    }
  } = useContext(CurrentUserContext);

  const signOut = () => {
    auth.signOut();
  };

  return (
    <li className="navigation__list-item">
      {getCurrentUser() === null ? (
        <NavLink
          to="/sign-in"
          className="navigation__link"
          activeClassName="navigation__link--active"
        >
          Sigh In
        </NavLink>

      ) : (
        <div
          className="navigation__link"
          onClick={signOut}
        >
          Sigh Out
        </div>
      )}
    </li>
  );
};

export default SignInButton;
