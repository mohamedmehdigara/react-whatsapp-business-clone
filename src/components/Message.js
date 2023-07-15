import React from 'react';

const Message = ({ sender, content, timestamp }) => {
  return (
    <div className="message">
      <div className="sender">{sender}</div>
      <div className="content">{content}</div>
      <div className="timestamp">{timestamp}</div>
    </div>
  );
};

export default Message;
