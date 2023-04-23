import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useGetCurrentUserQuery } from '../../reducers/currentUserApi'
import { useSignupMutation } from '../../reducers/currentUserApi'
import {loadingSpinner} from '../../helpers/loading'

export default function Password() {
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
      <div className="grid flex-grow card">
        <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body">
              <h2 className="card-title">Change Password</h2>
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
                  onClick={() => changePassword()} 
                  className="btn btn-primary gap-2">
                    Change Password {loadingSpinner(isLoading)}
                </button>
              </div>
          </div>
        </div>
      </div>
    )
}