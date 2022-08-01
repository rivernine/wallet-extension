/*global chrome*/
import React, { useEffect, useState } from 'react';
// Router
import { Routes, Route, Link } from "react-router-dom";
// Ethers
import { ethers } from "ethers";
// Passworder
import passworder from 'browser-passworder';
// Mui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


export default function SignUp() {

  const [walletMnemonic, setWalletMnemonic] = useState(null);

  const createMnemonic = async () => {
    const newMnemonic = await ethers.Wallet.createRandom().mnemonic
    const walletMnemonic = ethers.Wallet.fromMnemonic(newMnemonic.phrase)
    setWalletMnemonic(walletMnemonic)
    setMnemonic(walletMnemonic.mnemonic.phrase)
  }

  const [mnemonic, setMnemonic] = useState('');
  const [mnemonicPassword, setMnemonicPassword] = useState('');

  const enc = (password, secrets) => {
    passworder.encrypt(password, secrets)
      .then(function (blob) {
        chrome.storage.local.set({
          data: {
            KeyringController: {
              vault: blob
            }
          }
        }, function () {
          console.log('Value is set to ' + blob);
        });
      })
  }

  return (
    <>
      <Typography variant="h3" color='gray'>SignUp</Typography>
      <Box
        mt='20px' pt='20px' height='400px' bgcolor="darkgray"
        alignItems='center' justifyContent='center'
        direction="row" spacing={2}
      >
        <Box>
          <Box >
          <Button variant='contained' color="primary" onClick={() => createMnemonic()}>Create mnemonic</Button>
            <TextField
              placeholder='Mnemonic'
              color="primary"
              focused
              value={mnemonic}
              size='small'
              onChange={(e) => setMnemonic(e.target.value)}
            />
            <TextField
              placeholder='password'
              color="primary"
              focused
              value={mnemonicPassword}
              size='small'
              onChange={(e) => setMnemonicPassword(e.target.value)}
            />
          </Box>
          <Button variant='contained' color="primary" onClick={() => enc(mnemonicPassword, mnemonic)}>Save to chrome storage</Button>
        </Box>
      </Box>
    </>
  );
}