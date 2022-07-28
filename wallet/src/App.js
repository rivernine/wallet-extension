/*global chrome*/
import React, { useEffect, useState } from 'react';
// Router
import { Routes, Route, Link, Navigate } from "react-router-dom";
// Mui
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import logo from './logo.svg';
import './App.css';

import Home from './components/Home';
import Ethereum from './components/ethereum/Ethereum';
import Mnemonic from './components/ethereum/Mnemonic';
import Solana from './components/solana/Solana';
import KeyringController from './components/ethereum/keyring/KeyringController';

function App() {

  const [url, setUrl] = useState('');
  // const [responseFromContent, setResponseFromContent] = useState('');

  // const sendTestMessage = () => {
  //   const message = {
  //     from: "React",
  //     message: "Hello from React"
  //   };
  //   const queryInfo = {
  //     active: true,
  //     currentWindow: true
  //   };

  //   chrome.tabs && chrome.tabs.query(queryInfo, tabs => {
  //     const currentTabId = tabs[0].id;
  //     // console.log('currentTabId', currentTabId)
  //     chrome.tabs.sendMessage(
  //       currentTabId,
  //       message,
  //       (response) => {
  //         setResponseFromContent(response);
  //       }
  //     )
  //   })

  // }

  // const sendRemoveMessage = () => {
  //   const message = {
  //     from: "React",
  //     message: "delete logo"
  //   };
  //   const queryInfo = {
  //     active: true,
  //     currentWindow: true
  //   };

  //   chrome.tabs && chrome.tabs.query(queryInfo, tabs => {
  //     const currentTabId = tabs[0].id;
  //     chrome.tabs.sendMessage(
  //       currentTabId,
  //       message,
  //       (response) => {
  //         setResponseFromContent(response);
  //       }
  //     )
  //   })
  // }

  useEffect(() => {
    const queryInfo = { active: true, lastFocusedWindow: true };
    chrome.tabs && chrome.tabs.query(queryInfo, tabs => {
      const url = tabs[0].url;
      setUrl(url);
    });
  }, []);

  console.log("App")
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ethereum" element={<Ethereum />}>
          <Route path="mnemonic" element={<Mnemonic />} />
          <Route path="keyring" element={<KeyringController />} />
        </Route>
        <Route path="/solana" element={<Solana />} />
      </Routes>
    </div>
  );
}

export default App;
