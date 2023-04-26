
import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import CardLayout from '../CardLayout'
import { handleChange } from '../../../helpers/form'
import { useUpdateUserProfileMutation } from '../../../reducers/currentUserApi'
import {addSuccess, addError} from "../../../reducers/alertsSlice"

const inputs =[
  {
    name: "Instagram",
    nameId: "instagram"
  },
  {
    name: "Soundcloud",
    nameId: "soundcloud"
  },
  {
    name: "Youtube",
    nameId: "youtube"
  },
  {
    name: "Spotify",
    nameId: "spotify"
  },
  {
    name: "TikTok",
    nameId: "tiktok"
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

  const links = () => {
    return inputs.map((item) => {
      return (        
        <div className="form-control flex" key={`content-link-${item.nameId}`}> 
          <label className="input-group">
            <span className='w-16 place-content-center'>
              <div className={`fa fa-brands fa-2x fa-${item.nameId}`}></div>
            </span>
            <input 
              onChange={onInputChange} 
              defaultValue={params[item.nameId]}
              name={item.nameId}
              placeholder={item.name}
              type="text" 
              className="input input-border w-full" />
          </label>
        </div>
      )
    })
  }

  return (
    <CardLayout title={"Content Links"} isLoading={isLoading} onClick={updateProfile}>
      {links()}
    </CardLayout>
  )
  

  
}