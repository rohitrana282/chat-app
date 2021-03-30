import React from 'react';
import { Whisper } from 'rsuite';
import { usePresence } from '../misc/custom-hooks';

const PresenceDot = ({uid}) => {
  const presence = usePresence(uid);

  return  <Whisper placement="top" trigger="hover" speaker={<Tooltip>
    This is a help <i>tooltip</i> .
  </Tooltip>}>
  <Button>Hover</Button>
</Whisper>;
};

consuidt presence = usePresence();

export default PresenceDot;
