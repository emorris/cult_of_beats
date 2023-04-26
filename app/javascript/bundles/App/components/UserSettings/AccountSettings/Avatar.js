
import React, {useState,useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUserIcon } from '../../../helpers/user'
export default function Avatar({attributes, onChange}) {

  const [selectedFile, setSelectedFile] = useState()
  const [previewImg, setPreviewImg] = useState()

  useEffect(() => {
    if (!selectedFile) {
      setPreviewImg(undefined)
        return
    }
    const objectUrl = URL.createObjectURL(selectedFile)
    setPreviewImg(objectUrl)
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  const onAvatarSelect = (e) => {
      if (!e.target.files || e.target.files.length === 0) {
          setSelectedFile(undefined)
          return
      }
      setSelectedFile(e.target.files[0])
      onChange(e.target.files[0])
  }

  const imageFile = () =>{
    if(previewImg){
      return <img src={previewImg} />
    }else{
      return getUserIcon({attributes}, 4)
    }
  }

  return (
    <div className="flex flex-row">
      <div className="form-control max-w-xs">
        <div className="avatar placeholder">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            {imageFile()}
          </div>
        </div>
      </div>

      <div className="form-control w-full max-w-xs p-4">
        <input 
          onChange={onAvatarSelect}
          type="file" 
          name="avatar"
          className="file-input file-input-bordered file-input-primary w-full max-w-xs" 
        />
      </div>
    </div>
  )
}