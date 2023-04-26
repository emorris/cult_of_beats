
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function Email({data, onChange}) {

  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text  text-neutral-content">Email</span>
      </label>
      <input 
        onChange={onChange} 
        defaultValue={data} 
        name="email"
        type="text" placeholder="" className="input input-bordered" />
    </div>
  )
}