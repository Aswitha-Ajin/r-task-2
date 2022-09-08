import React, { Component } from "react";

class CounterComponent extends Component {
  constructor(props) {
    
    super();
    this.state = {
      initialValue: 5,
    };
  }
  handleDecrement = (a1) => {
    this.setState({ initialValue: --this.state.initialValue });
  };
  
  render() {
    
    let a = 123;
    const handleIncrement = () => {
      // this.state.initialValue = ++this.state.initialValue
      this.setState({ initialValue: ++this.state.initialValue });
    };
    const handleReset = () => {
      this.setState({ initialValue: 5 });
    };
    return (
      <>
        <h3>This is {this.props.componentName}</h3>
        Initial Value: {this.state.initialValue} <br /> <br />
        <button onClick={() => handleIncrement(1)}> Increment</button> &nbsp;
        <button onClick={this.handleDecrement}>Decrement</button>
        &nbsp;
        <button onClick={handleReset}>Reset</button> &nbsp; <br /> <br />
        
      </>
    );
  }
}
export default CounterComponent;