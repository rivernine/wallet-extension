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

  const [walletMnemonic, setWalletMnemonic] = useState(null);

  const createMnemonic = async () => {
    const newMnemonic = await ethers.Wallet.createRandom().mnemonic
    const walletMnemonic = ethers.Wallet.fromMnemonic(newMnemonic.phrase)
    setWalletMnemonic(walletMnemonic)
  }

  return (<>
    <Typography variant="h3" color='gray'>Mnemonic</Typography>
    <Box
      mt='20px'
      alignItems='center' justifyContent='center'
      direction="row" spacing={2}
    >
      {
        walletMnemonic !== null ?
          <>
            <Typography variant="subtitle2" color='gray'>{walletMnemonic.mnemonic.phrase}</Typography>
            <Typography variant="subtitle2" color='gray'>{walletMnemonic.mnemonic.path}</Typography>
            <Typography variant="subtitle2" color='gray'>{walletMnemonic.address}</Typography>
            <Typography variant="subtitle2" color='gray'>{walletMnemonic.privateKey}</Typography>
          </> :
          null
      }
      <Button variant='contained' color="primary" onClick={() => createMnemonic()}>Create mnemonic</Button>
      <Link to="/ethereum/keyring">
        <Button variant='contained' color="primary">Keyring</Button>
      </Link>
    </Box>
  </>

  );
}