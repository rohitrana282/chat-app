import { auth } from '../../misc/firebase';
import React from 'react';

const ProviderBlock = () => {
  console.log(auth.currentUser);
  return <div>hey</div>;
};

export default ProviderBlock;
