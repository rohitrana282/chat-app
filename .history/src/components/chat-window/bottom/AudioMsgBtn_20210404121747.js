import React from 'react';
import { ReactMic } from 'react-mic';
import { Icon, InputGroup } from 'rsuite';

const AudioMsgBtn = () => {
  return (
    <InputGroup.Button onClick={onClick}>
      <Icon icon="microphone" />
    </InputGroup.Button>
  );
};

export default AudioMsgBtn;
