// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const {ethers} = require("ethers");

async function main() {
  const FundContractFactory = await hre.ethers.getContractFactory("CrowdFunding");
  const FundContract = await FundContractFactory.deploy(ethers.utils.parseEther("1"));
  await FundContract.deployed();
  console.log("contract address is ",FundContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
