import { useState } from "react";
import styles from "../styles/form.module.css";
import { useSigner, useContract } from "wagmi";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "../constants";
import { BigNumber,utils} from "ethers";
import Navbar from '../components/Navbar';

export default function Form() {
  const [formdata, setFormData] = useState({
    name: "",
    image: "",
    web: "",
    address: "",
    value: "",
    description: "",
  });
  const { data: signer } = useSigner();
  const contract = useContract({
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: CONTRACT_ABI,
    signerOrProvider: signer,
  });

  function handleFormChange(e) {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }

  async function newRequest(form) {
    console.log(
      form.name,
      form.web,
      form.image,
      form.description,
      form.address,
      utils.parseEther(form.value)
    );

    const tx = await contract.createRequests(
      form.name,
      form.web,
      form.image,
      form.description,
      form.address,
      utils.parseEther(form.value)
    );
    await tx.wait();
  }

  return (
    <div className={styles.body}>
      <div className={styles.body}>
      <Navbar/>
        <div className={styles.row}>
          <div className={styles.holder}>
            <div className={styles.content}>
              <div className={styles.items}>
                <h3>Register Today</h3>
                <p>Fill in the data below.</p>
                <div className={styles.col}>
                  <input
                    className={styles.control}
                    onChange={handleFormChange}
                    type="text"
                    name="name"
                    placeholder="tittle"
                    required
                  />
                </div>
                <div className={styles.col}>
                  <input
                    className={styles.control}
                    onChange={handleFormChange}
                    type="text"
                    name="image"
                    placeholder="img link"
                    required
                  />
                </div>
                <div className={styles.col}>
                  <input
                    className={styles.control}
                    onChange={handleFormChange}
                    type="text"
                    name="web"
                    placeholder="web link"
                    required
                  />
                </div>
                <div className={styles.col}>
                  <input
                    className={styles.control}
                    onChange={handleFormChange}
                    type="text"
                    name="address"
                    placeholder="wallet adress"
                    required
                  />
                </div>
                <div className={styles.col}>
                  <input
                    className={styles.control}
                    onChange={handleFormChange}
                    type="text"
                    name="value"
                    placeholder="Enter the value"
                    required
                  />
                </div>

                <div className={styles.col}>
                  <select className={styles.select} required>
                    <option selected disabled value="">
                      type
                    </option>
                    <option value="jweb">Techinal</option>
                    <option value="sweb">Non-Techinal </option>
                  </select>
                </div>

                <div className={styles.col}>
                  <input
                    className={styles.control}
                    onChange={handleFormChange}
                    type="text"
                    name="description"
                    placeholder="description"
                  />
                </div>
                <div className={styles.button}>
                  <button
                    id="submit"
                    onClick={() => newRequest(formdata)}
                    type="submit"
                    className={styles.btn}
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
