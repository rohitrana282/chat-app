import React, { createContext, useEffect } from 'react';

const RoomsContext = createContext();

export const RoomsProvider = ({ children }) => {
  const [rooms, setRooms] = useState(null);

  useEffect(() => {});

  return (
    <RoomsContext.Provider value="hello">{children}</RoomsContext.Provider>
  );
};
