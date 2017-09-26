import React from 'react';
import Checkbox from './checkbox.js';
import toDoItem from './css/toDoItem.css'

//creating component

class ToDoItem extends React.Component {

  constructor(){
    super();
    this.handleDelete = this.handleDelete.bind(this);
    this.onCheck = this.onCheck.bind(this);
  } // constructor

  //custom function
  onCheck(id,name){
    //console.log("i am clicked",index);
    this.props.onCheck(id,name);

  }
  handleDelete(){
    this.props.onDelete(this.props.item);
  }

  render(){
    return (
      <li>
        <div className="todo-item">
          <Checkbox onCheck={this.onCheck}  index = {this.props.item.id} checked={this.props.isChecked} state={this.props.item.state} name={"child"}/>
          <span className="item-name">{this.props.item.title}</span>
          <span className="item-remove" onClick={this.handleDelete}>X</span>
        </div>
      </li>
    );
  } //render
}

//export component so that other component can import it
export default ToDoItem;
