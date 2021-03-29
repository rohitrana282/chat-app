import firebase from 'firebase/app';
import React, { useCallback, useState } from 'react';
import { Icon, Input, InputGroup } from 'rsuite';


function assembleMessage(profile,chatId){
  return{
    roomId:chatId,
    author:{
      name:profile.name,
      uid:profile.uid,
      createdAt:profile.createdAt,
      ...(profile.avatar ? {avatar:profile.avatar} : )
    },
    createdAt:firebase.database.ServerValue.TIMESTAMP
  }
}

const Bottom = () => {
  const [input, setInput] = useState('');

  const onChangeInput = useCallback(value => {
    setInput(value);
  }, []);

  const onSendClick = () => {
    if (input.trim() === '') {
      return;
    }
  };

  return (
    <div>
      <InputGroup>
        <Input
          placeholder="Write a new message here..."
          value={input}
          onChange={onChangeInput}
        />
        <InputGroup.Button
          appearance="primary"
          color="blue"
          onClick={onSendClick}
        >
          <Icon icon="send" />
        </InputGroup.Button>
      </InputGroup>
    </div>
  );
};

export default Bottom;
