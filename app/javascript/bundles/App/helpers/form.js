export const handleChange = (setParamState) => ({target: { name, value }}) =>{
  setParamState((prev) => ({ ...prev, [name]: value }))
}