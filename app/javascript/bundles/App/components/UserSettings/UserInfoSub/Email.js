
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function Email() {

  return (
    <div class="form-control">
      <label className="label">
        <span className="label-text  text-neutral-content">Email</span>
      </label>
      <input type="text" placeholder="" className="input input-bordered" />
    </div>
  )
}