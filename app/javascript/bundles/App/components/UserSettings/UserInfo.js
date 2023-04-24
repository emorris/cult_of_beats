import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addError} from '../../reducers/alertsSlice'

import { useCurrentUserQuery } from '../../reducers/currentUserApi'
import { useUpdateUserInfoMutation } from '../../reducers/currentUserApi'

import {loadingSpinner} from '../../helpers/loading'

import Avatar from './UserInfoSub/Avatar'
import Email from './UserInfoSub/Email'
import Username from './UserInfoSub/Username'
export default function UserInfo() {
  const currentUserQuery = useCurrentUserQuery()
  const userInfo = currentUserQuery.data.data.attributes
  const [userInfoQuery, { isLoading }] = useUpdateUserInfoMutation()
  
  const [params, setParamState] = useState({
    email: null,
    password: null,
  })
  
  const dispatch = useDispatch()

  const handleChange = ({target: { name, value }}) =>{
    setParamState((prev) => ({ ...prev, [name]: value }))
  }


  const updateUserInfo = async () => {
    if (params.password && params.email) {
      await userInfoQuery(params)
      window.location.replace('/');
    }
  }
  console.log(userInfo)
  return (
      <div className="grid flex-grow card ">
        <div className="card max-w-xl bg-neutral text-neutral-content">
          <div className="card-body ">
            <h2 className="card-title">User Info</h2> 
              <Avatar data={userInfo.avatar} />
              <Email data={userInfo.email} />
              <Username data={userInfo.user_name} />
              <div className="card-actions justify-end">
                <button
                  onClick={() => updateUserInfo()} 
                  className="btn btn-primary gap-2">
                    Update {loadingSpinner(isLoading)}
                </button>
              </div>
          </div>
        </div>
      </div>
    )
}