
import React, {useState, useMemo, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import CardLayout from '../CardLayout'
import { handleChange } from '../../../helpers/form'
import { useUpdateUserProfileMutation } from '../../../reducers/currentUserApi'
import {addSuccess, addError} from "../../../reducers/alertsSlice"
import InputFields from '../General/InputFields'
const instagramRegex = /(?:(?:http|https):\/\/)?(?:www.)?(?:instagram.com|instagr.am|instagr.com)\/(.*)/
const soundcloudRegex = /(?:(?:http|https):\/\/)?(?:www.)?(?:soundcloud.com)\/(\w+)/
const youtubeRegex = /(?:(?:http|https):\/\/)?(?:www.)?(?:youtube.com|youtu.be)\/(.+)/
const spotifyRegex =  /(https?:\/\/open.spotify.com\/(track|user|artist|album)\/[a-zA-Z0-9]+(\/playlist\/[a-zA-Z0-9]+|)|spotify:(track|user|artist|album):[a-zA-Z0-9]+(:playlist:[a-zA-Z0-9]+|))/
const tikTokRegex = /(?:(?:http|https):\/\/)?(?:www.|m.)?(?:tiktok.com)\/(\w+)/

const validationBuilder = (regexObj) => {
  return (txt) => { 
    if (txt == "") return true
    const match = txt.match(regexObj)
    return !!match
  }
}

const errorTxt = (name)=>  `Not a valid ${name} link`

const inputs =[
  {
    name: "Instagram",
    nameId: "instagram",
    inputType: "group",
    validate: validationBuilder(instagramRegex),
    validationError: errorTxt("Instagram")
  },
  {
    name: "Soundcloud",
    nameId: "soundcloud",
    inputType: "group",
    validate: validationBuilder(soundcloudRegex),
    validationError: errorTxt("Soundcloud")
  },
  {
    name: "Youtube",
    nameId: "youtube",
    inputType: "group",
    validate: validationBuilder(youtubeRegex),
    validationError: errorTxt("Youtube")
  },
  {
    name: "Spotify",
    nameId: "spotify",
    inputType: "group",
    validate: validationBuilder(spotifyRegex),
    validationError: errorTxt("Spotify")
  },
  {
    name: "TikTok",
    nameId: "tiktok",
    inputType: "group",
    validate: validationBuilder(tikTokRegex),
    validationError: errorTxt("TikTok")
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
  
  const [params, setParamState] = useState({...default_params})
  const updateProfile  =  async () => {
    const res = await updateProfileLinks({id, body: {site_links: params}})
    dispatch(addSuccess("Links Updated"))
  }  
  const onInputChange = handleChange(setParamState)

  return (
    <CardLayout title={"Content Links"} isLoading={isLoading} onClick={updateProfile}>
      <InputFields
        inputTypes={inputs} 
        onChange={onInputChange}
        defaultValues={{...default_params}}
      />
    </CardLayout>
  )


  
}