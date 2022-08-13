import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import Head from "next/head";
import Footer from '../components/footer';
import Form from '../components/Form';
import { useEffect, useState } from 'react';
import {useContract,useSigner,useAccount} from 'wagmi';
import { CONTRACT_ADDRESS,CONTRACT_ABI } from '../constants';




export default function Home() {
  const { address, isConnecting, isDisconnected } = useAccount();
  
  const {data:signer} = useSigner();
  const contract = useContract({
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: CONTRACT_ABI,
    signerOrProvider: signer,
  });


 
  return (
    <>
    <Head>
    <link href="https://fonts.googleapis.com/css2?family=Silkscreen&display=swap" rel="stylesheet"/>
   </Head>
<div className={styles.body}>
  <Navbar address={address}/>
<div className={styles.main}>
<div className={styles.content}>
    <div className={styles.up}>
        <h1>UpStart</h1>
    </div>
    <div className={styles.sec}><h3>Come.Trend.Grow</h3></div>
    <div className={styles.three}><p>one stop for your startup to meet an <br/>opportunity and get a kick start</p></div>
</div>
<div className={styles.rab}>
<img src="./rabb.jpg"/>
</div>
</div>
</div>
<<<<<<< HEAD
<Form/>
=======

>>>>>>> e064562db146f09009a2eecb02cfa3ad26516514
<Footer/>
</>
)
}
