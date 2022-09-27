/*global chrome*/
import React, { useEffect, useState } from 'react';
// Redux
import { useSelector, useDispatch } from 'react-redux'
import { setPolling } from '../../../redux/slice/ethereumSlice';
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

import AccountSchedulerClass from '../schedule/AccountSchedulerClass';

export default function EthereumTransfer() {
  const loc = useLocation()
  const dispatch = useDispatch();

  const address = useSelector((state) => state.ethereum.address)
  const balance = useSelector((state) => state.ethereum.balance);

  const [toAddress, setToAddress] = useState("")
  const [toBalance, setToBalance] = useState("")

  useEffect(() => {
    let mounted = true;

    if (mounted) {
    }

    return (() => mounted = false)
  })

  return (
    <>
      <Box
        width="350px" height="200px" py={1}
        display='flex' justifyContent={"center"} flexDirection={"column"} alignItems="center"
      >
        <Box width="80%">
          <Typography variant="subtitle1" color='black'>
            you have {balance} ETH
          </Typography>
          <TextField
            fullWidth
            id="standard-password-input"
            label="to"
            variant="standard"
            onChange={(e) => setToAddress(e.target.value)}
          />
          <TextField
            fullWidth
            id="standard-password-input"
            label="balance"
            type="number"
            variant="standard"
            onChange={(e) => setToBalance(e.target.value)}
          />
        </Box>

        <Box width="50%" mt={3}>
          <Button variant="contained" >보내기</Button>
        </Box>

      </Box>
    </>
  );
}