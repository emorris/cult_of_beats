
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function Username({data, onChange}) {

  return (
    <div class="form-control">
      <label className="label">
        <span className="label-text  text-neutral-content">Username</span>
      </label>
      <input 
        onChange={onChange}
        defaultValue={data} 
        name="user_name"
        type="text" 
        placeholder="" 
        className="input input-bordered"
     />
    </div>
  )
}