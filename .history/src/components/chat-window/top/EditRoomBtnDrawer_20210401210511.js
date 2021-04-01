import React, { memo } from 'react';
import { Button, Drawer } from 'rsuite';
import { useCurrentRoom } from '../../../context/current-room.context';
import { useModalState } from '../../../misc/custom-hooks';
import EditableInput from '../../EditableInput';

const EditRoomBtnDrawer = () => {
  const { isOpen, open, close } = useModalState();
  const name = useCurrentRoom(v => v.name);
  const description = useCurrentRoom(v => v.description);

  return (
    <div>
      <Button className="br-circle" size="sm" color="red" onClick={open}>
        A
      </Button>

      <Drawer show={isOpen} onHide={close} placement="right">
        <Drawer.Header>
          <Drawer.Title>Edit Room</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <EditableInput
            initialValue={name}
            onSave={onNameSave}
            label={<h6 className="mb-2">Name</h6>}
            emptyMsg="Name cannot be empty"
          />
          <EditableInput
            componentClass="text=-area"
            rows={5}
            initialValue={description}
            onSave={onDescriptionSave}
            emptyMsg="Description cannot be empty"
          />
        </Drawer.Body>
        <Drawer.Footer>
          <Button block onClick={close}>
            Close
          </Button>
        </Drawer.Footer>
      </Drawer.Title>
    </div>
  );
};

export default memo(EditRoomBtnDrawer);
