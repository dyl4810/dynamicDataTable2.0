import React from 'react'
import {connect} from 'react-redux';
import Tabulate from './DataTable/Tabulate';

class Contacts extends React.Component{
  
  render(){
    return (
      <div>
        <Tabulate dataName = 'contacts'/>
        <div>{this.props.sampleData}</div>
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return {
    sampleData: state.sampleData
  }
}
export default connect(mapStateToProps)(Contacts);
