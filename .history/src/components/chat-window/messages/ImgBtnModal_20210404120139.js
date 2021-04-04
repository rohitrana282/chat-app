import React from 'react';
import { Input } from 'rsuite';
import { useModalState } from '../../../misc/custom-hooks';

const ImgBtnModal = ({ src, fileName }) => {
  const { isopen, close, open } = useModalState();

  return (
    <>
      <Input type="image" src={src} alt="file" onClick={open} />
    </>
  );
};

export default ImgBtnModal;
