
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

function PreviewFile({previewFile, onCancel}){
  const dispatch = useDispatch()
  const [params, setParamState] = useState({...previewFile})
  const onInputChange = handleChange(setParamState)
  const [createSharedContent, { isLoading }]  = useCreateSharedContentMutation()
  

  const addSharedConent = async () => {
    if( params['title']){
      const res = await createSharedContent(params)
      dispatch(addSuccess("Shared Content Created"))
      setParamState({})
      onCancel()
    }
  } 
  return(
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Preview</h2>
        <InputFields 
            inputTypes={[{
              name: "Title",
              nameId: "title",
              inputType: "basic"
            }]} 
            onChange={onInputChange}
            defaultValues={params}   
          />
          <div className="flex place-items-end gap-4">
            <div>
              <div class="avatar">
                <div class="w-24 rounded">
                  <img src={previewFile.image_url} alt="Album"/>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <span>Embed Verison</span>
              <div 
                dangerouslySetInnerHTML={{__html: previewFile.embed_html}}
              ></div>
            </div>
          </div>
        <div className="card-actions justify-end">
          <button onClick={onCancel} className="btn">Cancel</button>
          <button onClick={addSharedConent}className="btn btn-primary">Create</button>
        </div>
      </div>
    </div>
  )
}

export default function SharedContent({userProfile}) {
  const dispatch = useDispatch()
  const [previewSharedContent, { isLoading }]  = usePreviewSharedContentMutation()
  const [params, setParamState] = useState({})
  const [previewFile, setPreviewFile] = useState()

  const addPreviewContent = (content) => {
    setPreviewFile(content)
  }

  const resetPreviewContent = () => {
    setPreviewFile(null)
  }

  const previewProfile = async () => {
    if( params['youtube']){
      const res = await previewSharedContent({link: params['youtube']})
      addPreviewContent(res.data)
    }
  } 

  const returnView =()=>{

    if(previewFile){
      return <PreviewFile previewFile={previewFile} onCancel={resetPreviewContent} />
    }else{
      return (
        <CardLayout btnName="Preview" title={"Add Shared Content"}  onClick={previewProfile}>
          <InputFields 
            inputTypes={inputFields} 
            onChange={onInputChange}
            defaultValues={params}   
          />
        </CardLayout>
      )

    }
  }


  const onInputChange = handleChange(setParamState)
  return (
    <div>
        {returnView()}
    </div>
  )


  
}