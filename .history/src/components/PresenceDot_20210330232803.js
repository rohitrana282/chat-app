import React from 'react';
import { Badge, Whisper } from 'rsuite';
import { usePresence } from '../misc/custom-hooks';

const getColor=(presence)=>{
  if(!presence){
    return 'gray'
  }

  switch(presence.state){
    case 'online': return 'green';
    case 'offline': return 'red';
    default : return 'gray'
  }
}

const PresenceDot = ({uid}) => {
  const presence = usePresence(uid);

  return  <Whisper placement="top" trigger="hover" speaker={<Tooltip>
    {getText(presence)}
  </Tooltip>}>
  <Button>Hover</Button>
  <Badge className="cursor-pointer" style={{backgroundColor:getColor(presence)}}/>
</Whisper>;
};

consuidt presence = usePresence();

export default PresenceDot;
