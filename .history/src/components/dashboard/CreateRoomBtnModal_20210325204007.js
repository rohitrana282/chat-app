import React from 'react';
import { Button, Icon } from 'rsuite';
import { useModalState } from '../../misc/custom-hooks';

const CreateRoomBtnModal = () => {
  const { isOpen, open, close } = useModalState();

  return (
    <div>
      <Button block color="green" onClick={open}>
        <Icon icon="creative" />
        Create new ChatRoom
      </Button>
    </div>
  );
};

export default CreateRoomBtnModal;
