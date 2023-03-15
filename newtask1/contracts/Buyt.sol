// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.16 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "../contracts/Mytoken.sol";


contract Buyt
{
    Mytoken mt;
    uint public orderId=0;
    address conadd;
    uint256 bal;
    bool[] data; 
    uint[] storelenght;


    struct Order{
        address to;
        uint256 amount;
        uint time;
        bool isclaimed;                                                                                                                                                                            
    }
    mapping(uint=>Order) public orderdata;

    event Transfer(address indexed from, address indexed to, uint256 amount,uint orderId);
    event claimeve(uint orderId,uint amount,uint256 time);
    

    constructor(address _add)                                       
    {
        mt=Mytoken(_add);
        conadd=msg.sender;
    }

   
    function senderAddress() public view returns(address)
    {
        return msg.sender;
    }
    function checkBalance() public returns(uint256)
    {
        bal=mt.balanceOf(address(this));
        return bal;
    }
    // function od() public view returns(uint[] memory)
    // {
    //     return orderdata;
    // }
    function checktokenbalance() public view returns(uint256)
    {
        return mt.balanceOf(msg.sender);
    }
    
    function unclaimed()public view returns(bool[] memory){
        // delete data;
        // for (uint i=1;i<=storelenght.length;i++)
        // {
        //     if(orderdata[i].isclaimed==false)
        //     {
        //         data.push(i); 
        //     }
        // } 
        // return data;
        return data;
        
    }
    function transfer() public payable    
    {
        // mt.transfer(addr, amount);
        require(msg.value>0,"send ether");
        require(((msg.value/1  ether)*100)+checktokenbalance()<=5000,"you can not purchase more than 5000 tokens");
        require((msg.value/1 ether)*100<=checkBalance(),"amount shold be less than balance");
        orderId+=1;
        orderdata[orderId]=Order(msg.sender,(msg.value/1 ether)*100,block.timestamp+60,false);
        // storelenght.push(orderId);
        // data[orderId]=orderdata[orderId].isclaimed;
        data.push(orderdata[orderId].isclaimed);
        emit Transfer(conadd,msg.sender,orderdata[orderId].amount,orderId);

        
    }
    function claim(uint orderId) public
    {   require(orderdata[orderId].time<block.timestamp,"time shold be more than 1 minute");
        require(orderdata[orderId].isclaimed==false,"already claimed");
 
        mt.transfer(orderdata[orderId].to,orderdata[orderId].amount);
        orderdata[orderId].isclaimed=true;
        // data[orderId]=true;
        data[orderId-1]=true;
        emit claimeve(orderId,orderdata[orderId].amount,block.timestamp);
    }
    receive() external payable {
        require(msg.value>=1 ether);
    }   
    fallback() external payable{
        revert();
    }
}