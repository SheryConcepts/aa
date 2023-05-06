import { ethers } from "hardhat";
import { expect } from "chai";

async function deployFixture() {
  const [owner, add1, add2] = await ethers.getSigners();
  const C = await ethers.getContractFactory("SheryToken");
  const sheryToken = await C.deploy("SheryToken", "ST");
  await sheryToken.deployed();

  return { sheryToken, owner, add1, add2 };
}

describe("SheryToken", async () => {
  it("Should have name and symbol", async () => {
    const { sheryToken } = await deployFixture();
    expect(await sheryToken.name()).to.equal("SheryToken");
    expect(await sheryToken.symbol()).to.equal("ST");
  });

  it("Should have total supply", async () => {
    const { sheryToken } = await deployFixture();
    expect(await sheryToken.totalSupply()).to.equal(
      ethers.utils.parseEther("200")
    );
  });

  it("Should be able to mint", async () => {
    const { sheryToken , add1 } = await deployFixture();
    await sheryToken.mint(add1.address, ethers.utils.parseEther("100")); 
    expect(await sheryToken.balanceOf(add1.address)).to.equal(ethers.utils.parseEther("100"));
  });
});
