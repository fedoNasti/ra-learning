import React from "react";

class Counter extends React.Component {
  state = { count: 0 };
  render() {
    return (
      <>
        <button 
        onClick={ () => this.setState({ count: this.state.count + 1})}
        >
          +++
        </button>
      
        <div>{this.state.count}</div>

        <button 
        onClick={ () => this.setState({ count: this.state.count - 1})}
        >
          ---
        </button>
      </>
      
    );
  }
}

export default Counter;