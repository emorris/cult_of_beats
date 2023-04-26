
import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import CardLayout from '../CardLayout'
import { handleChange } from '../../../helpers/form'
import { useUpdateUserProfileMutation } from '../../../reducers/currentUserApi'
import {addSuccess, addError} from "../../../reducers/alertsSlice"
import InputFields from '../General/InputFields'
const inputs =[
  {
    name: "Instagram",
    nameId: "instagram",
    inputType: "group"
  },
  {
    name: "Soundcloud",
    nameId: "soundcloud",
    inputType: "group"
  },
  {
    name: "Youtube",
    nameId: "youtube",
    inputType: "group"
  },
  {
    name: "Spotify",
    nameId: "spotify",
    inputType: "group"
  },
  {
    name: "TikTok",
    nameId: "tiktok",
    inputType: "group"
  },

]

export default function SiteLinks({userProfile}) {
  const id = userProfile.id
  const savedData = userProfile.attributes
  const [updateProfileLinks, { isLoading }] = useUpdateUserProfileMutation()
  const dispatch = useDispatch()

  const default_params = inputs.reduce((map, obj) => {
    map[obj.nameId] = savedData.site_links[obj.nameId]
    return map
  }, {})
  
  const [params, setParamState] = useState(default_params)
  
  const updateProfile  = async () => {
    const res = await updateProfileLinks({id, body: {site_links: params}})
    dispatch(addSuccess("Links Updated"))
  }

  const onInputChange = handleChange(setParamState)


  return (
    <CardLayout title={"Content Links"} isLoading={isLoading} onClick={updateProfile}>
      <InputFields
       inputTypes={inputs} 
       onChange={onInputChange}
       defaultValues={params}
      />
    </CardLayout>
  )
  

  
}