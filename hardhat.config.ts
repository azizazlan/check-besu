import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    besu: {
      url: "https://snad.ddns.net/besu",
      accounts: [
        "ff77f01595ed1593b8e92545209f6c066a4337d92c9484cf1ee6ba4a911f47ba",
      ],
      gas: 0,
      gasPrice: 0,
    },
    nuc_besu: {
      url: "http://192.168.100.28/besu",
      accounts: [
        "ff77f01595ed1593b8e92545209f6c066a4337d92c9484cf1ee6ba4a911f47ba",
      ],
    },
    hardhat_node : {
      url: "http://127.0.0.1:8545/",
      accounts: [
        "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
      ]
    }
  },
};

export default config;
