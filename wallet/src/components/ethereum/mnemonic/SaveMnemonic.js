/*global chrome*/
import React, { useEffect, useState } from 'react';
// Router
import { Routes, Route, Link, useParams, useLocation, useNavigate, Navigate } from "react-router-dom";
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
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function SaveMnemonic() {
  const loc = useLocation()
  const generatedPhrase = loc.state.phrase
  const navigate = useNavigate();

  let idx = 0;
  const [password, setPassword] = useState(false);
  const [verification, setVerification] = useState(false);
  const encAndSave = (password, secrets) => {
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
      <Box
        width="350px"
        py={3}
        alignItems='center' justifyContent='center'
      >
        <Box width="250px" height="70px" margin="auto">
          <TextField
            fullWidth
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
            error={
              password.length > 0 && password.length < 4
                ?
                true
                :
                false
            }
            helperText={
              password.length > 0 && password.length < 4
                ?
                "Password length must be greater than 4."
                :
                null
            }
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <Box width="250px" height="70px" marginX="auto" mt={2}>
          <TextField
            fullWidth
            id="standard-password-input"
            label="Verification"
            type="password"
            autoComplete="current-password"
            variant="standard"
            error={
              verification.length > 0 && password !== verification
                ?
                true
                :
                false
            }
            helperText={
              verification.length > 0 && password !== verification
                ?
                "Password and verification are different."
                :
                null
            }
            onChange={(e) => setVerification(e.target.value)}
          />
        </Box>
      </Box>
      <Button
        variant='contained' color="primary"
        onClick={() => {
          if (password === verification) {
            encAndSave(password, generatedPhrase);
            navigate("/")
          }
        }}
      >
        Complete
      </Button>
    </>
  );
}