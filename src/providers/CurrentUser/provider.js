import React, { createContext, useEffect, useState } from 'react';
import { auth } from '@app/firebase/firebase.utils';
import createUserProfileDocument from './createUserProfileDocument';

export const CurrentUserContext = createContext({});

const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      const userRef = await createUserProfileDocument(user);
      if (!userRef) {
        setCurrentUser(null);
        return;
      }

      userRef.onSnapshot(snapshot => {
        if (snapshot.exists) {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        }
      });
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
