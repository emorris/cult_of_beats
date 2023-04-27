export const handleChange = (setState) => ({target: { name, value }}) =>{
  setState((prev) => ({ ...prev, [name]: value }))
}