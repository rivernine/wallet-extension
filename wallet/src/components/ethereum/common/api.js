import { query } from './utils';

export const getAddressBalance = (ethQuery, address) => {
  console.log("### getAddressBalance ###")
  return query(ethQuery, 'getBalance', [address]);
}