
import React, {useState, useMemo, useEffect} from 'react'
import { useGetSharedContentsQuery, useUpdateSharedContentMutation,  useDeleteSharedContentMutation, useCurrentUserQuery } from '../../../reducers/currentUserApi'
import { useDispatch } from 'react-redux'
import { loadingSpinner } from '../../../helpers/loading'
import {addSuccess, addError} from "../../../reducers/alertsSlice"

const SharedContent = ({content}) => {
  const currentUserQuery = useCurrentUserQuery()
  const [updateSharedContent, { isUpdateLoading }]  = useUpdateSharedContentMutation()
  const userProfile = currentUserQuery.data.data.attributes.user_profile.data
  const [deleteSharedContent, { isLoading }]  = useDeleteSharedContentMutation()
  const onDelete = async () => {
    await deleteSharedContent(content.id)
    addSuccess("Content Deleted")
  }

  const onAddToProfile = async (e) => {
    const user_profile_id = e.target.checked ?  userProfile.id : null
    await updateSharedContent({
      id: content.id, 
      body: {user_profile: user_profile_id}
    })
    addSuccess("Updated")
    
  }

  const addToProfileCheckbox = (item) => {
    return(
      <div className="form-control">
        <label className="cursor-pointer label">
          <span className="label-text">Add To Shared Profile</span>
          <input onChange={onAddToProfile} type="checkbox" checked={item.attributes.user_profile != null} className="checkbox checkbox-primary" />
        </label>
      </div>
    )
  }
  
  return(
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body ">
        <h2 className="card-title">{content.attributes.title}</h2>
        <div className="flex place-items-end gap-4">
            <div>
              <div className="avatar">
                <div className="w-24 rounded">
                  <img src={content.attributes.image_url} alt="Album"/>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div dangerouslySetInnerHTML={{__html: content.attributes.sm_embed}} ></div>
            </div>
        </div>
        {addToProfileCheckbox(content)}
        <div className="card-actions justify-end">
          <button onClick={onDelete} className="btn btn-primary">Delete</button>
        </div>
      </div>
    </div>
  )
}

export default function ContentList() {
  const getSharedContent = useGetSharedContentsQuery()
  let sharedContent = null
  let isLoading = true
  if(getSharedContent.status == "fulfilled"){
    console.log(getSharedContent)
    sharedContent = getSharedContent.data.data
    isLoading = false
  }

  const sharedContentView = () => {
    if(sharedContent){
      return sharedContent.map((content) => 
        <SharedContent key={`shared-content-${content.id}`} content={content}/>
      )
    }else{
      return loadingSpinner(isLoading)
    }
  }


  return sharedContentView()
}