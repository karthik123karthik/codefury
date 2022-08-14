// import Details from "../components/Details"

// export default function About(){
//     return (
//        <Details/>
//     )
// }

import styles from "../styles/about.module.css";
import Navbar from '../components/Navbar';
// import sanjaypic from "..\components\Screenshot_20220813-133045_WhatsApp.jpg";

export default function About(props) {

return (
    <>
    <div className={styles.about}>
    <Navbar/>
        <div className={styles.team}>
            Our Team
        </div>
        
        <section>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.content}>
                        <div className={styles.imgBx}>
                            
                            <img src="./IMG-20220705-WA0007.jpg"/>
                        </div>
                        <div className={styles.contentBx}>
                            <h3>Karthik</h3>
                        </div>
                    </div>
                    <div className={styles.sci}>Back End Developer</div>
                </div>
                <div className={styles.card}>
                    <div className={styles.content}>
                        <div className={styles.imgBx}>
                            <img src="./Screenshot_20220813-133045_WhatsApp.jpg"/>
                        </div>
                        <div className={styles.contentBx}>
                            <h3>Sanjay</h3>
                        </div>
                    </div>
                    <div className={styles.sci}>Front End Developer</div>
                </div>
                <div className={styles.card}>
                    <div className={styles.content}>
                        <div className={styles.imgBx}>
                            <img src="./IMG_20220813_132744.jpg"/>
                        </div>
                        <div className={styles.contentBx}>
                            <h3>Prasad</h3>
                        </div>
                    </div>
                    <div className={styles.sci}>Front End Developer</div>
                </div>
            </div>
        </section>
    </div>
    </>
    )
}