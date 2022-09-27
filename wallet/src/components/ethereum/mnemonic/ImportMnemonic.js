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

export default function ImportMnemonic() {
  const navigate = useNavigate();

  let idx = 0;
  const [inputs, setInputs] = useState([
    "", "", "", "", "", "", "", "", "", "", "", ""
  ])

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
          navigate('/ethereum/mnemonic/save', { state: { phrase: inputs.join(" ") } })
        }}
      >
        Next
      </Button>
    </>
  );
}