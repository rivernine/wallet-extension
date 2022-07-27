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

  const [url, setUrl] = useState('');
  // const [responseFromContent, setResponseFromContent] = useState('');

  // const sendTestMessage = () => {
  //   const message = {
  //     from: "React",
  //     message: "Hello from React"
  //   };
  //   const queryInfo = {
  //     active: true,
  //     currentWindow: true
  //   };

  //   chrome.tabs && chrome.tabs.query(queryInfo, tabs => {
  //     const currentTabId = tabs[0].id;
  //     // console.log('currentTabId', currentTabId)
  //     chrome.tabs.sendMessage(
  //       currentTabId,
  //       message,
  //       (response) => {
  //         setResponseFromContent(response);
  //       }
  //     )
  //   })

  // }

  // const sendRemoveMessage = () => {
  //   const message = {
  //     from: "React",
  //     message: "delete logo"
  //   };
  //   const queryInfo = {
  //     active: true,
  //     currentWindow: true
  //   };

  //   chrome.tabs && chrome.tabs.query(queryInfo, tabs => {
  //     const currentTabId = tabs[0].id;
  //     chrome.tabs.sendMessage(
  //       currentTabId,
  //       message,
  //       (response) => {
  //         setResponseFromContent(response);
  //       }
  //     )
  //   })
  // }

  useEffect(() => {
    const queryInfo = { active: true, lastFocusedWindow: true };

    chrome.tabs && chrome.tabs.query(queryInfo, tabs => {
      const url = tabs[0].url;
      setUrl(url);
    });
  }, []);

  console.log("Home")
  return (
    <Box bgcolor="black" width='350px' height='600px' display='flex' flexDirection='column' justifyContent='center' >
      <Typography variant="h3" color='gray'>Multi-asset</Typography>
      <Stack
        mt='20px'
        alignItems='center' justifyContent='center'
        direction="row" spacing={2}
      >
        <Link to="/ethereum">
          <Button variant='contained' color="primary">Ethereum</Button>
        </Link>
        <Link to="/solana">
          <Button variant='contained' color="secondary">Solana</Button>
        </Link>
      </Stack>
    </Box>
  );
}