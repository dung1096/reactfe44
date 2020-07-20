import React, { Component } from "react";

export default class extends Component {
  render() {
    let { sanPham } = this.props;
    return (
      <div className="card">
        <img className="card-img-top img-fluid" src={sanPham.hinhAnh} alt />
        <div className="card-body">
          <h4 className="card-title">{sanPham.tenSP}</h4>
          <p className="card-text">{sanPham.giaBan}</p>
          <button
            onClick={() => {
              this.props.themGioHang(sanPham);
            }}
            className="btn btn-info"
          >
            Add to cart
          </button>
          <button className="btn btn-danger ml-2">Remove</button>
        </div>
      </div>
    );
  }
}
