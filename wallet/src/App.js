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
import EthereumHome from './components/ethereum/home/EthereumHome';
import EthereumTransfer from './components/ethereum/home/EthereumTransfer';

import DecryptMnemonic from './components/ethereum/mnemonic/DecryptMnemonic';
import ImportMnemonic from './components/ethereum/mnemonic/ImportMnemonic';
import CheckMnemonic from './components/ethereum/mnemonic/CheckMnemonic';
import SaveMnemonic from './components/ethereum/mnemonic/SaveMnemonic';
import GenerateMnemonic from './components/ethereum/mnemonic/GenerateMnemonic';
import KeyringController from './components/ethereum/keyring/KeyringController';

import Solana from './components/solana/Solana';

function App() {
  return (
    <Box border={0.1} borderColor={"gray"}>
      <div className="Header">
        <Header />
      </div>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ethereum" element={<Ethereum />}>
            <Route path="home" element={<EthereumHome />}/>
            <Route path="transfer" element={<EthereumTransfer />}/>


            <Route path="mnemonic/generate" element={<GenerateMnemonic />} />
            <Route path="mnemonic/check" element={<CheckMnemonic />} />
            <Route path="mnemonic/save" element={<SaveMnemonic />} />
            <Route path="mnemonic/decrypt" element={<DecryptMnemonic />} />
            <Route path="mnemonic/import" element={<ImportMnemonic />} />
            <Route path="keyring" element={<KeyringController />} />
          </Route>
          <Route path="/solana" element={<Solana />} />
        </Routes>
      </div>
    </Box>
  );
}

export default App;
