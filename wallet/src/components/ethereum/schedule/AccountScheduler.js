import { useSelector, useDispatch } from 'react-redux'
import { setBalance } from '../../../redux/slice/ethereumSlice';
import HttpProvider from 'ethjs-provider-http';
import EthQuery from 'eth-query';

import { provider } from '../common/config'

import { getAddressBalance } from '../common/api';
import { stringToBigNumber, bigNumberToEther, safelyExecuteWithTimeout } from '../common/utils';

export default function AccountScheduler() {
  const test = useSelector((state) => state.ethereum.balance);
  const dispatch = useDispatch();

  const httpProvider = new HttpProvider(provider)
  const ethQuery = new EthQuery(httpProvider);

  // var handle = null;

  
  const poll = async (interval) => {
    setInterval(() => {
      console.log('interval')
    }, interval)

    // clearTimeout(handle);
    // await refresh();
    // console.log('start')
    // setTimeout(() => {
    //   console.log('inSetTimeout')
    // }, interval)
    // console.log('end')
  }

  const refresh = async () => {
    await safelyExecuteWithTimeout(async () => {
      const balance = await getAddressBalance(ethQuery, "0xf97e180c050e5Ab072211Ad2C213Eb5AEE4DF134");
      dispatch(setBalance(bigNumberToEther(stringToBigNumber(balance))))
    });
  };
  poll(5000)

  return (
    // poll(5000)
    null
  );
}