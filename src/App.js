import React from 'react';
import './App.css';
import ChatList from './components/ChatList';
import ChatWindow from './components/ChatWindow';

const App = () => {
  return (
    <div className="app">
      <div className="sidebar">
        <ChatList />
      </div>
      <div className="main">
        <ChatWindow />
      </div>
    </div>
  );
};

export default App;
