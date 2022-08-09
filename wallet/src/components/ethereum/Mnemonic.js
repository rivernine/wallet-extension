import React, { useEffect, useState } from 'react';
// Router
import { Routes, Route, Link } from "react-router-dom";
// Ethers
import { ethers } from "ethers";
// Mui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export default function Mnemonic() {
  let idx = 0;
  // const [walletMnemonic, setWalletMnemonic] = useState(null);
  const [mnemonicPhrase, setMnemonicPhrase] = useState(null);

  const createMnemonic = async () => {
    const newMnemonic = await ethers.Wallet.createRandom().mnemonic
    // const walletMnemonic = ethers.Wallet.fromMnemonic(newMnemonic.phrase)
    // setWalletMnemonic(walletMnemonic)
    setMnemonicPhrase(newMnemonic.phrase)
  }

  return (<>
    <Box
      py={3}
      alignItems='center' justifyContent='center'
    >
      {
        mnemonicPhrase !== null ?
          <>
            {
              mnemonicPhrase.split(" ").map((word, i) => {
                return (
                  <Grid key={idx++} container spacing={1}
                    my={"1px"}
                    alignItems='center' justifyContent='center'
                  >
                    <Grid item xs={1}>
                      <Typography variant="subtitle2" color='gray'>
                        {i + 1}
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography variant="subtitle2" color='gray'>
                        {word}
                      </Typography>

                    </Grid>
                  </Grid>
                );
              })
            }
            <Box mt={2}>
              <Button
                component={Link} to={"/ethereum/mnemonic/save"}
                state={{ phrase: mnemonicPhrase}}
                variant='contained' color="primary"
              >
                next
              </Button>
            </Box>
          </>
          :
          <Button
            variant='contained' color="primary"
            onClick={() => createMnemonic()}
          >
            generate
          </Button>
      }

    </Box>
  </>

  );
}