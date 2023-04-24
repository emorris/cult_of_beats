
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function Username() {

  return (
    <div class="form-control">
      <label className="label">
        <span className="label-text  text-neutral-content">Username</span>
      </label>
      <input type="text" placeholder="" className="input input-bordered" />
    </div>
  )
}