import React, {Component} from 'react';
import Giveorder from './Giveorder'
export default class OrderList extends Component{
state = {
    orders: [],
    redeemedDish: ""
}
addOrder = (order) => {
 this.function()
    this.setState({
      orders:[...this.state.orders,order]
  }); 
}
function = () => {
  this.props.onchange(this.state.orders)
}
    render(){

        return(
            <div>
            <Giveorder dishRedeemed = {this.props.redeemedDish} onSubmit = {this.addOrder}/>
            {this.state.orders.map(order => (
                <div class="card">
  <div class="card-header">
    You have made your {this.state.orders.indexOf(order) + 1} visit on: {order.date}
  </div>
  <div class="card-body">
    <h5 class="card-title">You ordered: </h5>
    <p class="card-text">
    {order.items} 
            <div>Last Dish Redeemed: {order.dishRedeemed}</div></p>
  </div>
</div>
            ))}
            
            </div>
        );
    }
} 