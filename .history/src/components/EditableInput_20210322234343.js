import React, { useState } from 'react';
import { Icon, Input, InputGroup } from 'rsuite';

const EditableInput = ({
  initialValue,
  onSave,
  label = null,
  placeholder = 'Write your value',
  emptyMsg = 'Input is empty',
  ...inputProps
}) => {
  const [input, setInput] = useState(initialValue);
  const [isEditable, setIsEditable] = useState(false);

  const onInputChange = useCallback(value => {
    setInput(value);
  }, []);

  return (
    <div>
      {label}
      <Input {...inputProps} disabled={!isEditable} placeholder={placeholder} />
      <InputGroup.Button>
        <Icon />
      </InputGroup.Button>
    </div>
  );
};

export default EditableInput;
