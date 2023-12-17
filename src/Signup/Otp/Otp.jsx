import React, { useState } from 'react'
import styles from './Otp.module.css'
import { useNavigate } from "react-router-dom";

export const Otp = () => {
    const [enter, setEnter] = useState(false)
    const [signenter, setsignEnter] = useState(false)
    const [passenter, setPassEnter] = useState(false)
    const navigate = useNavigate();
    return (
        <div className={styles.main}>

            <div className={styles.login_main} >
                <div className={styles.log_div1}>
                    <label>Signup</label>
                </div>

              
                <div className={styles.log_div}>
                    <label>Enter Otp</label>
                    <br />
                    <input className={passenter ? styles.input1 : styles.input} onMouseEnter={() => setPassEnter(true)} onMouseLeave={() => setPassEnter(false)} placeholder='Enter otp here' />
                </div>
                <div className={styles.btn_div} >
                    <button onMouseEnter={() => setEnter(true)} onMouseLeave={() => setEnter(false)} className={enter ? styles.btn1 : styles.btn}>Signup</button>
                </div>
                <div className={signenter ? styles.signup1 : styles.signup}>
                    <label  onClick={()=>navigate('/')} className={styles.lbl}  onMouseEnter={() => setsignEnter(true)} onMouseLeave={() => setsignEnter(false)} >If already signed up in then login here</label>
                </div>
            </div>

        </div>
    )
}
