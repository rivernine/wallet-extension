/*global chrome*/
import React, { useEffect, useState } from 'react';
// Router
import { Routes, Route, Link, useParams, useLocation, useNavigate, Navigate } from "react-router-dom";
// Ethers
import { ethers } from "ethers";
// passworder
import passworder from 'browser-passworder';
// Redux
import { useSelector, useDispatch } from 'react-redux'
import { setAddress } from '../../../redux/slice/ethereumSlice';
// Mui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import TransactionClass from '../schedule/TransactionClass';

function decodeMnemonic(mnemonic) {
  if (typeof mnemonic === 'string') {
    return mnemonic
  } else {
    return String.fromCharCode.apply(null, mnemonic);
  }
}

export default function DecryptMnemonic() {

  const transactionClass = new TransactionClass()

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const balance = useSelector((state) => state.ethereum.balance);

  const dec = (password) => {
    const tmp = chrome.storage.local.get('data', function (result) {
      const vault = result.data.KeyringController.vault
      passworder.decrypt(password, vault)
        .then((keyringsWithEncodedMnemonic) => {
          const wallet = ethers.Wallet.fromMnemonic(keyringsWithEncodedMnemonic);
          dispatch(setAddress(wallet.address))

          navigate('/ethereum/home')
          // setAddress(keyringsWithEncodedMnemonic)
          // const keyringsWithDecodedMnemonic = keyringsWithEncodedMnemonic.map(keyring => {
          //   if ('mnemonic' in keyring.data) {
          //     return Object.assign(
          //       {},
          //       keyring,
          //       {
          //         data: Object.assign(
          //           {},
          //           keyring.data,
          //           { mnemonic: decodeMnemonic(keyring.data.mnemonic) }
          //         )
          //       }
          //     )
          //   } else {
          //     return keyring
          //   }
          // });
          // const serializedKeyrings = JSON.stringify(keyringsWithDecodedMnemonic)
          // console.log('Decrypted!', serializedKeyrings)
          // setError(false)
        })
        .catch((reason) => {
          console.error(reason)
          setError(true)
        })
    });

    console.log(tmp)

  }

  return (<>
    <Box alignItems='center' justifyContent='center'>
      <Box width="250px" mx="auto" my={4}>
        <TextField
          fullWidth
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
          error={error}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Box>
      <Stack width="50%" mx="auto" spacing={2}>
        <Button variant='contained' color="primary"
          onClick={() => {
            dec(password)
          }}
        >
          sign in
        </Button>
        <Button variant='contained' color="secondary"
          component={Link} to="/ethereum/mnemonic/generate">
          new mnemonic
        </Button>
        <Button variant='contained' color="success"
          component={Link} to="/ethereum/mnemonic/import">
          import mnemonic
        </Button>
        <Button
          onClick={() => transactionClass.sendRawTransaction()}>
            Test
        </Button>
      </Stack>
      {/* <Typography variant="subtitle1" color='black'>Mnemonic</Typography> */}
      {/* <Typography variant="subtitle2" color='black'>{address}</Typography> */}
    </Box>
  </>

  );
}