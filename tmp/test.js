// const passworder = require('browser-passworder')

// function decodeMnemonic(mnemonic) {
//   if (typeof mnemonic === 'string') {
//     return mnemonic
//   } else {
//     return Buffer.from(mnemonic).toString('utf8')
//   }
// }

async function main() {
  // const vault = {
  //   "data": "PrkTxPvxnQMFtXh6HDPYTuSH/lTpHdT+g/7AUy5DLdtbJ6Rvg674p29BhwVCOant9bIkdsQCUJ2vJEq4J1NWsxaQZrPu97KVGHerEtRHgesXsx9sS190pMLZLHB7tx3/7F3vwCE5ztRgrVxkYti8qRQ+zMiU1CJXZNsakoS07BzysEyNbSVI4BLh0s72Z/ujKQmWGh126gLhV6pK79mXiL170Xt5rSct+a/LheNoeUrbgyIi+OicHpiqRs/28uKBWRIDmODbhZEM7Y/87BcJgzX91brBtuJCUQzM1AFu8VLdyO++WhCdA0e0pzgZbKjwGmTlvLE+Pj79VHYgOhT1YFwVsxbaui9MipiWjhGLqEQKECg9RNy8QyzXaKZcagSaZtXUal4RpuEqMaz31KqmCB7BRdxe4Z2GOYwjQpB3H5R6Ozr4t/9vI5UzrIYzExgFhJFw0at3+XZUMQqAsWng7owhnRhdFi15orBb2JOjP2IbmPwPgLWaEFVy5LE6S6B2Gsxjh4gx2hLayfL4GJXvAmlquNX27PTMCGEM7mXmG/gVNewxcukqVfCMaX7HpNKehsaHBjSmSWUlu1WMUo6XBvx1i1JtJAbmnn/FrVCPia1oNEtgU3ahH4J06mrlJ27YeKWkoJQbOkdPq3r7YfYxMTovMcGrOnqPfF1VrZvJdz2Zba3wuGiKvFq0sboPrWEaW1xl3rNuLcxmGWLJbruecRbVSc5xzju+NyhPDwh6fCa8dQuujkyIpssNKHP75VChKYamWDxzearPkOH+idLJpg2OJgPO5smkc5WLF+XBuUA/sKLIQAr78U6AUtFLD81O5rD3V1xzhKtpuATG9vYVRP8L0cw0XUC7V6Fff+qR+4jOGJ9rp3y5TXIr7b42mIKum3QhpLnbKcFy8Pb61V0iDzRqFvGkraspVzRP9h+mddP+T6P9dZftzFPZpIlb8n7ou9jwqklkQsn+oU4mS4ua34mwbsJ6yPifWNw3opv+cKYTuCIz9nYeXTuyRxJqvfSX2ArgxGmOfrUaiw4vm/uPNDAGVSY36XcJVEqEyzPwJZnSTGW6XlFGPcSO5mipzcQQA6j/wEpKN1doJuBD/RlVWKtOd8XgH5Fc06GVhZFokotHjqbbEbf+glXJ7MdyGV6Lz6LNVCa50X9RnznfHKgHNaEkWaaFo9Y0IMuCpfzp09b2ZO7CMk8HVyAe3cCvl8AXYDkd3ArFTISfRQtH+XoR4EPb9muXJUIWGBS95AoUDm8So6irjTktOEVk7mdA6Q7Zh96uoaMoRuqooJoNrHs=",
  //   "iv": "otJc0kHeQPT8GBwVMupaqQ==",
  //   "salt": "v39wNzbizbIVxPrSa8AbUnzr0zPCQoWwEzt9jiLKa3w="
  // }
  console.log(global)

  // var secrets = { coolStuff: 'all', ssn: 'livin large' }
  // var password = 'hunter55'

  // passworder.encrypt(password, secrets)
  //   .then(function (blob) {
  //     console.log(blob)
  //     // return passworder.decrypt(password, blob)
  //   })
  //   // .then(function (result) {
  //   //   assert.deepEqual(result, secrets)
  //   // })
  // console.log(passworder.decrypt('1234', JSON.stringify(vault)))

  // passworder.decrypt('1234', vault)
  //   .then((keyringsWithEncodedMnemonic) => {
  //     const keyringsWithDecodedMnemonic = keyringsWithEncodedMnemonic.map(keyring => {
  //       if ('mnemonic' in keyring.data) {
  //         return Object.assign(
  //           {},
  //           keyring,
  //           {
  //             data: Object.assign(
  //               {},
  //               keyring.data,
  //               { mnemonic: decodeMnemonic(keyring.data.mnemonic) }
  //             )
  //           }
  //         )
  //       } else {
  //         return keyring
  //       }
  //     });
  //     const serializedKeyrings = JSON.stringify(keyringsWithDecodedMnemonic)
  //     console.log('Decrypted!', serializedKeyrings)
  //     this.setState({ decrypted: serializedKeyrings })
  //   })
  //   .catch((reason) => {
  //     console.error(reason)
  //     this.setState({ error: 'Problem decoding vault.' })
  //   })
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });