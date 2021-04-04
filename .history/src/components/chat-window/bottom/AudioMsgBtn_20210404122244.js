import React, { useCallback, useState } from 'react';
import { ReactMic } from 'react-mic';
import { Icon, InputGroup } from 'rsuite';

const AudioMsgBtn = () => {
  const [isRecording, setIsRecording] = useState(false);

  const onClick = useCallback(() => {
    setIsRecording(p => !p);
  }, []);
  const onUpload = useCallback(() => {}, []);

  return (
    <InputGroup.Button onClick={onClick}>
      <Icon icon="microphone" />
      <ReactMic
        record={isRecording}
        className="d-none"
        onStop={onUpload}
        mimeType="audio/mp3"
      />
    </InputGroup.Button>
  );
};

export default AudioMsgBtn;
