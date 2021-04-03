import React from 'react';
import { Icon, InputGroup } from 'rsuite';
import { useModalState } from '../../../misc/custom-hooks';

const AttachmentBtnModal = () => {
  const { isopen, close, open } = useModalState();

  return (
    <div>
      <InputGroup.Button>
        <Icon icon="attachment" />
      </InputGroup.Button>
    </div>
  );
};

export default AttachmentBtnModal;
