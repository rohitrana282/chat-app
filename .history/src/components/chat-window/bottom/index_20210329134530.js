import React, { useState } from 'react';
import { Icon, Input, InputGroup } from 'rsuite';

const Bottom = () => {
  const [input, setInput] = useState('');

  return (
    <div>
      <InputGroup>
        <Input placeholder="Write a new message here..." />
        <InputGroup.Button appearance="primary" color="blue">
          <Icon icon="send" />
        </InputGroup.Button>
      </InputGroup>
    </div>
  );
};

export default Bottom;
