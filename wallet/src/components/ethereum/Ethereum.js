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
import Divider from '@mui/material/Divider';

import Mnemonic from './Mnemonic';
import AccountScheduler from './schedule/AccountScheduler';

import AccountSchedulerClass from './schedule/AccountSchedulerClass';

export default function Ethereum() {
  const balance = useSelector((state) => state.ethereum.balance);
  const scheduler = new AccountSchedulerClass();

  // useEffect(() => {
  //   console.log('useEffect')
  //   let interval;
  //   let mounted = true;

  //   interval = setInterval(async () => {
  //     const result = await scheduler.refresh()
  //     console.log(result)
  //   }, 2000);

  //   return () => clearInterval(interval);
  // }, [])

  console.log(balance)
  return (
    <>
      <Box
        width="350px" height="550px"
        border={0.1} borderColor={"gray"}
      // display={"flex"} flexDirection={"column"}
      // justifyContent={"center"} alignItems={"center"}
      >
        <Box
          height="70px"
          display={"flex"} flexDirection={"column"}
          justifyContent={"center"} alignItems={"center"}
        >
          <Typography color='black' fontSize={"26px"} fontWeight={"600"}>
            Ethereum
          </Typography>
        </Box>
        <Divider />
        <Box
        // height='500px' display='flex' flexDirection='column' justifyContent='center' 
        >
          <Outlet />
        </Box>
        {/* <Divider /> */}
        {/* <Box
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
          <Button variant='contained' color="warning" onClick={() => dispatch(setProvider(tmpProvider))}>test</Button>
        </Box> */}
      </Box>
    </>
  );
}