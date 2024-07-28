import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    besu: {
      url: "http://192.168.100.28/besu",
      accounts: [
        "ff77f01595ed1593b8e92545209f6c066a4337d92c9484cf1ee6ba4a911f47ba",
      ],
    },
  },
};

export default config;
