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
import SignIn from './components/ethereum/SignIn';
import SignUp from './components/ethereum/SignUp';
import Mnemonic from './components/ethereum/Mnemonic';
import KeyringController from './components/ethereum/keyring/KeyringController';

import Solana from './components/solana/Solana';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ethereum" element={<Ethereum />}>
          <Route path="signIn" element={<SignIn />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="mnemonic" element={<Mnemonic />} />
          <Route path="keyring" element={<KeyringController />} />
        </Route>
        <Route path="/solana" element={<Solana />} />
      </Routes>
    </div>
  );
}

export default App;
