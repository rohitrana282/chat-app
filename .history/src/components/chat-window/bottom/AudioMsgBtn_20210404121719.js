import React from 'react';
import { Icon, InputGroup } from 'rsuite';

const AudioMsgBtn = () => {
  return (
    <InputGroup.Button onClick={onClick}>
      <Icon icon="microphone" />
    </InputGroup.Button>
  );
};

export default AudioMsgBtn;
