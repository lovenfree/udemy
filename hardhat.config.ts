import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

// Go to https://infura.io, sign up, create a new API key
// in its dashboard, and replace "KEY" with it
const QUICKNODE_API_KEY = "5b8410179aa85cc3c347c11e37658270dbb2eded";
const QUICKNODE_API_TOKEN = "5b8410179aa85cc3c347c11e37658270dbb2eded";

// Replace this private key with your Sepolia account private key
// To export your private key from Coinbase Wallet, go to
// Settings > Developer Settings > Show private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const SEPOLIA_PRIVATE_KEY =
  "e0f5878e5f161175bdcfce4e2dccca9f83c5d8585c22169ea1dce98cd016e519";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    hardhat: {},
    myQuickNode: {
      // sepolia: {
      url: `https://responsive-broken-meme.ethereum-sepolia.quiknode.pro/${QUICKNODE_API_TOKEN}`,
      accounts: [SEPOLIA_PRIVATE_KEY],
    },
  },
};

export default config;
