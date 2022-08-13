import Link from "next/link";
import styles from "../styles/Home.module.css";
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Navbar(){
    return (
    <nav id={styles.navbar}>
        <div id={styles.logo}>
            <a href="/">UpStart</a>
        </div>
        <div>
            <ul>
                <li><Link href="/"><a>Home</a></Link></li>
                <li><Link href="/about"><a>About</a></Link></li>
                <li><Link href="/"><a>Projects</a></Link></li>
               <li> <ConnectButton chainStatus="none" showBalance={false} /></li> 
            </ul>
        </div>        
        {/* <ConnectButton/> */}
    </nav>
    )
}