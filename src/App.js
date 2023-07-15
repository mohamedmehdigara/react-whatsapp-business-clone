import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import ChatList from './components/ChatList';
import Message from './components/Message';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <Sidebar />
        <ChatList />
        <ChatWindow>
          <Message sender="John Doe" content="Hey, how are you?" timestamp="10:30 AM" />
          <Message sender="Jane Smith" content="Can we meet tomorrow?" timestamp="Yesterday" />
          <Message sender="David Johnson" content="Check out this link!" timestamp="2 days ago" />
        </ChatWindow>
      </div>
    </div>
  );
};

export default App;
