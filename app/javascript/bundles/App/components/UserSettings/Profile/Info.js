
import React, {useState} from 'react'
import CardLayout from '../CardLayout'
import { useDispatch } from 'react-redux'
import { useUpdateUserProfileMutation } from '../../../reducers/currentUserApi'
import { handleChange } from '../../../helpers/form'

const basicProfileInfoInputs =[
  {
    name: "Artist Name",
    nameId: "name"
  },
  {
    name: "Url Path Name",
    nameId: "path_name"
  }
]


export default function Info({userProfile}) {
  const id = userProfile.id
  const savedData = userProfile.attributes
  const [updateProfileLinks, { isLoading }] = useUpdateUserProfileMutation()
  const dispatch = useDispatch()


  
  const [params, setParamState] = useState({
    name: savedData.name,
    bio: savedData.bio,
    path_name: savedData.path_name
  })
  
  const updateProfile  = async () => {
    const res = await updateProfileLinks({id, body: {site_links: params}})
    dispatch(addSuccess("Links Updated"))
  }

  const onInputChange = handleChange(setParamState)

  const inputFields = () => {
    return basicProfileInfoInputs.map((item) => {
      return (        
        <div className="form-control flex" key={`profileInfo-${item.nameId}`}>
          <label className="label">
            <span className="label-text  text-neutral-content">{item.name}</span>
          </label>
          <input 
            onChange={onInputChange}
            name={item.nameId}
            defaultValue={params[item.name]}
            type="text" 
            placeholder="" 
            className="input input-bordered"
          />
        </div>
      )
    })
  }

  return (
    <CardLayout title={"Basic Info"} isLoading={isLoading} onClick={updateProfile}>
     
     {inputFields()}

     <div className="form-control">
      <label className="label">
          <span className='w-16 place-content-center'>Bio</span>
        </label>
        <textarea 
          defaultValue={params.bio}
          onChange={onInputChange}
          placeholder="Bio" 
          name="bio"
          className="textarea textarea-bordered textarea-sm w-full max-w-xs" >
        </textarea>
      </div>

    </CardLayout>
  )
  

  
}