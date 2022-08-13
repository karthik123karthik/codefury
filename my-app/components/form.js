<<<<<<< HEAD
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
                                        <input className={styles.control} type="email" name="email" placeholder="E-mail Address"
                                            required />

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
=======


export default function Form() {
    return (
        <div class="container contact-form">
            <div class="contact-image">
                <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact" />
            </div>
            <form method="post">
                <h3>Drop Us a Message</h3>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="text" name="txtName" class="form-control" placeholder="Your Name *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="text" name="txtEmail" class="form-control" placeholder="Your Email *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="text" name="txtPhone" class="form-control" placeholder="Your Phone Number *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="submit" name="btnSubmit" class="btnContact" value="Send Message" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <textarea name="txtMsg" class="form-control" placeholder="Your Message *" style="width: 100%; height: 150px;"></textarea>
                        </div>
                    </div>
                </div>
            </form>
        </div>)
>>>>>>> e064562db146f09009a2eecb02cfa3ad26516514
}