import React from 'react';

const ChatList = () => {
  const chatData = [
    { contact: 'John Doe', message: 'Hey, how are you?', timestamp: '10:30 AM' },
    { contact: 'Jane Smith', message: 'Can we meet tomorrow?', timestamp: 'Yesterday' },
    { contact: 'David Johnson', message: 'Check out this link!', timestamp: '2 days ago' },
    // Add more chat items as needed
  ];

  return (
    <div className="chat-list">
      {chatData.map((chatItem, index) => (
        <div className="chat-item" key={index}>
          <div className="contact-name">{chatItem.contact}</div>
          <div className="last-message">{chatItem.message}</div>
          <div className="timestamp">{chatItem.timestamp}</div>
        </div>
      ))}
    </div>
  );
};

export default ChatList;
