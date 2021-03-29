import { Button } from 'rsuite';

import React from 'react';

const ProfileInfoBtnModal = ({ profile }) => {
  const shortName = profile.name.split(' ')[0];

  return (
    <div>
      <Button>{shortName}</Button>
    </div>
  );
};

export default ProfileInfoBtnModal;
