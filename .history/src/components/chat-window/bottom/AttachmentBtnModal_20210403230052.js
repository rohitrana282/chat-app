import React from 'react';
import { Icon, InputGroup, Modal } from 'rsuite';
import ModalBody from 'rsuite/lib/Modal/ModalBody';
import ModalFooter from 'rsuite/lib/Modal/ModalFooter';
import ModalHeader from 'rsuite/lib/Modal/ModalHeader';
import { useModalState } from '../../../misc/custom-hooks';

const AttachmentBtnModal = () => {
  const { isopen, close, open } = useModalState();

  return (
    <div>
      <InputGroup.Button onClick={open}>
        <Icon icon="attachment" />
      </InputGroup.Button>
      <Modal show={isopen} onHide={close}>
        <ModalHeader></ModalHeader>
        <ModalBody></ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
    </div>
  );
};

export default AttachmentBtnModal;
