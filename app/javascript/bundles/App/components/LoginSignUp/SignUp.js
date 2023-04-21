import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useGetCurrentUserQuery } from '../../reducers/currentUserApi'
import { useSignupMutation } from '../../reducers/currentUserApi'
import {loadingSpinner} from '../../helpers/loading'

export default function SignUp() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirmation, setPasswordConfirmation] = useState();
  const csrfToken = document.querySelector('[name=csrf-token]').content;
  const [signupQuery, { isLoading }] = useSignupMutation()


  const signupClick = async () => {
    if (password && email && passwordConfirmation) {
      await signupQuery({ email, password, password_confirmation: passwordConfirmation })
      window.location.replace('/');
    }
  }
  
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
                <button 
                  disabled={isLoading}
                  onClick={() => signupClick()} 
                  className="btn btn-primary gap-2">
                    Create Account {loadingSpinner(isLoading)}
                </button>
              </div>
          </div>
        </div>
      </div>
    )
}