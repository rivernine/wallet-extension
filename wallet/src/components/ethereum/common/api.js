import { query } from './utils';

export const getAddressBalance = (ethQuery, address) => {
  console.log("### getAddressBalance ###")
  return query(ethQuery, 'getBalance', [address]);
}

export const sendRawTransaction = (ethQuery, rawTransaction) => {
  console.log("### getAddressBalance ###")
  return query(ethQuery, 'sendRawTransaction', [rawTransaction]);
}