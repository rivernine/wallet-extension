/*global chrome*/
import React, { useEffect, useState } from 'react';
// Router
import { Routes, Route, Link } from "react-router-dom";
// Mui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import Grid from '@mui/material/Grid';

import HomeIcon from '@mui/icons-material/Home';

export default function Header() {
  return (
    <Box>
      <Grid container spacing={1}>
        <Grid item xs>
          <IconButton
            component={Link} to="/"
            size="medium" aria-label="homeicon" color="default"
          >
            <HomeIcon />
          </IconButton>
        </Grid>
        <Grid
          item xs={7}
          alignItems="center" justifyContent={"center"} display="flex"
        >
          <Typography color='white' fontSize={"20px"} fontWeight={"600"}>
            Multi Asset
          </Typography>
        </Grid>
        <Grid item xs>

        </Grid>
      </Grid>
    </Box>
  );
}