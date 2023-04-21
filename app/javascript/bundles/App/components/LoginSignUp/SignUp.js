import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useGetCurrentUserQuery } from '../../reducers/currentUserApi'

export default function SignUp() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirmation, setPasswordConfirmation] = useState();
  const csrfToken = document.querySelector('[name=csrf-token]').content;

  function createUser(){
    fetch("/users", {
      method: "POST",
      headers: {
        'X-CSRF-TOKEN': csrfToken,
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
      body: JSON.stringify({user: { email: email, password: password, password_confirmation: passwordConfirmation }}),
    })
      .then((r) => r.json())
      .then((user) => {console.log(user)})
  }
  // const createUser = async () => {
  //   if (title && content) {
  //     await updatePost({ id: postId, title, content })
  //     history.push(`/posts/${postId}`)
  //   }
  // }
  
  return (
      <div className="grid flex-grow card place-items-center">
        <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body">
              <h2 className="card-title">Sign Up</h2>
              <p>We are using cookies for no reason.</p>
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
              <div className="form-control w-full max-w-xs">
                <input 
                  value={passwordConfirmation} 
                  onChange={e => setPasswordConfirmation(e.target.value)}
                  type="password" 
                  placeholder="Password Confirmation" 
                  className="input input-bordered w-full max-w-xs text-black" />
              </div>
              <div className="card-actions justify-end">
                <button onClick={() => createUser()} className="btn btn-primary">Create Account</button>
              </div>
          </div>
        </div>
      </div>
    )
}