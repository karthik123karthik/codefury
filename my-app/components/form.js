
import styles from "../styles/form.module.css"
export default function Form() {
    return (
        <div className={styles.body}>
            <div className={styles.body}>
                <div className={styles.row}>
                    <div className={styles.holder}>
                        <div className={styles.content}>
                            <div className={styles.items}>
                                <h3>Register Today</h3>
                                <p>Fill in the data below.</p>
                                <form className={styles.validation} novalidate>

                                    <div className={styles.col}>
                                        <input className={styles.control} type="text" name="name" placeholder="tittle" required />

                                    </div>
                                    <div className={styles.col}>
                                        <input className={styles.control} type="text" name="name" placeholder="img link" required />

                                    </div>
                                    <div className={styles.col}>
                                        <input className={styles.control} type="text" name="name" placeholder="web link" required />

                                    </div>
                                    <div className={styles.col}>
                                        <input className={styles.control} type="text" name="name" placeholder="wallet adress" required />

                                    </div>

                                    

                                    <div className={styles.col}>
                                        <select className={styles.select} required>
                                            <option selected disabled value="">type</option>
                                            <option value="jweb">Techinal</option>
                                            <option value="sweb">Non-Techinal </option>
                                        </select>
                                        </div>                   


                                        <div className={styles.col}>
                                            <input className={styles.control} type="text" name="description" placeholder="description" />

                                        </div>
                                        <div className={styles.button}>
                                            <button id="submit" type="submit" className={styles.btn}>Register</button>
                                        </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

         </div> 
            )
    }