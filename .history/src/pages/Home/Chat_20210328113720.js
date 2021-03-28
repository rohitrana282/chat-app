import React from 'react';
import Bottom from '../../components/chat window/bottom';
import Messages from '../../components/chat window/messages';
import Top from '../../components/chat window/top';

const Chat = () => {
  return (
    <div>
      <div className="chat-top">
        <Top />
      </div>
      <div className="chat-middle">
        <Messages />
      </div>
      <div className="chat-bottom">
        <Bottom />
      </div>
    </div>
  );
};

export default Chat;
