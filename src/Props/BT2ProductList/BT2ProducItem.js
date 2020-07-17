import React, { Component } from "react";

export default class BT2ProducItem extends Component {
  render() {
    let { productItem } = this.props;

    return (
      <div className="card">
        <img
          className="card-img-top"
          src={productItem.image}
          alt={productItem.image}
        />
        <div className="card-body">
          <h4 className="card-title">{productItem.name}</h4>
          <p className="card-text">{productItem.price}</p>
          <button className="btn btn-dark">Add to cart</button>
        </div>
      </div>
    );
  }
}
