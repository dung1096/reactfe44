import React, { Component } from "react";

export default class EventBinding extends Component {
  handleClick = () => {
    alert("Hello");
  };

  showMessage = (message) => {
    alert("Hello " + message);
  };
  render() {
    return (
      <div>
        <h3>Cách 1:</h3>
        {/* Cách 1: truyền trực tiếp callback function */}
        <button onClick={this.handleClick}>Click me!</button>
        <button onClick={this.showMessage.bind(this, "Thanh")}>
          Click me!
        </button>
        <h3>Cách 2</h3>
        {/* Cách 2: truyền function giáng tiếp */}
        <button
          onClick={() => {
            this.handleClick();
          }}
        >
          Click me
        </button>
        <button
          onClick={() => {
            this.showMessage("Hao");
          }}
        >
          Click me
        </button>
      </div>
    );
  }
}
