/*global chrome*/
import React, { useEffect, useState } from 'react';
// Router
import { Routes, Route, Link } from "react-router-dom";
// Ethers
import { ethers } from "ethers";
// passworder
import passworder from 'browser-passworder';
// Mui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

function decodeMnemonic(mnemonic) {
  if (typeof mnemonic === 'string') {
    return mnemonic
  } else {
    return String.fromCharCode.apply(null, mnemonic);
  }
}

export default function SignIn() {

  const [encPassword, setEncPassword] = useState('');
  const [decResult, setDecResult] = useState('');
  const [address, setAddress] = useState('');

  const dec = (password) => {
    chrome.storage.local.get('data', function (result) {
      const vault = result.data.KeyringController.vault
      passworder.decrypt(password, vault)
        .then((keyringsWithEncodedMnemonic) => {
          // setDecResult(keyringsWithEncodedMnemonic)
          setAddress(keyringsWithEncodedMnemonic)
          const keyringsWithDecodedMnemonic = keyringsWithEncodedMnemonic.map(keyring => {
            if ('mnemonic' in keyring.data) {
              return Object.assign(
                {},
                keyring,
                {
                  data: Object.assign(
                    {},
                    keyring.data,
                    { mnemonic: decodeMnemonic(keyring.data.mnemonic) }
                  )
                }
              )
            } else {
              return keyring
            }
          });
          const serializedKeyrings = JSON.stringify(keyringsWithDecodedMnemonic)
          console.log('Decrypted!', serializedKeyrings)

        })
        .catch((reason) => {
          console.error(reason)
        })
    });

  }

  return (<>
    <Typography variant="h3" color='gray'>SignIn</Typography>
    <Box
      mt='20px' pt='20px' height='400px' bgcolor="darkgray"
      alignItems='center' justifyContent='center'
      direction="row" spacing={2}
    >
      <Box mt='40px'>
        <Box >
          <TextField
            placeholder='password'
            color="primary"
            focused
            value={encPassword}
            size='small'
            onChange={(e) => setEncPassword(e.target.value)}
          />
        </Box>
        <Button variant='contained' color="primary" onClick={() => dec(encPassword)}>Decrypt</Button>
        <Typography variant="subtitle1" color='black'>Mnemonic</Typography>
        <Typography variant="subtitle2" color='black'>{address}</Typography>
      </Box>
    </Box>
  </>

  );
}