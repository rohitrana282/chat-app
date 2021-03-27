import React, { createContext } from 'react';

const RoomsContext = createContext();

export const RoomsProvider = ({ children }) => {
  const [rooms, setRooms] = useState(null);
  return (
    <RoomsContext.Provider value="hello">{children}</RoomsContext.Provider>
  );
};
