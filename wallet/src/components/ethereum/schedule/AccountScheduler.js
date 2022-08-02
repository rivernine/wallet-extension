import React, { useEffect, useState } from 'react';
import HttpProvider from 'ethjs-provider-http';
import EthQuery from 'eth-query';

import { provider } from '../common/config'

import { getAddressBalance } from '../common/api';

export default function AccountScheduler() {

  let timer = null;

  const httpProvider = new HttpProvider(provider)
  const ethQuery = new EthQuery(httpProvider);

  const poll = async (interval) => {
    timer && clearTimeout(timer)
    refresh();
    timer = setTimeout(() => {
      poll(interval);
    }, interval)
  }

  const refresh = async () => {
    const balance = await getAddressBalance(ethQuery, "0xf97e180c050e5Ab072211Ad2C213Eb5AEE4DF134");
    console.log(balance)
  };
  
  return (
    poll(10000)
  );
}