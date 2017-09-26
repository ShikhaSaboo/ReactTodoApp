import React from 'react';
import ReactDOM from 'react-dom';
import ToDoItem from './toDoItem.js';
import AddItem from './input.js';
import Checkbox from './checkbox.js';
import index from './css/index.css';
//create component

class ToDoComponent extends React.Component{

  constructor() {
    super();
      this.state = {
         todoContent:[
           {
             id:0,
             title:"wake up",
             state:false
           },
           {
             id:1,
             title:"dance",
             state:false
           },
           {
             id:2,
             title:"eat",
             state:false
           },
           {
             id:3,
             title:"go out",
             state:false
           },

       ],
         count:4,
         isChecked:false
         //todoContent:[]

      }

      this.onDelete=this.onDelete.bind(this);
      this.onAdd=this.onAdd.bind(this);
      this.handleCheck=this.handleCheck.bind(this);

  } // constructor

  //custom function
  onAdd(data) {
      var inputTodo = this.state.todoContent;
      var obj = {};
      var itemCount = this.state.count;
      obj.id = itemCount;
      obj.title = data;
      obj.state= false;
      inputTodo.push(obj);
      itemCount++;


      this.setState({
        todoContent:inputTodo,
        count:itemCount
      })


  }

  onDelete(item) {
    var updateTodos=this.state.todoContent.filter((val,index) => {
        return item !== val
    });

    this.setState({
      todoContent: updateTodos
    })
  } // onDelete

  handleCheck(index,name) {
      if(name !== 'child') {
        var updateTodos = this.state.todoContent;
        for(var item in updateTodos) {
            //if(updateTodos[item].id == index) {
              updateTodos[item].state = !this.state.isChecked
            //}
        }
       this.setState({
         isChecked: !this.state.isChecked,
         todoContent: updateTodos
       })
      }
      var updateTodos = this.state.todoContent;
      for(var item in updateTodos) {
          if(updateTodos[item].id == index) {
            updateTodos[item].state = !updateTodos[item].state
          }

      }
     this.setState({
       todoContent: updateTodos
     })

     var checkTodos = this.state.todoContent.filter((val,index) => {
       return (
         this.state.todoContent[index].state == true );
     });
     if(this.state.todoContent.length == checkTodos.length) {
        var status = !this.state.isChecked;
        console.log("Checked true",status);
       this.setState({
         isChecked: status
       })
     }
     else if ((this.state.todoContent.length  !== checkTodos.length ) && this.state.isChecked == true) {
       this.setState({
         isChecked: false
       })
         console.log("Checked false",this.state.isChecked);
     }

  }//handleCheck
  render() {

    var todos=this.state.todoContent;
    todos=todos.map((item,index) => {
      return (
        <ToDoItem item = {item} key = {index}  onDelete = {this.onDelete}  onCheck={this.handleCheck} isChecked={this.state.isChecked}/>
      );
    });

    return(
      <div id="todo-list">
        <Checkbox state={this.state.isChecked} name={"parent"} handleCheck={this.handleCheck} /> <span> Select All</span>
        <ul>
           {todos}
        </ul>
        <AddItem onAdd={this.onAdd}/>
      </div>
    );
  }
}

//put component into html page
ReactDOM.render(<ToDoComponent />, document.getElementById('todo-wrapper'));
