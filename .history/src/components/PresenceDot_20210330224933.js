import React from 'react';
import { usePresence } from '../misc/custom-hooks';

const PresenceDot = ({uid}) => {
  const presence = usePresence(uid);

  return <div></div{uid}>;
};

consuidt presence = usePresence();

export default PresenceDot;
