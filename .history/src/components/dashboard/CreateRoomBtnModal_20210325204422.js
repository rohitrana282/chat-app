import React from 'react';
import { Button, Icon, Modal } from 'rsuite';
import { useModalState } from '../../misc/custom-hooks';

const CreateRoomBtnModal = () => {
  const { isOpen, open, close } = useModalState();

  return (
    <div>
      <Button block color="green" onClick={open}>
        <Icon icon="creative" />
        Create new ChatRoom
      </Button>

      <Modal>
        <Modal.Header>
          <Modal.Title>New Chat Room</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button block appearance="primary">
            Create new chat room = new type(arguments);
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CreateRoomBtnModal;
