import React from 'react';
import ReactDOM from 'react-dom';
import addToDo from './css/addToDo.css';

//creating component
class AddItem extends React.Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
      return(
        <form id="add-todo" onSubmit={this.handleSubmit}>
          <input type="text"  ref="newItem" required/>
          <input type="submit"/>
        </form>
      );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAdd(this.refs.newItem.value);
     var inputVal = ReactDOM.findDOMNode(this.refs.newItem);
     inputVal.value = '';
  }

}

export default AddItem;
