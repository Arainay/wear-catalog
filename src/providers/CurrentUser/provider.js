import React, { createContext, useEffect, useState } from 'react';
import { auth } from '@app/firebase/firebase.utils';
import createUserProfileDocument from './createUserProfileDocument';

export const CurrentUserContext = createContext({});

const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      await createUserProfileDocument(user);
      setCurrentUser(user);
    });

    return function cleanup() {
      unsubscribeFromAuth();
    };
  }, []);

  const selectors = {
    getCurrentUser: () => currentUser
  };

  return (
    <CurrentUserContext.Provider
      value={{
        selectors
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProvider;
