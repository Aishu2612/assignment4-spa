import React, { useEffect, useState } from 'react';
import axios from 'axios';



export default function NewsRefresh() {
    const [posts, setTime] = useState([]);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);

    let postelements=posts.map(pst=>{
        return(
            <div>{pst.title}</div>
        )
    })
  
    return 
        <div>{postelements}</div>
    
  }