import React from 'react';
import { Input, Modal } from 'rsuite';
import ModalBody from 'rsuite/lib/Modal/ModalBody';
import ModalFooter from 'rsuite/lib/Modal/ModalFooter';
import ModalHeader from 'rsuite/lib/Modal/ModalHeader';
import ModalTitle from 'rsuite/lib/Modal/ModalTitle';
import { useModalState } from '../../../misc/custom-hooks';

const ImgBtnModal = ({ src, fileName }) => {
  const { isopen, close, open } = useModalState();

  return (
    <>
      <Input
        type="image"
        src={src}
        alt="file"
        onClick={open}
        className="mw-100 mh-100 w-auto"
      />

      <Modal>
        <ModalHeader>
          <ModalTitle>{fileName}</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <div>
            <img src={src} height="100%" width="100%" alt={file} />
          </div>
        </ModalBody>
        <ModalFooter>
          <a href={src} target="blank" rel="noopener noreferer">
            View Original
          </a>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ImgBtnModal;
