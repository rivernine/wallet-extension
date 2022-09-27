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
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CheckMnemonic() {
  const loc = useLocation()
  const navigate = useNavigate();
  const generatedPhrase = loc.state.phrase

  let idx = 0;
  const [inputs, setInputs] = useState([
    "", "", "", "", "", "", "", "", "", "", "", ""
  ])

  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

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

  console.log(generatedPhrase)

  return (
    <>
      <Box
        width="350px"
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
          if (inputs.join(" ") === generatedPhrase) {
            navigate('/ethereum/mnemonic/save', { state: { phrase: generatedPhrase } })
          } else {
            setOpen(true);
          }
        }}
      >
        Next
      </Button>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={1000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Please re-enter the mnemonic
        </Alert>
      </Snackbar>
    </>
  );
}