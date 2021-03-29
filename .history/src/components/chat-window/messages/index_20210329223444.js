import React, { useState } from 'react';
import { useParams } from 'react-router';

const Messages = () => {
  const { chatId } = useParams();
  const [messages, setMessages] = useState(null);

  return <div>messages</div>;
};

export default Messages;
