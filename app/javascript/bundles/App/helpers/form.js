export const handleChange = (setParamState) => ({target: { name, value }}) =>{
  console.log(name, value)
  setParamState((prev) => ({ ...prev, [name]: value }))
}