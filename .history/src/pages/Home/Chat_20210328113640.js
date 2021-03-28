import React from 'react';
import Bottom from '../../components/chat window/bottom';
import Messages from '../../components/chat window/messages';
import Top from '../../components/chat window/top';

const Chat = () => {
  return (
    <div>
      <div>
        <Top />
      </div>
      <div>
        <Messages />
      </div>
      <div>
        <Bottom />
      </div>
    </div>
  );
};

export default Chat;
