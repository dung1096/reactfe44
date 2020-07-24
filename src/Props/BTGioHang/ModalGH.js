import React, { Component } from "react";

export default class ModalGH extends Component {
  renderGioHang = () => {
    let { gioHang } = this.props;

    return gioHang.map((sanPhamGH, index) => {
      return (
        <tr key={index}>
          <td>{sanPhamGH.maSP}</td>
          <td>{sanPhamGH.tenSP}</td>
          <td>
            <img width="50" height="50" src={sanPhamGH.hinhAnh} />
          </td>
          <td>
            <button
              onClick={() => this.props.tangGiamSoLuong(sanPhamGH.maSP, false)}
              className="btn btn-info"
            >
              -
            </button>
            {sanPhamGH.soLuong}
            <button
              onClick={() => this.props.tangGiamSoLuong(sanPhamGH.maSP, true)}
              className="btn btn-info"
            >
              +
            </button>
          </td>
          <td>{sanPhamGH.gia.toLocaleString()}</td>
          <td>{(sanPhamGH.soLuong * sanPhamGH.gia).toLocaleString()}</td>

          <td>
            <button
              onClick={() => this.props.xoaGioHang(sanPhamGH.maSP)}
              className="btn btn-danger"
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };
  tinhtongtien = () => {
    let { gioHang } = this.props;
    return gioHang.reduce((tongTien, spGH, index) => {
      return (tongTien += spGH.soLuong * spGH.gia);
    }, 0);
  };

  render() {
    return (
      <div className="container">
        <h3>Giỏ hàng</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Mã SP</th>
              <th>Tên SP</th>
              <th>Hình Ảnh</th>
              <th>Số lượng</th>
              <th>Đơn giá</th>
              <th>Thành tiền</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderGioHang()}</tbody>
          <tfoot>
            <tr>
              <td colSpan="5"></td>
              <td>Tổng tiền</td>
              <td>{this.tinhtongtien().toLocaleString()}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}
