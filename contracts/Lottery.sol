// SPDX-License-Identifier: UNKNOWN 
pragma solidity ^0.8.9;

contract Lottery {
    address public manager;

    constructor() public{
        manager = msg.sender;
    }

}