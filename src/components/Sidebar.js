import React from 'react';

const Sidebar = () => {
  const chatList = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'David Johnson' },
    // Add more chat items as needed
  ];

  const contactList = [
    { id: 1, name: 'Alice Anderson' },
    { id: 2, name: 'Bob Brown' },
    { id: 3, name: 'Charlie Clark' },
    // Add more contacts as needed
  ];

  const groupList = [
    { id: 1, name: 'Design Team' },
    { id: 2, name: 'Marketing Group' },
    { id: 3, name: 'Development Squad' },
    // Add more groups as needed
  ];

  return (
    <aside className="sidebar">
      <div className="section">
        <h2>Chats</h2>
        <ul>
          {chatList.map((chat) => (
            <li key={chat.id}>{chat.name}</li>
          ))}
        </ul>
      </div>
      <div className="section">
        <h2>Contacts</h2>
        <ul>
          {contactList.map((contact) => (
            <li key={contact.id}>{contact.name}</li>
          ))}
        </ul>
      </div>
      <div className="section">
        <h2>Groups</h2>
        <ul>
          {groupList.map((group) => (
            <li key={group.id}>{group.name}</li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
