import React, { useState,useEffect } from 'react';
import {utils} from "ethers";
import {useSigner,useContract} from "wagmi";
import { CONTRACT_ADDRESS,CONTRACT_ABI } from '../constants';

export default function Fund() {
    const [amount,setAmount] = useState();
    const [contributors,setContributors] = useState("0");
    const [balance,setBalance] =useState("0");
    const {data:signer} = useSigner();
    const contract = useContract({
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: CONTRACT_ABI,
    signerOrProvider: signer,
     });

   
    function handleOnChange(event){
        event.preventDefault();
        setAmount(event.target.value);
    };

    async function fund(){
        const tx = await contract.sendEth({value:utils.parseEther(amount)});
        await tx.wait();
        await getContractBalance();
        await getcontributors();
        setAmount("");
        return;
    }

    async function getContractBalance(){
        const amount = await contract.getContractBalance();
        setBalance(utils.formatEther(amount.toString()));
        return;
    }

    async function getcontributors(){
        const number =  await contract.noOfContributors();
        setContributors(number.toString());
        return;
    }

  return (
    <div className = 'flex flex-col justify-between p-1 bg-gray-200 h-[100vh] w-[80vw] mx-auto'>
        <div className='flex flex-col justify-center items-center align-center fund-section bg-red-200 mb-2 h-[50%] w-[100%]'>
             <input className='w-[50%] py-2 px-4 mb-4' value={amount} type="text" onChange={handleOnChange} placeholder='enter the amount in Ethers'/>
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[20%]" onClick={fund}>Fund</button>
        </div>
        <div className='info-section flex flex-row justify-around items-center bg-red-200 h-[50%] w-[100%]'>
              <div className='w-[40%] flex  flex-col justify-center   bg-gray-200 h-[90%]'>
                <h2 className='text-center text-xl'>Total Contributors</h2>
                <h2 className='text-center text-xl'>{contributors}</h2>
              </div>
              <div className='w-[40%] flex  flex-col justify-center bg-gray-200 h-[90%]'>
                <h2 className='text-center text-xl'>Funds collected</h2>
                <h2 className='text-center text-xl'>{balance}</h2>
              </div>
        </div>
    </div>
  )
}
