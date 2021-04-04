import React, { useCallback, useState } from 'react';
import { ReactMic } from 'react-mic';
import { useParams } from 'react-router';
import { Icon, InputGroup } from 'rsuite';

const AudioMsgBtn = () => {
  const { chatId } = useParams();

  const [isRecording, setIsRecording] = useState(false);

  const onClick = useCallback(() => {
    setIsRecording(p => !p);
  }, []);
  const onUpload = useCallback(async () => {
    try {
      const snap = await storage
        .ref(`/chat/${chatId}`)
        .child(Date.now() + f.name)
        .put(f.blobFile, {
          cacheControl: `public, max-age=${3600 * 24 * 3}`,
        });
    } catch (err) {}
  }, []);

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
