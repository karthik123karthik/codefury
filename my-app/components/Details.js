import React, { useEffect, useState } from 'react';
import { BigNumber,utils} from 'ethers';
import { useContract, useSigner } from 'wagmi'
import {CONTRACT_ADDRESS,CONTRACT_ABI} from "../constants";

export default function Details() {
    const { data: signer,} = useSigner();
    const [contributors,setContributors] = useState(BigNumber.from(0));
    const [balance,setBalance] = useState(BigNumber.from(0));
    const contract = useContract({
        addressOrName: CONTRACT_ADDRESS,
        contractInterface: CONTRACT_ABI,
        signerOrProvider: signer,
      }); 
      
        
      
      async function loadPage(){
        await getNumberOfContributors();
        await getBalance();
        return;
      }

    async function getNumberOfContributors(){
        const number =  await contract.numberOfInvestors();
         setContributors(number);         
        return;
    }

    async function getBalance(){
        const Bal = await contract.getBalance();
        setBalance(utils.formatEther(Bal));
        return;
    }

    async function addFund(){
        const tx = await contract.sendEther({value:utils.parseEther("0.001")});
        await tx.wait();
        await getBalance();
        await getNumberOfContributors();
        return;
    }

  return (
     <div className='display-section bg-red-200 flex flex-col justify-around p-4 md:flex-row w-[80vw] text-black h-[300px] border mx-auto text-2xl'>
        <div  className='flex flex-col justify-center align-center p-2 numberofcontributors border w-[30%] h-[100%] bg-gray-100'>
            <h1 className='text-center mb-5'>Count of Contibutors</h1>
            <div className='w-[100%] text-center'>{ contributors.toString()}</div> 
            <button className='button rounded bg-red-100 p-2 mt-3 text-xl font-bold' onClick={addFund}>FUND US</button>
        </div>
        <div  className='flex flex-col justify-center align-center border w-[30%] h-[100%] bg-gray-100'>
            <h1 className='text-center mb-5'>Funds Available</h1>
            <div className='w-[100%] text-center'>{ balance.toString()}</div>
            <button className='button rounded bg-red-100 p-2 mt-3 text-xl font-bold' onClick={getBalance}>call</button>
        </div>          
     </div>
  )
}
