// SPDX-License-Identifier : UNLICENSED ;
//contract address =  0xEf90f6f0b32AeD0C13971Fa01f2014C9ECdd7096
pragma solidity >=0.8.0;

contract CrowdFund{

    uint public numberOfInvestors;// number of investors
    mapping(address=>bool) public isInvestor; // to check for investor

    function sendEther()public payable{
        if(!isInvestor[msg.sender]) 
        {
            isInvestor[msg.sender]=true;
            numberOfInvestors++;
        }
        (bool sent,) = payable(address(this)).call{value:msg.value}("");
        require(sent,"transaction failed cannot send ether");
    }

    function getBalance()public view returns(uint){
        return address(this).balance;
    }

    receive()external payable{}
    fallback()external payable{}

}

