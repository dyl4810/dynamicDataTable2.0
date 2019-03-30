import React from 'react'
import '../../styles/App.css'

class SortArrow extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      isUp: false,
      arrowStyle: 'SortArrow-Arrow'
    }
  }
  
  onClickArrow = () =>{
    this.setState({
      isUp: !this.state.isUp
    })
    this.props.activateFieldArrow_Pfn(this.props.id)
    this.props.sortData_Pfn(this.props.id, this.state.isUp)    
  }
  activate = () =>{
    this.setState({
      arrowStyle: 'SortArrow-Arrow SortArrow-Arrow--Activated'
    })
  }
  deactivate = () =>{
    this.setState({
      arrowStyle: 'SortArrow-Arrow',
      isUp: false
    })
  }

  arrow = ()=>{
    return this.state.isUp?
      <span onClick = {this.onClickArrow} className = {this.state.arrowStyle}>&#x025B4;</span>:
      <span onClick = {this.onClickArrow} className = {this.state.arrowStyle}>&#x025BE;</span>
  }
  render(){
    return this.arrow()
  }
}
export default SortArrow