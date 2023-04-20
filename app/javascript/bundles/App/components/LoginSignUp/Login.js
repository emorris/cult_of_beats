import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useGetCurrentUserQuery } from '../../reducers/currentUserApi'

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const csrfToken = document.querySelector('[name=csrf-token]').content;

  function loginClick(){
    fetch("/users/sign_in", {
      method: "POST",
      headers: {
        'X-CSRF-TOKEN': csrfToken,
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
      body: JSON.stringify({"user": { email: email, password: password }}),
    })
      .then((r) => r.json())
      .then((user) => {console.log(user)})
  }
  
  return (
      <div className="grid flex-grow card place-items-center">
        <div className="card w-96 bg-primary text-primary-content">
          <div className="card-body ">
            <h2 className="card-title">Login</h2>
            <div className="form-control w-full max-w-xs">
              <input 
                value={email} 
                onChange={e => setEmail(e.target.value)}
                type="text" 
                placeholder="Email" 
                className="input input-bordered w-full max-w-xs  text-black" />
            </div>
            <div className="form-control w-full max-w-xs">
              <input 
                value={password} 
                onChange={e => setPassword(e.target.value)}
                type="password" 
                placeholder="Password" 
                className="input input-bordered w-full max-w-xs text-black" />
            </div>
            <div className="card-actions justify-end">
              <button onClick={() => loginClick()} className="btn">Sign In</button>
            </div>
          </div>
        </div>
      </div>
    )
}