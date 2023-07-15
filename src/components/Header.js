import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="whatsapp-logo.png" alt="WhatsApp Logo" />
        <span className="app-name">WhatsApp</span>
      </div>
      <div className="navigation">
        <button className="nav-button">Chats</button>
        <button className="nav-button">Contacts</button>
        <button className="nav-button">Groups</button>
      </div>
      <div className="user-profile">
        <img src="user-avatar.png" alt="User Avatar" />
        <span className="user-name">John Doe</span>
      </div>
    </header>
  );
};

export default Header;
