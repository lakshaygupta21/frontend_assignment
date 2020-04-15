import React, {Component} from 'react';
import Addvisit from './components/Addvisit'
import Navbar from './components/Navbar'
import Visit from './components/Visit'
import OrderList from './components/OrderList'
class App extends Component{
state={
    redeemedDish: "",
    showform : false,
    countorders: 0
     }
     redeemedDishes = (dish) => {
 this.setState({
   redeemedDish:dish
 })
     }
     displayForm = (disp) => {

       this.setState({
         showform : disp.display
       })
     }
    handleChange = (orders) =>{
   
     this.setState({
       countorders: orders.length + 1
     })
      
    }
  render(){
  return (
  <div className = "container">
    <Navbar></Navbar>
    <Addvisit onClick = {this.displayForm}/>
    {this.state.showform && <OrderList redeemedDish = {this.state.redeemedDish} onchange = {this.handleChange}/>} 
    <Visit orders = {this.state.countorders} getRedeemedDish = {this.redeemedDishes}/>
    
    </div>
  );
}
}

export default App;
