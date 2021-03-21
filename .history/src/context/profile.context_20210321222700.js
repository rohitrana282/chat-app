import React, { createContext, useContext, useState } from 'react';
import { auth } from '../misc/firebase';

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, useProfile] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(authObj => {
      if (authObj) {
      }
    });
    return () => {};
  }, []);

  return (
    <ProfileContext.Provider value={profile}>
      {children}
    </ProfileContext.Provider>
  );
};
export const useProfile = () => useContext(ProfileContext);
