import React, { useEffect, useState } from 'react';
// Router
import { Routes, Route, Link } from "react-router-dom";
// Ethers
import { ethers } from "ethers";
// Mui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


export default function Mnemonic() {

  const [mnemonic, setMnemonic] = useState('');

  const createMnemonic = async () => {
    const newMnemonic = await ethers.Wallet.createRandom().mnemonic
    setMnemonic(newMnemonic)
  }

  return (<>
    <Typography variant="h3" color='gray'>Mnemonic</Typography>
    <Box
      mt='20px'
      alignItems='center' justifyContent='center'
      direction="row" spacing={2}
    >
      <Typography variant="h6" color='gray'>{mnemonic.phrase}</Typography>
      <Typography variant="h6" color='gray'>{mnemonic.path}</Typography>
      <Button variant='contained' color="primary" onClick={() => createMnemonic()}>Create mnemonic</Button>
    </Box>
  </>

  );
}