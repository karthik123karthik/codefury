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
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
            </ul>
        </div>        
        <ConnectButton/>
    </nav>
    )
}