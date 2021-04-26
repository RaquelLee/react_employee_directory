import React from "react";

class Counter extends React.Component {
  // state will always be an object
  // contains its own state so its a stateful component
  // 
  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
    // every class component needs a render method to run properly 
  render(){
    return (
      <div className="card text-center">
        <div className="card-header bg-primary text-white">
          Click Counter!
        </div>
        <div className="card-body">
          <p className="card-text">Click Count: {this.state.count}</p>
          <button className="btn btn-primary" onClick={this.handleIncrement}>
            Increment
          </button>
          <button className="btn btn-primary" onClick={this.handleDecrement}>
            Decrement
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
