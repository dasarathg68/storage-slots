const hre = require("hardhat");
const { keccak256, zeroPadValue } = hre.ethers;

const addr = "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9";

async function lookup() {
  //eth_getStorageAt
  const key = zeroPadValue(hre.ethers.toBeHex(24), 32);
  const baseSlot = zeroPadValue(hre.ethers.toBeHex(0x3), 32).slice(2); // or just 2

  console.log({ key, baseSlot });
  const slot = keccak256(key + baseSlot);
  const value = await hre.ethers.provider.getStorage(addr, slot);
  console.log(parseInt(value));
}
lookup();
