import React, { Component } from 'react';


class Button2 extends React.Component {
  constructor (props){
    super(props);
    this.state = { counter: 9 };
  }
  render() {
    return (
<button>{this.state.counter}</button>
    );
  }

}



export default Button2;
