import { useSelector, useDispatch } from 'react-redux'
import { setBalance } from '../../../redux/slice/ethereumSlice';
// import { addHexPrefix, bufferToHex, BN } from 'ethereumjs-util';
import { Mutex } from 'async-mutex';
import HttpProvider from 'ethjs-provider-http';
import EthQuery from 'eth-query';

import { provider } from '../common/config'

import { sendRawTransaction } from '../common/api';
import { stringToBigNumber, bigNumberToEther, safelyExecuteWithTimeout } from '../common/utils';

const ethTx = require('ethereumjs-tx');

export default class TransactionClass {

  constructor() {
    this.httpProvider = new HttpProvider(provider)
    this.ethQuery = new EthQuery(this.httpProvider);
  }

  sendRawTransaction = async () => {

    const txParams = {
      nonce: '0x6', // Replace by nonce for your account on geth node
      gasPrice: '0x09184e72a000',
      gasLimit: '0x30000',
      to: '0xfa3caabc8eefec2b5e2895e5afbf79379e7268a7',
      value: '0x00'
    };
    // Transaction is created
    const tx = new ethTx(txParams);
    
    // console.log(tx)

    // const tx = FeeMarketEIP1559Transaction.fromTxData(txData, { common })
    // const privateKey = Buffer.from(
    //   'e331b6d69882b4cb4ea581d88e0b604039a3de5967688d3dcffdd2270c0fd109',
    //   'hex'
    // )
    // const signedTx = tx.sign(privateKey)

    // const serializedTx = signedTx.serialize()



    // const rawTransaction = bufferToHex(signedTx.serialize());

    // sendRawTransaction(this.ethQuery, rawTransaction)
  }

}