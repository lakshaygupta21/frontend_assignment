import React,{Component} from 'react';
import './visit.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLevelDownAlt } from '@fortawesome/free-solid-svg-icons'
class Visit extends Component{

handleChange= (event) => {
  if(event.target.checked){
    this.props.getRedeemedDish(event.target.value)
}
}
 
    render(){
let index =[];

      let items = [];
      items[0] = "Kadhai Paneer"
      items[1] = "Dal Makhni"
      items[2] = "Yellow Dal"
      items[3] = "Dal Fry"
      items[4] = "Shahi Paneer"
      items[5] = "Paneer Pasanda"
      items[6] = "Kadhi Chawal"
      items[7] = "Rajma Chawal"
      items[8] = "Aloo Matar"
      items[9] = "Aloo Baingan"
     

      let benefitvisits = [];
      benefitvisits[2] = 1;
      benefitvisits[5] = 1;
      benefitvisits[7] = 1;
      benefitvisits[8] = 1;
      benefitvisits[10] = 1;
      benefitvisits[14] = 1;
      benefitvisits[16] = 1;
      benefitvisits[19] = 1;
      benefitvisits[25] = 1;
      benefitvisits[30] = 1;
      let reward = 2;
      let i =this.props.orders + 1;
      if(benefitvisits[this.props.orders +  1] === 1){
        for(i;i<=30;i++){
       if(i> this.props.orders +1 && benefitvisits[i] === 1){
         reward = i;
         break;
       }
        }
      }
      else if(reward < this.props.orders +  1){
        i = this.props.orders +  1;
        for(i;i<=30;i++){
          if(i> this.props.orders +1 && benefitvisits[i] === 1){
            reward = i;
            break;
          }
        }
      }
      
      let dp;
      if(benefitvisits[this.props.orders +  1] === 1){
        index[0] = (this.props.orders + 1)%30;
        index[1] = (this.props.orders)%30;
        index[2] = (this.props.orders + 2)%30
        
       dp =<div><h5 class="card-title">Today is your {this.props.orders + 1} visit and you can redeem one dish among three items which are mentioned in the {this.props.orders + 1} visit entry in the loyalty program</h5>
     <div>REDEEM YOUR DISH<FontAwesomeIcon icon = {faLevelDownAlt}/></div>
      <div class="radio">
  <label className = "radio-inline"><input onChange = {this.handleChange} type="radio" name="optradio" value = {items[index[0]]}/>{items[index[0]]}</label>
</div>
<div class="radio">
  <label className = "radio-inline"><input onChange = {this.handleChange} type="radio" name="optradio" value = {items[index[1]]}/>{items[index[1]]}</label>
</div>
<div class="radio">
  <label className = "radio-inline"><input onChange = {this.handleChange} type="radio" name="optradio" value = {items[index[2]]}/>{items[index[2]]}</label>
</div>
      </div>
        
         
     
      }else{
     dp = <h5 class="card-title">Today is your {this.props.orders + 1} visit </h5>
}
        return(<div class="card">
        <div class="card-body">
         {dp}
          <p class="card-text"></p>
          
        </div>
        <div class="card ">
        <div><h5 class="card-title below">In your {reward} visit you will earn one dish among dishes that are entered in {reward} visit</h5></div>
        </div>
      </div>);
    }
}
export default Visit;