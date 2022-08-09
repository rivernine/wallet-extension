/*global chrome*/
import React, { useEffect, useState } from 'react';
// Router
import { Routes, Route, Link, useParams, useLocation } from "react-router-dom";
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
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Input from '@mui/material/Input';

export default function SaveMnemonic() {
  const loc = useLocation()
  const generatedPhrase = loc.state.phrase

  let idx = 0;
  const [inputs, setInputs] = useState([
    "", "", "", "", "", "", "", "", "", "", "", ""
  ])
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

  console.log(generatedPhrase)

  return (
    <>
      <Box
        py={3}
        alignItems='center' justifyContent='center'
      >
        {
          inputs.map((word, i) => {
            return (
              <Grid key={idx++} container spacing={0}
                my={"1.5px"}
                alignItems='center' justifyContent='center'
              >
                <Grid item xs={1}>
                  <Typography variant="subtitle2" color='gray'>
                    {i + 1}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    fontSize={'1px'}
                    size="small"
                    variant="standard"
                    onChange={(e) => {
                      const tmpMnemonic = inputs;
                      tmpMnemonic[i] = e.target.value
                      setInputs(tmpMnemonic)
                    }}
                  />
                </Grid>
              </Grid>
            );
          })
        }
      </Box>
      <Button
        variant='contained' color="primary"
        onClick={() => {
          if(inputs.join(" ") === generatedPhrase) {
            console.log("Correct")
          } else {
            console.log("Incorrect");
          }
          // enc(mnemonicPassword, mnemonic)
        }}
      >
        Next
      </Button>
    </>
  );
}