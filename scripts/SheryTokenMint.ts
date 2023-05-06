import { ethers } from "hardhat";
import { expect } from "chai";

async function mint() {
  const [owner, add1] = await ethers.getSigners();
  const C = await ethers.getContractFactory("SheryToken");
  const sheryToken = await C.deploy("SheryToken", "ST");
  await sheryToken.deployed();

  return { sheryToken, owner, add1 };
}

mint()
  .then(async ({ sheryToken, add1 }) => {
    await sheryToken.mint(add1.address, ethers.utils.parseEther("100"));
    console.log(add1)
    expect(await sheryToken.balanceOf(add1.address)).to.equal(
      ethers.utils.parseEther("100")
    );
    console.log("minted")
  })
  .catch((e) => {
    console.log(e);
    process.exitCode = 1;
  });
