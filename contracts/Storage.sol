// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Storage {
    uint256 public x=95; //0x0
    uint256 public y=57; //0x1

    mapping( uint => uint) public testing; //0x2
    mapping( uint => uint) public testing2; //0x3

    constructor(){
        //keccak256(21+0x02)
        testing[21]=77;
        //keccak256(24+0x02)
        testing2[24]=78;
    }
  
}
