import React, {Component} from 'react';
import shortid from 'shortid';
import './giveorder.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLevelDownAlt } from '@fortawesome/free-solid-svg-icons'
class Giveorder extends Component{
state = {
    date:"",
    items:[]
}
   
handleDateChange = (event) =>{
this.setState({
    date: event.target.value
})
}


handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
        id: shortid.generate(),
        date: this.state.date,
        items:this.state.items,
        dishRedeemed: this.props.dishRedeemed

    });
    
  
    this.setState({
        date:""
        
    });
}
uncheckHandle(e) {
    var array = [...this.state.items]; 
    var index = array.indexOf(e.target.value)
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({items: array});
    }
  }
handleInputChange = (event) => {
    
    const target = event.target;
        var value = target.value;
        if(target.checked){
            this.setState({
                items:[...this.state.items,value]
            });   
        }else if(!target.checked){
                 this.uncheckHandle(event)
        }
}

    render(){
        return(
            <form className = "formalign" method="post" onSubmit = {this.handleSubmit}>
            <div class="form-group">
              <label class="control-label" for="date">Date</label>
              <input required class="form-control" id="date" name="date" placeholder="MM/DD/YYY" type="text" onChange = {this.handleDateChange} value = {this.state.date}/>
            </div>
            <h4>Select dishes<FontAwesomeIcon icon = {faLevelDownAlt}/></h4>
            <div class="form-check form-check-inline">
             <input class="form-check-input" type="checkbox" name="items" id = "item1" value="Dal Makhni" onChange={this.handleInputChange} />
            <label class="form-check-label fsize" for="item1">Dal Makhni</label>
             </div>
             <div class="form-check form-check-inline">
             <input class="form-check-input" type="checkbox" name="items" id = "item2" value="Yellow Dal" onChange={this.handleInputChange} />
            <label class="form-check-label fsize" for="item2">Yellow Dal</label>
             </div>
             <div class="form-check form-check-inline">
             <input class="form-check-input" type="checkbox" name="items" id = "item3" value="Dal Fry" onChange={this.handleInputChange} />
            <label class="form-check-label fsize" for="item3">Dal Fry</label>
             </div>
             <div class="form-check form-check-inline">
             <input class="form-check-input" type="checkbox" name="items" id = "item4" value="Shahi Paneer" onChange={this.handleInputChange} />
            <label class="form-check-label fsize" for="item4">Shahi Paneer</label>
             </div>
             <div class="form-check form-check-inline">
             <input class="form-check-input" type="checkbox" name="items" id = "item5" value="Paneer Pasanda" onChange={this.handleInputChange} />
            <label class="form-check-label fsize" for="item5">Paneer Pasanda</label>
             </div>
             <div class="form-check form-check-inline">
             <input class="form-check-input" type="checkbox" name="items" id = "item6" value="Kadhi Chawal" onChange={this.handleInputChange} />
            <label class="form-check-label fsize" for="item6">Kadhi Chawal</label>
             </div>
             <div class="form-check form-check-inline">
             <input class="form-check-input" type="checkbox" name="items" id = "item7" value="Rajma Chawal" onChange={this.handleInputChange} />
            <label class="form-check-label fsize" for="item7">Rajma Chawal</label>
             </div>
             <div class="form-check form-check-inline">
             <input class="form-check-input" type="checkbox" name="items" id = "item8" value="Aloo Matar" onChange={this.handleInputChange} />
            <label class="form-check-label fsize" for="item8">Aloo Matar</label>
             </div>
             <div class="form-check form-check-inline">
             <input class="form-check-input" type="checkbox" name="items" id = "item9" value="Aloo Baingan" onChange={this.handleInputChange} />
            <label class="form-check-label fsize" for="item9">Aloo Baingan</label>
             </div>
             <div class="form-check form-check-inline">
             <input class="form-check-input" type="checkbox" name="items" id = "item10" value="Kadhai Paneer" onChange={this.handleInputChange} />
            <label class="form-check-label fsize" for="item10">Kadhai Paneer</label>
             </div>
            
            <div class="form-group">
              <button onSubmit = {this.handleSubmit}class="btn btn-primary btn-lg submitbutton" name="submit" type="submit">Order</button>
            </div>
           </form>
        );
    };


}
export default Giveorder;