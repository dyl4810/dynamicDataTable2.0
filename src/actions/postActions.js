export const doNothing = () =>{
  return{
    type: 'DO_NOTHING'
  }
}

export const changeActiveField = (activeFieldKey, isUp, dataName) =>{
  return{
    type: 'CHANGE_ACTIVE_FIELD',
    activeFieldKey,
    isUp,
    dataName
  }
}