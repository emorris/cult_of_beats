
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function Avatar({data}) {

  return (
    <div className="form-control w-full max-w-xs">
      <div className="avatar">
        <div className="w-24 rounded-xl">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
    </div>
  )
}