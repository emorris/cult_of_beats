
import React, {useState, useMemo, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { useCreateSharedContentMutation, usePreviewSharedContentMutation } from '../../../reducers/currentUserApi'
import {addSuccess, addError} from "../../../reducers/alertsSlice"
import CardLayout from '../CardLayout'
import InputFields from '../General/InputFields'
import { GroupInput } from '../General/InputFields'
import { handleChange } from '../../../helpers/form'
const inputFields =[
  {
    name: "Youtube",
    nameId: "youtube",
    inputType: "group"
  },
]

function PreviewFile({previewFile}){
  const previewImage = (imgUrl)=>{
    return(
      <div className="avatar">
        <div className="w-24 rounded">
          <img src={imgUrl} />
        </div>
      </div>
    )
  }

  return(
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <span>image preview</span>
        {previewImage(previewFile.image_url)}
        <span>Embed Verison</span>
        <div class="card-actions justify-end"  dangerouslySetInnerHTML={{__html: previewFile.embed_html}}>
        </div>
      </div>
    </div>
  )
}

export default function SharedContent({userProfile}) {
  const dispatch = useDispatch()
  const [createSharedContent, { isPostLoading }]  = useCreateSharedContentMutation()
  const [previewSharedContent, { isLoading }]  = usePreviewSharedContentMutation()
  const [params, setParamState] = useState({})
  const [previewFiles, setPreviewFiles] = useState([])

  const addPreviewContent = (content) => {
    setPreviewFiles(prevState => (
      [...prevState, content]
    ))
  }

  const updateProfile = async () => {
    if( params['youtube']){
      const res = await createSharedContent({link: params['youtube']})
      dispatch(addSuccess("Shared Content Created"))
      setParamState({})
    }
  } 
  const previewProfile = async () => {
    if( params['youtube']){
      const res = await previewSharedContent({link: params['youtube']})
      dispatch(addSuccess("Shared Content Created"))
      addPreviewContent(res.data)
    }
  } 

  const previewFilesView =()=>{
    return(
      previewFiles.map((previewFile)=>{
        return <PreviewFile previewFile={previewFile} />
      })
    )
  }

  


  const onInputChange = handleChange(setParamState)
  return (
    <>
      <div>
        <CardLayout title={"Add Shared Content"}  onClick={previewProfile}>
          <InputFields 
            inputTypes={inputFields} 
            onChange={onInputChange}
            defaultValues={params}   
          />
        </CardLayout>
      </div>
      <div>
        {previewFilesView()}
      </div>
    </>
  )


  
}