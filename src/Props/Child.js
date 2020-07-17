import React, { Component } from "react";

export default class extends Component {
  //this.props: thuộc tính có săn của component nhận giá trij từ component cha truyền vào
  // và không thể gán lại giá tri

  render() {
    let { name, price, image } = this.props.productProps;
    return (
      <div className="col-4">
        <div className="card">
          <img className="card-img-top" src={image} alt="123" />
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <p className="card-text">{price}</p>
          </div>
        </div>
      </div>
    );
  }
}
