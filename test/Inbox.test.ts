import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
// import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Inbox", function () {
  async function deployOneYearLockFixture() {
    const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
    const ONE_GWEI = 1_000_000_000;

    const lockedAmount = ONE_GWEI;
    const unlockTime = (await time.latest()) + ONE_YEAR_IN_SECS;

    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const Inbox = await ethers.getContractFactory("Inbox");
    const inbox = await Inbox.deploy("hello");

    return { inbox, owner, otherAccount };
  }

  it("deploy a contract", async () => {
    const { inbox, owner, otherAccount } = await loadFixture(
      deployOneYearLockFixture
    );
    console.log(await inbox.getAddress());
    expect(await inbox.getAddress()).ok;
  });
  it("Should Get Hello message", async () => {
    const { inbox } = await loadFixture(deployOneYearLockFixture);

    expect(await inbox.getMessage()).to.equal("hello");
  });

  it("Should set message with spanish - Hola! Mundo!", async () => {
    const { inbox } = await loadFixture(deployOneYearLockFixture);
    const setMessageTx = await inbox.setMessage("Hola, mundo!");
    console.log(await setMessageTx.getTransaction());
    expect(await inbox.getMessage()).to.equal("Hola, mundo!");
  });
});
