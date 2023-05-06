import { ethers } from "hardhat";

async function deploy() {
  const C = await ethers.getContractFactory("SheryToken");
  const sheryToken = await C.deploy("SheryToken", "ST");
  await sheryToken.deployed();

  return sheryToken;
}

deploy()
  .then(async (v) => {
    const chainId = await v.signer.getChainId();
    console.log(v.address);
    console.log(v)
    console.log(chainId);
    console.log("deployed");
  })
  .catch((e) => {
    console.log(e);
    process.exitCode = 1;
  });
