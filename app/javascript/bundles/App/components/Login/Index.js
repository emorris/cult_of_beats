import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function Login() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
        <div className="card w-96 bg-primary text-primary-content">
            <div className="card-body">
                <h2 className="card-title">Login</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                <button className="btn">Buy Now</button>
                </div>
            </div>
        </div>
        <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
                <h2 className="card-title">Sign Up</h2>
                <p>We are using cookies for no reason.</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Accept</button>
                <button className="btn btn-ghost">Deny</button>
                </div>
            </div>
        </div>
    </>
    )
}