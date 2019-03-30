import React from 'react'

const LoaderHOC = (WrappedComponent) =>{
  return class LoaderHOC extends React.Component {    
    render(){
      return this.props.rowData.length > 0?        
        <WrappedComponent {...this.props}/>:
        <div>is Loading...</div>
    }
  }
}
export default LoaderHOC