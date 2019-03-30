import React from 'react'
import '../../styles/App.css'
import NestedTree from './NestedTree'


class SideNavArea extends React.Component{

  render(){
    return(
      <div className = "SideNavArea-Container">
        <div className = "SideNavArea-One">          
          <b>Nested Tree Data</b>
          <hr/>
          <NestedTree dataName ='treeDataNested' showRoot = {false}/>
        </div> 
      </div>
    )
  }
}
export default SideNavArea

