import React,{Component} from 'react';
import image1 from './img/小美.jpg';
import image2 from './img/roly.jpg';
import image3 from './img/timg.jpg';
import './App.css';
import PropTypes from 'prop-types'
var arrImage = [image1,image2,image3];
class ImgWrap extends Component{
  static contextTypes = {
    index : PropTypes.number
  }
  constructor(props){
    super(props)
  }
  render(){
    console.log(this.context)
    return (
      <div className="wrap-img">
       <ul className="ul-list">
       {
          arrImage.map((item,index)=>{
            
              return (
                <li key={index} className={`list-item ${index === this.context.index ? "active" : ""}`}>
                  <img src={item} alt=""/>
                </li>
              )
          })
        }
       </ul>
      </div>
    )
  }
}
class Button extends Component{
  static contextTypes = {
    change : PropTypes.func,
    index : PropTypes.number
  }
  constructor(){
    super()

  }
  render(){
    console.log(this.context)
    return (
      <div className="button-group">
        <button className="left btn" onClick={()=>this.context.change(this.context.index)}>{"<"}</button>
        <button className="right btn" onClick={()=>this.context.change(this.context.index)}>{">"}</button>
      </div>
    )
  }
}

class App extends Component {
  static childContextTypes = {
     index : PropTypes.number,
     change : PropTypes.func
  }
  getChildContext(){
    return {
      index : this.state.index,
      change : (index)=>{this._goChange(index)}
    }
  }
 constructor(){
   super()
   this.state ={
     index : 0
   }
 }
 _goChange(index){
   console.log(index)
   if(index == arrImage.length-1){
     index = 0;
   }
   else {
     index ++
   }
this.setState({
index : index
})
 }
 render(){
   return (
     <div className="wrap">
     <ImgWrap ></ImgWrap>
     <Button ></Button>
     </div>
   )
 }
}

export default App;
