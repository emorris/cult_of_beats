import React, {useState} from 'react'
import { useUpdatePasswordMutation } from '../../../reducers/currentUserApi'
import { useDispatch } from 'react-redux'
import {addSuccess, addError} from "../../../reducers/alertsSlice"
import {loadingSpinner} from '../../../helpers/loading'
import {passwordValid} from "../../../helpers/settings"
export default function Password() {
  const [password, setPassword] = useState();
  const [passwordConfirmation, setPasswordConfirmation] = useState();
  const [passwordQuery, { isLoading }] = useUpdatePasswordMutation()
  const dispatch = useDispatch()

  const changePassword = async () => {
    if (passwordValid(password, passwordConfirmation)) {
      const res = await passwordQuery({  password, password_confirmation: passwordConfirmation })
      dispatch(addSuccess("Password Change"))
    }else{
      dispatch(addError("Password do not Match"))
    }
  }
  
  return (
      <div className="grid flex-grow card">
        <div className="card max-w-xl bg-neutral text-neutral-content">
          <form>
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
                  onClick={() => changePassword()} 
                  className="btn btn-primary gap-2">
                    Change Password {loadingSpinner(isLoading)}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
}