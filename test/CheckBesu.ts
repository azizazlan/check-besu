import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("CheckBesu", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployCheckBesu() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const CheckBesu = await ethers.getContractFactory("CheckBesu");

    // The public key 0x12f033914E850eE4Ff76c6c40E09b18f2A0B9edc is copied from Metamask
    // The private key ff77f01595ed1593b8e92545209f6c066a4337d92c9484cf1ee6ba4a911f47ba
    // The account was abtractly chosen
    const besuContract = await CheckBesu.deploy(
      "0x12f033914E850eE4Ff76c6c40E09b18f2A0B9edc"
    );

    return { besuContract, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should equal to the smart contract's name", async function () {
      const { besuContract } = await loadFixture(deployCheckBesu);
      expect(await besuContract.name()).equals("CheckBesu");
    });
  });
});
