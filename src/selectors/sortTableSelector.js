import { createSelector } from "reselect";

console.log('ddsdsadsadsad')

const filteredData = state => state.contacts
const selectedField = state => state.contactsActiveField

const sortTable = (contacts, contactsActiveField) => {
  console.log('conatctssss', contacts, 'contactsActiveField', contactsActiveField)
  if(contactsActiveField[0].activeFieldKey){

     let compare = (a,b) => {
      console.log('aaaaaa', a, 'bbbbbb', b)
      let aa = a[contactsActiveField[0].activeFieldKey].toString().toUpperCase()
      let bb = b[contactsActiveField[0].activeFieldKey].toString().toUpperCase()
      if(contactsActiveField[0].isUp){
        return aa<bb?1:-1
      }else{
        return aa>bb?1:-1
      } 
    }
    contacts.sort((a,b) => compare(a,b)); 
   
    return contacts;
    
  }
  else{
    return contacts
  }  
}

export default createSelector(
  filteredData,
  selectedField,
  sortTable
);
