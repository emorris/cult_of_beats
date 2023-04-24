import React, {useMemo, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {addSuccess, addError} from "../../reducers/alertsSlice"
import { useCurrentUserQuery } from '../../reducers/currentUserApi'
import { useUpdateUserInfoMutation } from '../../reducers/currentUserApi'

import {loadingSpinner} from '../../helpers/loading'

import Avatar from './UserInfoSub/Avatar'
import Email from './UserInfoSub/Email'
import Username from './UserInfoSub/Username'
export default function UserInfo() {
  const currentUserQuery = useCurrentUserQuery()
  const userInfo = useMemo(() =>  currentUserQuery.data.data.attributes, [currentUserQuery.data.data])
 
  const [userInfoQuery, { isLoading }] = useUpdateUserInfoMutation()
  
  const [params, setParamState] = useState({
    email: userInfo.email,
    avatar: userInfo.avatar,
    user_name: userInfo.user_name
  })
  
  const dispatch = useDispatch()

  const handleChange = ({target: { name, value }}) =>{
    setParamState((prev) => ({ ...prev, [name]: value }))
  }


  const updateUserInfo = async () => {
    console.log(params)
    if (params.user_name && params.email) {
      const res = await userInfoQuery(params)
      console.log(res)
      dispatch(addSuccess("user info updated"))
    }
  }
  return (
      <div className="grid flex-grow card ">
        <div className="card max-w-xl bg-neutral text-neutral-content">
          <div className="card-body ">
            <h2 className="card-title">User Info</h2> 
              <form>
                <Avatar data={userInfo.avatar} onChange={handleChange} />
                <Email data={userInfo.email}  onChange={handleChange} />
                <Username data={userInfo.user_name} onChange={handleChange} />
              </form>
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