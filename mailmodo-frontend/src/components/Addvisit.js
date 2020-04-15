import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLevelDownAlt } from '@fortawesome/free-solid-svg-icons'
import './addvisit.css'
class Addvisit extends Component{
    handleClick = (event) => {
        this.props.onClick({
            display: true
        })
    }
render(){
    
    return (
        <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">Welcome User</h1>
    <p className = "tagline">Give us a visit <FontAwesomeIcon icon = {faLevelDownAlt}/></p>
    <button type="button" className="btn btn-primary btn-lg" onClick = {this.handleClick}>Add Visit</button>
  </div>
</div>
    );
}
}
export default Addvisit;