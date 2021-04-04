import React, { useState } from 'react';
import { ReactMic } from 'react-mic';
import { Icon, InputGroup } from 'rsuite';

const AudioMsgBtn = () => {
  const [isRecording, setIsRecording] = useState(false);

  return (
    <InputGroup.Button onClick={onClick}>
      <Icon icon="microphone" />
      <ReactMic
        record={this.state.record}
        className="sound-wave"
        onStop={this.onStop}
        onData={this.onData}
        strokeColor="#000000"
        backgroundColor="#FF4081"
      />
    </InputGroup.Button>
  );
};

export default AudioMsgBtn;
