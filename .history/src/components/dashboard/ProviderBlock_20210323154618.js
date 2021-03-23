import React, { useState } from 'react';
import { Alert, Button, Icon, Tag } from 'rsuite';
import { auth } from '../../misc/firebase';

const ProviderBlock = () => {
  const [isConnected, setIsConnected] = useState({
    'google.com': auth.currentUser.providerData.some(
      data => data.providerId === 'google.com'
    ),
    'facebook.com': auth.currentUser.providerData.some(
      data => data.providerId === 'facebook.com'
    ),
  });

  const unLink = providerId => {

try {
  if(auth.currentUser.providerData.length===1){
    throw new Error{`You cannot disconnect from ${providerId}`}
  }
} catch (err) {
  Alert.error(err.message,4000)
}

  };

  const unLinkGoogle = () => {
    unLink('google.com');
  };
  const unLinkFacebook = () => {
    unLink('facebook.com');
  };
  const linkGoogle = () => {};
  const linkFacebook = () => {};

  return (
    <div>
      {isConnected['google.com'] && (
        <Tag color="green" closable>
          <Icon icon="google" className="mr-1" />
          Connected
        </Tag>
      )}
      {isConnected['facebook.com'] && (
        <Tag color="blue" closable>
          <Icon icon="facebook" className="mr-1" />
          Connected
        </Tag>
      )}

      <div className="mt-2">
        {!isConnected['google.com'] && (
          <Button block color="green">
            <Icon icon="google" className="mr-1" />
            Link to Google
          </Button>
        )}
        {!isConnected['facebook.com'] && (
          <Button block color="blue">
            <Icon icon="facebook" className="mr-1" />
            Link to Facebook
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProviderBlock;
