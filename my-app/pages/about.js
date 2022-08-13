import styles from "../styles/Home.module.css"

export default function About(){
    return (
    <div className={styles.container}>
     <ConnectButton
    accountStatus={{
    smallScreen: 'avatar',
    largeScreen: 'full',
    }}/>
    </div>
    )
}