import React from 'react'
import {connect} from 'react-redux'
import SortArrow from './SortArrow'
import LoaderHOC from '../HOC/LoaderHOC'
import {changeActiveField} from '../../actions/postActions'
import sortTableSelector from '../../selectors/sortTableSelector'

class Tabulate extends React.Component{
  constructor(props){
    super(props)
  }
  
  //Render
  rowData =()=>{
    const {rowData} = this.props
    let renderedRow = []
    let colKeys = Object.keys(rowData[0])

    for(let i = 0; i <= rowData.length-1; i++){
      let row = []
      for(let j =0; j <= colKeys.length-1; j++){
        row.push(<td key = {j}>{rowData[i][colKeys[j]]}</td>)
      }
      renderedRow.push(<tr key = {i}>{row}</tr>)
    }
    return renderedRow
  }

  headData=()=>{
    const {headData} = this.props
    const {activateFieldArrow, sortData} = this
    let renderedHead = []
    let colNames = Object.values(headData)
    let colKeys = Object.keys(headData)
    
    for(let i = 0; i <= colNames.length-1; i++){
      renderedHead.push(
        <th key = {i}>
          {colNames[i]}
          <SortArrow
            ref={(fieldArrow)=>this[colKeys[i]+'Arrow'] = fieldArrow}
            activateFieldArrow_Pfn = {activateFieldArrow} 
            sortData_Pfn = {sortData}
            id={colKeys[i]}                   
          />
        </th>
      )
    }
    return renderedHead
  }
  
  
  //Actions
  activateFieldArrow=(activeFieldKey)=>{
    Object.keys(this.props.headData).forEach(headerKey =>{
      if(headerKey !== activeFieldKey){
        this[headerKey+'Arrow'].deactivate()
      }else{
        this[headerKey+'Arrow'].activate()
      }
    })
  }

  sortData=(activeFieldKey, isDown)=>{
    console.log('arrow clickeddddd', activeFieldKey, isDown)
    this.props.changeActiveField(activeFieldKey, isDown, this.props.dataName)
    //console.log(this.props.activeField)
  }  
  
  render(){
    return (
      <div>
        <table> 
          <thead>
            <tr>
              {this.headData()}
            </tr>
          </thead>
          <tbody>
            {this.rowData()}
          </tbody>                 
        </table>
      </div>
    )    
  }
}

const mapStateToProps =(state, props)=>{
  console.log('stateeeeeeeee', state)
  return{
    rowData: sortTableSelector(state),
    headData: state[props.dataName+'KeyNames'][0],
    activeField: state[props.dataName+'ActiveField']
  }  
}

const mapDispatchToProps = (dispatch) =>{
  return{
    changeActiveField: (ActiveFieldKey, isUp, dataName) =>dispatch(changeActiveField(ActiveFieldKey, isUp, dataName))
  }  
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabulate)