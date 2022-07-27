import React, { useEffect, useState } from 'react';
// Router
import { Routes, Route, Link, Outlet } from "react-router-dom";

// Mui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Mnemonic from './Mnemonic';

export default function Ethereum() {

  console.log("Ethereum")
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
          <Link to="/ethereum/mnemonic">
            <Button variant='contained' color="primary">Mnemonic</Button>
          </Link>
          <Link to="/">
            <Button variant='contained' color="warning">Go main</Button>
          </Link>
        </Box>
      </Box>
    </>
  );
}