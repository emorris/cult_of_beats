import React, {useState} from 'react'
import SiteLinks from './Profile/SiteLinks'
import Info from './Profile/Info'
import {addSuccess, addError} from "../../reducers/alertsSlice"
import { useCurrentUserQuery } from '../../reducers/currentUserApi'

export default function Index() {
  const isLoading = false
  const currentUserQuery = useCurrentUserQuery()
  const userProfile = currentUserQuery.data.data.attributes.user_profile.data
  return (
      <div className="flex flex-col w-full gap-4 ">
        <Info userProfile={userProfile} />
        <SiteLinks userProfile={userProfile} />
      </div>
    )
}