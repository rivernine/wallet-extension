import { useSelector, useDispatch } from 'react-redux'
import { setBalance } from '../../../redux/slice/ethereumSlice';
import HttpProvider from 'ethjs-provider-http';
import EthQuery from 'eth-query';

import { provider } from '../common/config'

import { getAddressBalance } from '../common/api';
import { stringToBigNumber, bigNumberToEther, safelyExecuteWithTimeout } from '../common/utils';

export default class AccountSchedulerClass {

  constructor() {
    // this.test = useSelector((state) => state.ethereum.balance);
    // this.dispatch = useDispatch();
    this.httpProvider = new HttpProvider(provider)
    this.ethQuery = new EthQuery(this.httpProvider);
  }

  poll = async (interval) => {
    setInterval(() => {
      console.log('interval')
    }, interval)
  }

  refresh = async () => {
    const balance = await getAddressBalance(this.ethQuery, "0xf97e180c050e5Ab072211Ad2C213Eb5AEE4DF134");
    return balance;
  };
}