import styles from "../styles/project.module.css";
import Navbar from '../components/Navbar';


export default function Project(props) {

    return (
        <>
        <div className={styles.box}>
            <Navbar/>
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