import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../misc/firebase';

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(authObj => {
      if (authObj) {
        const Profile = {
          uid: authObj.uid,
          email: authObj.email,
        };
        setProfile(Profile);
      } else {
        setProfile(null);
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
