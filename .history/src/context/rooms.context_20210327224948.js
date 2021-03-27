import React, { createContext, useState } from 'react';

const RoomsContext = createContext();

export const RoomsProvider = ({ children }) => {
  return (

const[rooms,setRooms]=useState(null)

    <RoomsContext.Provider value="hello">{children}</RoomsContext.Provider>
  );
};
