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

export default function EthereumHome() {
  const loc = useLocation()
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const address = useSelector((state) => state.ethereum.address)
  const balance = useSelector((state) => state.ethereum.balance);
  const polling = useSelector((state) => state.ethereum.polling);
  const scheduler = new AccountSchedulerClass();

  useEffect(() => {
    let mounted = true;

    if (mounted && !polling) {
      console.log("start polling")
      scheduler.poll(1000)
      dispatch(setPolling(true))
    }

    return (() => mounted = false)
  })

  return (
    <>
      <Box
        width="350px" height="200px" py={1}
        display='flex' justifyContent={"center"} flexDirection={"column"} alignItems="center"
      >
        <Box >
          <Typography variant="subtitle2" color='black'>
            {address}
          </Typography>
          <Typography variant="h4" color='black'>
            {balance} ETH
          </Typography>
        </Box>

        <Box width="50%" mt={3}>  
          <Button variant="contained" onClick={() => navigate("/ethereum/transfer")} >Transfer</Button>
        </Box>

      </Box>
    </>
  );
}