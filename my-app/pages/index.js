import styles from '../styles/Home.module.css'
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Home() {
  return (
    
    <div className={styles.container}>
     <ConnectButton
    accountStatus={{
    smallScreen: 'avatar',
    largeScreen: 'full',
    }}
/>
    </div>
  )
}
