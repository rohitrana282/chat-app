import { auth } from '../../misc/firebase';
import React, { useState } from 'react';
import { Icon, Tag } from 'rsuite';

const ProviderBlock = () => {
  const [isConnected, setIsConnected] = useState({
    'google.com': auth.currentUser.providerData.some(
      data => data.providerId === 'google.com'
    ),
    'facebook.com': auth.currentUser.providerData.some(
      data => data.providerId === 'facebook.com'
    ),
  });
  return (
    <div>
      <Tag color="green" closable>
        <Icon icon="google" />
        Connected
      </Tag>
      <Tag color="blue" closable>
        <Icon icon="facebook" />
        Connected
      </Tag>
    </div>
  );
};

export default ProviderBlock;
