import { BigNumber, utils } from 'ethers';

export const query = (ethQuery, method, args) => {
  return new Promise((resolve, reject) => {
    const cb = (error, result) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(result);
    };

    if (typeof ethQuery[method] === 'function') {
      ethQuery[method](...args, cb);
    } else {
      ethQuery.sendAsync({ method, params: args }, cb);
    }
  });
}

export async function safelyExecuteWithTimeout(operation, logError = false, timeout = 500,) {
  try {
    return await Promise.race([
      operation(),
      new Promise((_, reject) =>
        setTimeout(() => {
          reject(new Error('timeout'));
        }, timeout),
      ),
    ]);
  } catch (error) {
    /* istanbul ignore next */
    if (logError) {
      console.error(error);
    }
    return undefined;
  }
}

export const stringToBigNumber = (str) => {
  return BigNumber.from(str)
}

export const bigNumberToEther = (bigNum) => {
  return utils.formatEther(bigNum);
}

