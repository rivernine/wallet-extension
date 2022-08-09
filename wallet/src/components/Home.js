/*global chrome*/
import React, { useEffect, useState } from 'react';
// Router
import { Routes, Route, Link } from "react-router-dom";
// Mui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import logo from '../logo.svg';

export default function Home() {

  console.log("Home")
  return (
    <Box
      border={0.1} borderColor={"gray"}
      width="350px" height="550px"
      display={"flex"} flexDirection={"column"}
      justifyContent={"center"} alignItems={"center"}      
    >
      <Typography color='black' fontSize={"26px"} fontWeight={"800"}>
        Select network
      </Typography>
      <Stack
        mt='20px'
        width="250px"
        spacing={1}
      >
        <Button
          component={Link} to="/ethereum/mnemonic"
          variant='contained' color="primary"
        >
          <Typography fontWeight={"600"}>
            Ethereum
          </Typography>
        </Button>
        <Button
          component={Link} to="/solana"
          variant='contained' color="secondary"
        >
          <Typography fontWeight={"600"}>
            Solana
          </Typography>
        </Button>
      </Stack>
    </Box>
  );
}