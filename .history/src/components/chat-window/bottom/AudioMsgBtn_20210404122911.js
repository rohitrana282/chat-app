import React, { useCallback, useState } from 'react';
import { ReactMic } from 'react-mic';
import { useParams } from 'react-router';
import { Icon, InputGroup } from 'rsuite';
import { storage } from '../../../misc/firebase';

const AudioMsgBtn = () => {
  const { chatId } = useParams();

  const [isRecording, setIsRecording] = useState(false);

  const onClick = useCallback(() => {
    setIsRecording(p => !p);
  }, []);

  const onUpload = useCallback(async data => {
    try {
      const snap = await storage
        .ref(`/chat/${chatId}`)
        .child(`audio_${Date.now()}.mp3`)
        .put(data.blob, {
          cacheControl: `public, max-age=${3600 * 24 * 3}`,
        });

      const file = {
        contentType: snap.metadata.contentType,
        name: snap.metadata.name,
        url: await snap.ref.getDownloadURL(),
      };
      afterUpload([file]);
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
