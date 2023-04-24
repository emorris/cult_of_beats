export const passwordValid =(password, passwordConfirmation) =>{
  return password && passwordConfirmation && (passwordConfirmation == password)
}