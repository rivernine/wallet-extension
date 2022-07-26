/*global chrome*/
import React, { useEffect, useState } from 'react';

import logo from './logo.svg';
import './App.css';

function App() {

  const [url, setUrl] = useState('');
  const [responseFromContent, setResponseFromContent] = useState('');

  const sendTestMessage = () => {
    const message = {
      from: "React",
      message: "Hello from React"
    };
    const queryInfo = {
      active: true,
      currentWindow: true
    };

    chrome.tabs && chrome.tabs.query(queryInfo, tabs => {
      const currentTabId = tabs[0].id;
      // console.log('currentTabId', currentTabId)
      chrome.tabs.sendMessage(
        currentTabId,
        message,
        (response) => {
          setResponseFromContent(response);
        }
      )
    })

  }

  const sendRemoveMessage = () => {
    const message = {
      from: "React",
      message: "delete logo"
    };
    const queryInfo = {
      active: true,
      currentWindow: true
    };

    chrome.tabs && chrome.tabs.query(queryInfo, tabs => {
      const currentTabId = tabs[0].id;
      chrome.tabs.sendMessage(
        currentTabId,
        message,
        (response) => {
          setResponseFromContent(response);
        }
      )
    })
  }

  useEffect(() => {
    const queryInfo = { active: true, lastFocusedWindow: true };

    chrome.tabs && chrome.tabs.query(queryInfo, tabs => {
      const url = tabs[0].url;
      setUrl(url);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>URL:</p>
        <p>{url}</p>
        <button onClick={sendTestMessage}>SEND MESSAGE</button>
        <button onClick={sendRemoveMessage}>Remove logo</button>
        <p>Response from content:</p>
        <p>{responseFromContent}</p>
      </header>
    </div>
  );
}

export default App;
