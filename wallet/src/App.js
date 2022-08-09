/*global chrome*/
import React, { useEffect, useState } from 'react';
// Router
import { Routes, Route, Link, Navigate } from "react-router-dom";
// Mui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import logo from './logo.svg';
import './App.css';

import Header from './Header';

import Home from './components/Home';
import Ethereum from './components/ethereum/Ethereum';
import SignIn from './components/ethereum/SignIn';
import SaveMnemonic from './components/ethereum/SaveMnemonic';
import Mnemonic from './components/ethereum/Mnemonic';
import KeyringController from './components/ethereum/keyring/KeyringController';

import Solana from './components/solana/Solana';

function App() {
  return (
    <Box>
      <div className="Header">
        <Header />
      </div>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ethereum" element={<Ethereum />}>
            <Route path="mnemonic" element={<Mnemonic />} />
            <Route path="mnemonic/save" element={<SaveMnemonic />} />
            {/* <Route path="signIn" element={<SignIn />} /> */}
            {/* <Route path="createMnemonic" element={<CreateMnemonic />} /> */}
            {/* <Route path="mnemonic" element={<Mnemonic />} /> */}
            <Route path="keyring" element={<KeyringController />} />
          </Route>
          <Route path="/solana" element={<Solana />} />
        </Routes>
      </div>
    </Box>
  );
}

export default App;
