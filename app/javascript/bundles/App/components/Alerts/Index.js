import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeAlert} from "../../reducers/alertsSlice"
export default function BasicAlert() {
  const alerts = useSelector((state) => state.alerts.value)
  const dispatch = useDispatch()
  
  const buildAlerts = () => {
    return alerts.map((alert)=>{
      setTimeout(() => {dispatch(removeAlert(alert.id))}, "8000")
      return(
        <div key={`alert-${alert.id}`} className={`alert shadow-lg alert-${alert.type}`}>
          <div className="">
            <button onClick={() => dispatch(removeAlert(alert.id))}  className="fa-regular fa-circle-xmark"></button>
            <span className="animate-pulse">{alert.msg}</span>
          </div>
        </div>
      )
    })
  }



  return alerts.length == 0 ? <></> : buildAlerts()
}

