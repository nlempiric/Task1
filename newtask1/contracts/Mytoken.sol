// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.16 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Mytoken is ERC20,Ownable
{
    constructor() ERC20("MyToken", "MTK") {
       
    }
    function mint(address to,uint256 amount) public onlyOwner
    {
        _mint(to,amount);
    
    }
  
}

