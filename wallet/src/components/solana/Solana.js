import React, { useEffect, useState } from 'react';
// Router
import { Routes, Route, Link } from "react-router-dom";
// Mui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


export default function Solana() {

  return (
    <Box bgcolor="black" width='350px' height='600px' display='flex' flexDirection='column' justifyContent='center' >
      <Box
        mt='20px'
        alignItems='center' justifyContent='center'
        direction="row" spacing={2}
      >
        <Link to="/">
          <Button variant='contained' color="warning">Go main</Button>
        </Link>
      </Box>
    </Box>
  );
}
