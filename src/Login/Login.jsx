import React, { useState } from 'react'
import styles from './Login.module.css'
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [enter, setEnter] = useState(false)
    const [signenter, setsignEnter] = useState(false)
    const [passenter, setPassEnter] = useState(false)
    const [userenter, setUserEnter] = useState(false)
    const navigate = useNavigate();
    return (
        <div className={styles.main}>

            <div className={styles.login_main} >
                <div className={styles.log_div1}>
                    <label>Login/Signup</label>
                </div>

                <div className={styles.log_div}>
                    <label>Username </label>
                    <br />
                    <input className={userenter ? styles.input1 : styles.input} onMouseEnter={() => setUserEnter(true)} onMouseLeave={() => setUserEnter(false)} placeholder='Enter username' />
                </div>
                <div className={styles.log_div}>
                    <label>Password</label>
                    <br />
                    <input className={passenter ? styles.input1 : styles.input} onMouseEnter={() => setPassEnter(true)} onMouseLeave={() => setPassEnter(false)} placeholder='Enter password here' />
                </div>
                <div className={styles.btn_div} >
                    <button onMouseEnter={() => setEnter(true)} onMouseLeave={() => setEnter(false)} className={enter ? styles.btn1 : styles.btn}>Login</button>
                </div>
                <div className={signenter ? styles.signup1 : styles.signup}>
                    <label  onClick={()=>navigate('/signup')} className={styles.lbl}  onMouseEnter={() => setsignEnter(true)} onMouseLeave={() => setsignEnter(false)} >If not logged in then signup here</label>
                </div>
            </div>

        </div>
    )
}
