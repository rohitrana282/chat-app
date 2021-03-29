import { Button, Modal } from 'rsuite';

import React from 'react';
import { useModalState } from '../../../misc/custom-hooks';

const ProfileInfoBtnModal = ({ profile }) => {
  const { isOpen, close, open } = useModalState();
  const shortName = profile.name.split(' ')[0];

  return (
    <div>
      <Button>{shortName}</Button>
      <Modal show={isOpen} onHide={close}>
        <Modal.Header>
          <Modal.Title>{shortName} profile</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button block onClick={close}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProfileInfoBtnModal;
