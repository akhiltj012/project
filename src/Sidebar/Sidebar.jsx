import React from 'react'
import styles from './Sidebar.module.css'
import { useState } from 'react'

export const Sidebar = () => {
 const [elements, setelements] = useState(['Home','Dashboard','Categories','Personalise'])
 const [bar,setBar] = useState(false)
 const [id,setid]= useState(null)
  return (
    <div className={styles.main} >
       
    {
        elements.map((e,i)=>{
             return (
                <div className={bar && id===i ? styles.side1 : styles.side}>
              <label onMouseEnter={()=>{setBar(true); setid(i)}} onMouseLeave={()=>{setBar(false); setid(null)}} >
                {e}
              </label>
             </div>

             )
          
        })
    }

    </div>
  )
}
