import { useSelector, useDispatch } from 'react-redux'
import { setBalance } from '../../../redux/slice/ethereumSlice';
import { Mutex } from 'async-mutex';
import HttpProvider from 'ethjs-provider-http';
import EthQuery from 'eth-query';

import { provider } from '../common/config'

import { getAddressBalance } from '../common/api';
import { stringToBigNumber, bigNumberToEther, safelyExecuteWithTimeout } from '../common/utils';

export default class AccountSchedulerClass {

  dispatch = useDispatch();
  address = useSelector((state) => state.ethereum.address);
  mutex = new Mutex();

  constructor() {
    // this.test = useSelector((state) => state.ethereum.balance);
    // this.dispatch = useDispatch();
    this.httpProvider = new HttpProvider(provider)
    this.ethQuery = new EthQuery(this.httpProvider);
  }

  poll = async (interval) => {
    const releaseLock = await this.mutex.acquire();
    // interval && this.configure({ interval })

    this.handle && clearTimeout(this.handle)

    const balance = await this.getBalance();
    // console.log(bigNumberToEther(stringToBigNumber(balance)))
    this.dispatch(setBalance(bigNumberToEther(stringToBigNumber(balance))))
    this.handle = setInterval(() => {
      releaseLock();
      this.poll(interval)
      // this.refresh()
    }, interval)
  }

  getBalance = async () => {
    const balance = await getAddressBalance(this.ethQuery, this.address);
    return balance;
  };
}