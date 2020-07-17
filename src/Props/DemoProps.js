import React, { Component } from "react";
import Child from "./Child";

export default class DemoProps extends Component {
  render() {
    let product = {
      id: 1,
      name: "iphone X",
      price: 1000,
      image: "http://picsum.photos/200/200",
    };
    return (
      <div className="container">
        <div className="row">
          <Child productProps={product} />
        </div>
      </div>
    );
  }
}
