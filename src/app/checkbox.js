import React from 'react';

//creating component
class Checkbox extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log("refs value",this.props.name);
    if(this.props.name == 'child') {

      this.props.onCheck(this.props.index,this.props.name);
    }
    else if(this.props.name == 'parent') {
      this.props.handleCheck(-1,this.props.name);
    }

  }
  render(){
    return(
      <span className="checkbox">
        <input type="checkbox" onClick={this.handleClick} checked={this.props.state} name={this.props.item}/>
      </span>
    );
  }//render
}

//exporting component so other component can access it

export default Checkbox;
