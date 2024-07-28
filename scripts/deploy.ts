import { ethers } from "hardhat";

async function main() {
  const checkBesu = await ethers.deployContract("CheckBesu");
  await checkBesu.waitForDeployment();
  console.log(`Deployed to ${checkBesu.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
