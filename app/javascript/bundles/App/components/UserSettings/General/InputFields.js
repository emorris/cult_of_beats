import React, {useMemo, useState} from 'react'

function ValidationError({show, item, children, value}){
  const errorMsg = item.validationError
  return useMemo(()=>{
      const classAddon = show ? "tooltip tooltip-error tooltip-open" : ""
      return(
        <div className={classAddon} data-tip={errorMsg}>
          {children}
        </div>
      )
  },[show])
} 

function BasicInput({inputTypes, onChange, defaultValues, inputGroup, item}){
  const [valid, setValid] = useState(true);
  const [value, setValue] = useState();
  
  const validationCheck = (e) => {
    let valid = item.validate(e.target.value)
    setValid(valid)
    if(valid){
      return onChange({target: { name: e.target.name, value: e.target.value }})
    }else{
      return onChange({target: { name: e.target.name, value: "" }})
    }
  }

  return(
    <div className="form-control flex">
       <ValidationError show={!valid} item={item}>
          <label className="label">
            <span className="label-text  text-neutral-content">{item.name}</span>
          </label>
          <input 
            onChange={validationCheck}
            name={item.nameId}
            defaultValue={defaultValues[item.nameId]}
            type="text" 
            placeholder="" 
            className="input input-bordered w-full"
          />
        </ValidationError>
    </div>  
  )
}

function GroupInput({inputTypes, onChange, defaultValues, inputGroup, item}){
  const [valid, setValid] = useState(true);
  const [value, setValue] = useState();
  
  const validationCheck = (e) => {
    let valid = item.validate(e.target.value)
    setValid(valid)
    if(valid){
      return onChange({target: { name: e.target.name, value: e.target.value }})
    }else{
      return onChange({target: { name: e.target.name, value: "" }})
    }
  }

  return(
    <div className="form-control flex"> 
       <ValidationError show={!valid} item={item} >
          <label className="input-group">
            <span className='w-16 place-content-center'>
              <div className={`fa fa-brands fa-2x fa-${item.nameId}`}></div>
            </span>
            <input 
              onChange={validationCheck} 
              defaultValue={value || defaultValues[item.nameId]}
              name={item.nameId}
              placeholder={item.name}
              type="text" 
              className="input input-border w-full" />
          </label>
        </ValidationError>
    </div>
  )
}


export default function InputFields(props) {

  return props.inputTypes.map((item) => {
    let key = `input-link-${item.nameId}`
    if(item.inputType =="group"){
      return <GroupInput {...props} item={item} key={key} />
    }else{
      return <BasicInput {...props} item={item} key={key} />
    }
  })

}