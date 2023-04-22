

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function BasicAlert() {
  const alerts = useSelector((state) => state.alerts.value)
  const dispatch = useDispatch()
  
  const buildAlerts = () => {
    return alerts.map((alert)=>{
      console.log(alert)
      return(
        <div className={`alert shadow-lg alert-{alert.type}`}>
          <div className="">
            <button className="fa-regular fa-circle-xmark"></button>
            <span className="animate-pulse">{alert.msg}</span>
          </div>
        </div>
      )
    })
  }



  return alerts.length == 0 ? <></> : buildAlerts()
}

