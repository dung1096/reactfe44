import React, { Component } from "react";
import { connect } from "react-redux";

class GioHangRedux extends Component {
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
          <td>{sanPhamGH.giaBan.toLocaleString()}</td>
          <td>{(sanPhamGH.soLuong * sanPhamGH.giaBan).toLocaleString()}</td>

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
  render() {
    return (
      <div>
        <h3>Giỏ hàng</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Mã SP</th>
              <th>Tên SP</th>
              <th>Hình ảnh</th>
              <th>Số lượng</th>
              <th>Giá Bán</th>
              <th>Thành tiền</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderGioHang()}</tbody>
        </table>
      </div>
    );
  }
}
//Hàm có nv biển đổi statr của redux trở thành props của components
const mapStateToProps = (state) => {
  //state ứng với rootReducer
  return {
    gioHang: state.stateGioHangReducer.stateGioHang,
  };
};
export default connect(mapStateToProps)(GioHangRedux);
