import React, { useEffect, useState } from 'react';
// Redux
import { useSelector, useDispatch } from 'react-redux'
// Router
import { Routes, Route, Link, Outlet } from "react-router-dom";
// Ethereum
import HttpProvider from 'ethjs-provider-http';
import EthQuery from 'eth-query';
// Mui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Mnemonic from './Mnemonic';
import AccountScheduler from './schedule/AccountScheduler';

import AccountSchedulerClass from './schedule/AccountSchedulerClass';

export default function Ethereum() {
  const balance = useSelector((state) => state.ethereum.balance);
  const scheduler = new AccountSchedulerClass();

  useEffect(() => {
    console.log('useEffect')
    let interval;
    let mounted = true;

    interval = setInterval(async () => {
      const result = await scheduler.refresh()
      console.log(result)
    }, 2000);

    return () => clearInterval(interval);
  }, [])

  console.log(balance)
  return (
    <>
      <Box bgcolor="black" width='350px' height='600px'>
        <Typography variant="h3" color='gray'>Ethereum</Typography>
        <Box height='500px' display='flex' flexDirection='column' justifyContent='center' >
          <Outlet />
        </Box>
        <Box
          alignItems='center' justifyContent='center'
          direction="row" spacing={2}
        >
          
          <Link to="/ethereum/signIn">
            <Button variant='contained' color="primary">Signin</Button>
          </Link>
          <Link to="/ethereum/signUp">
            <Button variant='contained' color="primary">Signup</Button>
          </Link>
          <Link to="/">
            <Button variant='contained' color="warning">Go main</Button>
          </Link>
          {/* <Button variant='contained' color="warning" onClick={() => dispatch(setProvider(tmpProvider))}>test</Button> */}
        </Box>
      </Box>
    </>
  );
}