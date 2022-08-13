import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import Head from "next/head";


export default function Home() {
  return (
    <>
    <Head>
    <link href="https://fonts.googleapis.com/css2?family=Silkscreen&display=swap" rel="stylesheet"/>
   </Head>
<div className={styles.body}>
  <Navbar/>
<div class={styles.main}>
<div class={styles.content}>
    <div class={styles.up}>
        <h1>UpStart</h1>
    </div>
    <div class={styles.sec}><h3>Come.Trend.Grow</h3></div>
    <div class={styles.three}><p>one stop for your startup to meet an <br/>opportunity and get a kick start</p></div>
</div>
<div class={styles.rab}>
<img src="./rabb.jpg"/>
</div>
</div>
</div>
</>
)
}
