import React, { useCallback, useState } from 'react';
import { Icon, Input, InputGroup } from 'rsuite';

const Bottom = () => {
  const [input, setInput] = useState('');

  const onChangeInput = useCallback(value => {
    setInput(value);
  }, []);

  return (
    <div>
      <InputGroup>
        <Input
          placeholder="Write a new message here..."
          value={input}
          onChange={onChangeInput}
        />
        <InputGroup.Button appearance="primary" color="blue">
          <Icon icon="send" />
        </InputGroup.Button>
      </InputGroup>
    </div>
  );
};

export default Bottom;
