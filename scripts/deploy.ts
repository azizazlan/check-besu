import { ethers } from "hardhat";

async function main() {
  const checkBesu = await ethers.deployContract("CheckBesu", [
    "0xd2C94252d9a182FBEd2b0596F07778470F2D2833",
  ]);
  await checkBesu.waitForDeployment();
  console.log(`Deployed to ${checkBesu.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
