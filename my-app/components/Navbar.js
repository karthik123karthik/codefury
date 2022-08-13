import Link from "next/link";
import styles from "../styles/Home.module.css";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { MANAGER } from "../constants";

export default function Navbar(props){

    return (
    <nav id={styles.navbar}>
        <div id={styles.logo}>
            <a href="/">UpStart</a>
        </div>
        <div>
            <ul>
                <li><Link href="/"><a>Home</a></Link></li>
                <li><Link href="/about"><a>About</a></Link></li>
                <li><Link href="/projects"><a>Projects</a></Link></li>
                {(MANAGER == props.address)?<li><Link href="/form"><a>create Request</a></Link></li>:<li><Link href="/Fund"><a>Fund</a></Link></li>}
               <li> <ConnectButton chainStatus="none" showBalance={false} /></li> 
            </ul>
        </div>        
        {/* <ConnectButton/> */}
    </nav>
    )
}