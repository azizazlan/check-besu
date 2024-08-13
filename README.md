# Check Besu Network

This project is to check if we can deploy a smart contract built using hardhat on my private Hyperledger Besu QBFT network.

## Usage

Clone and compile the smart contract.

```shell
npx hardhat compile
```

then deploy:

```shell
npx hardhat run scripts/deploy.ts --network besu
```
