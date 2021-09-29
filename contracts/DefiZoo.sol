// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

import '@openzeppelin/contracts/token/ERC20/IERC20.sol';

contract DefiZoo {
    IERC20 dai;

    constructor(address daiAddress) {
        dai = IERC20(daiAddress);
    }

    function test(address recipient, uint256 amount) external {
        dai.transfer(recipient, amount);
    }
}
