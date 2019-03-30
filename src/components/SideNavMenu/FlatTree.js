import React from 'react'
import {connect} from 'react-redux'
import '../../styles/App.css'
class FlatTree extends React.Component{
  constructor(props){
    super(props)
    this.state={
      expanded: true
    }
  }
  nextTreeDepth = ()=> {
    return this.props.treeDepth?this.props.treeDepth + 1: 1
  }
  depthStyle =() =>{
    let i =() => this.props.showRoot?0:1
    return {marginLeft: (this.nextTreeDepth()-1-i())*12 +'px'}
  }
  orderTree = (orderedTree = []) =>{
    this.props.treeData.forEach(node =>{
      if(node.children.length !== 0){
        orderedTree = [...orderedTree, [node.id].concat(node.children)]
      }
    })  
    while(orderedTree.length > 1){      
        let toBeInserted = orderedTree.splice(0,1)[0]      
        for(let i = 0; i <= orderedTree.length-1; i++){
          let insertIndex = orderedTree[i].findIndex(id => id === toBeInserted[0])
          if(insertIndex !== -1){
            orderedTree[i].splice(insertIndex,1,...toBeInserted)
            break
          }
          if(insertIndex === -1 && i === orderedTree.length-1){
            orderedTree = [...orderedTree, toBeInserted]
            break
          }
        }
    }    
    let sortedData = []
    orderedTree[0].forEach(id =>{
      sortedData =[...sortedData, this.props.treeData.find(node => node.id === id)]
    })
    return <FlatTree treeData={sortedData} currentNode={sortedData[0]} parentExpanded={true} showRoot ={this.props.showRoot} sorted={true}/>
  }
  clickArrow = () =>{
    this.setState({expanded: !this.state.expanded})
  }
  arrow = () =>{
    return this.state.expanded?
      <span onClick={this.clickArrow} className='FlatTree-Arrow'>&#9662;</span>:
      <span onClick={this.clickArrow} className='FlatTree-Arrow'>&#9656;</span>
  }

  renderFlatTree = (renderedTree = []) =>{
    const{sorted, treeData, currentNode, parentExpanded, showRoot} =this.props
    const{expanded} = this.state
    const{arrow, depthStyle, nextTreeDepth} = this
    if(!sorted){
      renderedTree.push(this.orderTree())
    }
    else if(currentNode.children.length > 0 && parentExpanded){
      if(showRoot || currentNode !== treeData[0]){
        renderedTree.push(<div style={depthStyle()}>{arrow()}{currentNode.name}</div>)
      }      
      currentNode.children.forEach(id=>{
        renderedTree.push(<FlatTree treeData= {treeData} currentNode={treeData.find(node=>node.id === id)} parentExpanded = {expanded} treeDepth= {nextTreeDepth()} sorted={true} showRoot={this.props.showRoot}/>)
      })
    }
    else if(currentNode.children.length === 0 && parentExpanded){
      renderedTree.push(<div style={depthStyle()}>&nbsp;&nbsp;&nbsp;{currentNode.name}</div>)
    }
    return renderedTree    
  }
  render(){
    return <div>{this.renderFlatTree()}</div>
  }
}

const mapStateToProps = (state, props) =>{
  return{
    treeData: state[props.dataName]
  }
}
export default connect(mapStateToProps)(FlatTree)
