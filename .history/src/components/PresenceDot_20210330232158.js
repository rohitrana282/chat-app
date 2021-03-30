import React from 'react';
import { Whisper } from 'rsuite';
import { usePresence } from '../misc/custom-hooks';

const PresenceDot = ({uid}) => {
  const presence = usePresence(uid);

  return  <Whisper placement="top" trigger="hover" speaker={<Tooltip>
    hello
  </Tooltip>}>
  <Button>Hover</Button>
</Whisper>;
};

consuidt presence = usePresence();

export default PresenceDot;
