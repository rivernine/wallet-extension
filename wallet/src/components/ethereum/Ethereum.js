import React, { useEffect, useState } from 'react';

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


export default function Ethereum() {
  // const ethQuery = new EthQuery(provider);
  // const tmp = async () => {
  //   const balance = await query(ethQuery, 'getBalance', ["0xf97e180c050e5Ab072211Ad2C213Eb5AEE4DF134"]);
  //   console.log(balance)
  //   console.log(BigNumber.from(balance.toString()))
  //   console.log(utils.formatEther(BigNumber.from(balance.toString())))
  // }

  // console.log(provider)
  AccountScheduler();
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