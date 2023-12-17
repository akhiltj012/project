import React from 'react'
import styles from './Signup.module.css'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
    const [enter, setEnter] = useState(false)
    const [passenter, setPassEnter] = useState(false)
    const [userenter, setUserEnter] = useState(false)
    const [userphEnter,setUserphEnter] = useState(false)
    const navigate = useNavigate();
  return (
    <div className={styles.main}>

    <div className={styles.login_main} >
        <div className={styles.log_div1}>
            <label>Signup</label>
        </div>

        <div className={styles.log_div}>
            <label>Email </label>
            <br />
            <input className={userenter ? styles.input1 : styles.input} onMouseEnter={() => setUserEnter(true)} onMouseLeave={() => setUserEnter(false)} placeholder='Enter username' />
        </div>
        <div className={styles.log_div}>
            <label>Phone number </label>
            <br />
            <input className={userphEnter ? styles.input1 : styles.input} onMouseEnter={() => setUserphEnter(true)} onMouseLeave={() => setUserphEnter(false)} placeholder='Enter username' />
        </div>
        <div className={styles.log_div}>
            <label>Password</label>
            <br />
            <input className={passenter ? styles.input1 : styles.input} onMouseEnter={() => setPassEnter(true)} onMouseLeave={() => setPassEnter(false)} placeholder='Enter password here' />
        </div>
        <div className={styles.log_div}>
            <label>Re enter Password</label>
            <br />
            <input className={passenter ? styles.input1 : styles.input} onMouseEnter={() => setPassEnter(true)} onMouseLeave={() => setPassEnter(false)} placeholder='Enter password here' />
        </div>
        <div className={styles.btn_div} >
            <button onClick={()=>navigate('/otp')} onMouseEnter={() => setEnter(true)} onMouseLeave={() => setEnter(false)} className={enter ? styles.btn1 : styles.btn}>Generate Otp</button>
        </div>
       
    </div>

</div>
  )
}
