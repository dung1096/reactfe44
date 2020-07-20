import React, { Component } from "react";

export default class PropsSanPham extends Component {
  render() {
    let { product, xemCT } = this.props;
    return (
      <div className="card">
        <img
          className="card-img-top "
          src={product.hinhAnh}
          alt={product.hinhAnh}
        />
        <div className="card-body">
          <h4 className="card-title">{product.tenSP}</h4>
          <p className="card-text">{product.giaBan}</p>
          <button
            onClick={() => {
              xemCT(product);
            }}
            className="btn btn-info"
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    );
  }
}
