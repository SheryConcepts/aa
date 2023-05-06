import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.17",

  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    polygonMumbai:{
      url: "    https://rpc-mumbai.maticvigil.com/v1/4b8711bec2f051647b8e8e589b9432238e578eec",
      accounts: [process.env.PRIVATE_KEY!],
    }
  },
};

export default config;
