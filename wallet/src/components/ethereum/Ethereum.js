import React, { useEffect, useState } from 'react';
// Redux
import { useSelector, useDispatch } from 'react-redux'
import { setPolling } from '../../redux/slice/ethereumSlice';
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

import AccountSchedulerClass from './schedule/AccountSchedulerClass';

export default function Ethereum() {
  // const dispatch = useDispatch();

  // const balance = useSelector((state) => state.ethereum.balance);
  // const polling = useSelector((state) => state.ethereum.polling);
  // const scheduler = new AccountSchedulerClass();

  // useEffect(() => {
  //   let mounted = true;

  //   if (mounted && !polling) {
  //     console.log("start polling")
  //     scheduler.poll(1000)
  //     dispatch(setPolling(true))
  //   }

  //   return (() => mounted = false)
  // })

  // useEffect(() => {
  //   console.log('useEffect')
  //   let mounted = true;

  //   console.log("global: ", balance)
  // }, [balance])

  // console.log(balance)
  // console.log(scheduler)
  return (
    <>
      <Box
        width="350px" height="550px"
      // border={0.1} borderColor={"gray"}
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