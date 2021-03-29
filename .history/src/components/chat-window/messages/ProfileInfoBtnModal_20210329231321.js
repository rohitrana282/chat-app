import { Button } from 'rsuite';

import React from 'react';
import { useModalState } from '../../../misc/custom-hooks';

const ProfileInfoBtnModal = ({ profile }) => {
  const { isOpen, close, open } = useModalState();
  const shortName = profile.name.split(' ')[0];

  return (
    <div>
      <Button>{shortName}</Button>
    </div>
  );
};

export default ProfileInfoBtnModal;
