import React, { useCallback, useState } from 'react';
import { ReactMic } from 'react-mic';
import { Icon, InputGroup } from 'rsuite';

const AudioMsgBtn = () => {
  const [isRecording, setIsRecording] = useState(false);

  const onUpload = useCallback(() => {}, []);

  return (
    <InputGroup.Button onClick={onClick}>
      <Icon icon="microphone" />
      <ReactMic
        record={isRecording}
        className="sound-wave"
        onStop={onUpload}
        onData={this.onData}
        strokeColor="#000000"
        backgroundColor="#FF4081"
      />
    </InputGroup.Button>
  );
};

export default AudioMsgBtn;
