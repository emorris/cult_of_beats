
import React, {useState} from 'react'
import CardLayout from '../CardLayout'
import InputFields from '../General/InputFields'
import { useDispatch } from 'react-redux'
import { useUpdateUserProfileMutation } from '../../../reducers/currentUserApi'
import { handleChange } from '../../../helpers/form'
import {addSuccess, addError} from "../../../reducers/alertsSlice"

const basicProfileInfoInputs =[
  {
    name: "Artist Name",
    nameId: "name",
    inputType: "basic"
  },
  // {
  //   name: "Url Path Name",
  //   nameId: "path_name",
  //   inputType: "basic"
  // }
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
    const res = await updateProfileLinks({id, body: params})
    dispatch(addSuccess("Links Updated"))
  }

  const onInputChange = handleChange(setParamState)
  return (
    <CardLayout title={"Basic Info"} isLoading={isLoading} onClick={updateProfile}>
      <InputFields 
        inputTypes={basicProfileInfoInputs} 
        onChange={onInputChange}
        defaultValues={params}   
      />
     <div className="form-control">
      <label className="label">
          <span className='w-16 place-content-center'>Bio</span>
        </label>
        <textarea 
          defaultValue={params.bio}
          onChange={onInputChange}
          placeholder="Bio" 
          name="bio"
          className="textarea textarea-bordered textarea-sm w-full h-32" >
        </textarea>
      </div>

    </CardLayout>
  )
  

  
}