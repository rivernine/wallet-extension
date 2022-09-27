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

  const [ethLocalData, setEthLocalData] = useState(null)

  useEffect(() => {
    let mounted = true;
    
    // Dev
    if (mounted) {
      setEthLocalData("test")
    }

    // Prod
    // chrome.storage.local.get('data', function (result) {
    //   const vault = result.data.KeyringController.vault
    //   if (mounted) {
    //     setEthLocalData(vault);
    //   }
    // })
    return (() => mounted = false);
  })

  console.log("Home")
  return (
    <Box
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
          component={Link}
          to={
            ethLocalData !== null
              ?
              "/ethereum/mnemonic/decrypt"
              :
              "/ethereum/mnemonic/generate"
          }
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