import React from 'react';

const ChatItem = ({ contact, message, timestamp, avatar }) => {
  return (
    <div className="chat-item">
      <div className="avatar">
        <img src={avatar} alt="Contact Avatar" />
      </div>
      <div className="chat-details">
        <div className="contact-name">{contact}</div>
        <div className="last-message">{message}</div>
        <div className="timestamp">{timestamp}</div>
      </div>
    </div>
  );
};

export default ChatItem;
