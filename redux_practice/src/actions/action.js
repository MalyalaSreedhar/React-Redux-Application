

export const SelectUser = (user)=>{
  console.log(`Dispatching:${user.firstName}`)
  return {
    type:'SELECT_USER',
    payload:user
  }
}
