import React from 'react';
import { useCurrentRoom } from '../../../context/current-room.context';

const RoomInfoBtnModal = () => {
  const description = useCurrentRoom(v => v.description);

  return <div>h</div>;
};

export default RoomInfoBtnModal;
