import styles from "../styles/project.module.css";
import Navbar from '../components/Navbar';
import { useEffect,useState } from "react";
import {useContract,useSigner,useAccount} from 'wagmi';
import { CONTRACT_ADDRESS,CONTRACT_ABI } from '../constants';
import { BigNumber } from "ethers";



export default function Project() {
    const [request,setRequestArray] = useState([]);
    const {data:signer} = useSigner();
    const contract = useContract({
      addressOrName: CONTRACT_ADDRESS,
      contractInterface: CONTRACT_ABI,
      signerOrProvider: signer,
    });

     async function click(){
           await getAllRequest();
     }

    async function getAllRequest(){
        const array = await contract.getAllRequests();
        const getArray = array.slice().reverse().map((request)=>{
            return {
                id : request.id,
                title :  request.title,
                weblink :request.weblink,
                img : request.img,
                des : request.description.toString(),
                owner: request.recipient,
                value: request.value.toString(),
            }
        });
        setRequestArray(getArray);
        return;
    } 


    async function vote(id){
        console.log("clicked");
        const tx = await contract.voteRequest(BigNumber.from(id));
        await tx.wait();
        return;
    } 

    return (
        <>
        <div className={styles.box}>
            <Navbar/>
            <button className="items-center text-center align-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[20%]" onClick={click}>refresh</button>
            {request.map((req)=>{
                   
                return (
                    <div className={styles.container} key={req.id}>
                    <p className={styles.first}> Product One</p>
                    <h2>{req.title}</h2>
                    <div className={styles.para}>
                        <div className={styles.second}>
                           {req.des}
                        </div>
                        <div className={styles.image}>
                             <img src={req.img} />
                        </div>
                    </div>
                    <div className={styles.address}>
                        <p>Contract Address : {req.owner} </p>
                    </div>
                    <div className={styles.like}>
                        <a href={req.weblink}>Visit Us</a>
                        <button onClick={() =>vote(req.id)}><img src="https://img.icons8.com/external-kosonicon-lineal-color-kosonicon/64/000000/external-like-chat-messages-kosonicon-lineal-color-kosonicon.png" /></button>
                    </div>
    
                </div>
                )
            })}
            <div className={styles.container}>
                <p className={styles.first}> Product One</p>
                <h2>Product Name</h2>
                <div className={styles.para}>
                    <div className={styles.second}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati,
                        quibusdam repellat? Iste sapiente officiis doloremque ut dolores porro
                        reiciendis mollitia et ipsum facere optio illum sequi obcaecati at, vero
                        officia!
                    </div>
                    <div className={styles.image}>
                        {/* <img src=IMG-20220705-WA0007.jpg> */}
                    </div>
                </div>
                <div className={styles.address}>
                    <p>Contract Address : </p>
                </div>
                <div className={styles.like}>
                    <a href="https://google.com">Visit Us</a>
                    <a href="#"><img src="https://img.icons8.com/external-kosonicon-lineal-color-kosonicon/64/000000/external-like-chat-messages-kosonicon-lineal-color-kosonicon.png" /></a>
                </div>

            </div>
            <div className={styles.container}>
                <p className={styles.first}> Product Two</p>
                <h2>Product Name</h2>
                <div className={styles.para}>
                    <div className={styles.second}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati,
                        quibusdam repellat? Iste sapiente officiis doloremque ut dolores porro
                        reiciendis mollitia et ipsum facere optio illum sequi obcaecati at, vero
                        officia!
                    </div>
                    <div className={styles.image}>
                        {/* <img src=IMG-20220705-WA0007.jpg> */}
                    </div>
                </div>
                <div className={styles.address}>
                    <p>Contract Address : </p>
                </div>
                <div className={styles.like}>
                    <a href="https://tesla.com">Visit Us</a>
                    <a href="#"><img src="https://img.icons8.com/external-kosonicon-lineal-color-kosonicon/64/000000/external-like-chat-messages-kosonicon-lineal-color-kosonicon.png" /></a>

                </div>

            </div>
        </div>
        </>
        )
        
}