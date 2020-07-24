import React, { Component } from "react";
import { connect } from "react-redux";

class SanPhamRedux extends Component {
  render() {
    let { sanPham } = this.props;
    return (
      <div className="card">
        <img
          className="card-img-top img-fluid"
          src={sanPham.hinhAnh}
          alt={sanPham.hinhAnh}
        />
        <div className="card-body">
          <h4 className="card-title">{sanPham.tenSP}</h4>
          <p className="card-text">{sanPham.giaBan.toLocaleString()}</p>
          <button
            onClick={() => {
              this.props.themGioHang(sanPham);
            }}
            className="btn btn-success"
          >
            Thêm sản phẩm
          </button>
        </div>
      </div>
    );
  }
}

//Hàm tạo ra prop là phương thức đưa dữ liệu lên reducer thông qua dispatch
const mapDispatchToProps = (dispatch) => {
  return {
    themGioHang: (sanPhamClick) => {
      let spGH = {
        maSP: sanPhamClick.maSP,
        tenSP: sanPhamClick.tenSP,
        hinhAnh: sanPhamClick.hinhAnh,
        giaBan: sanPhamClick.giaBan,
        soLuong: 1,
      };
      let action = {
        type: "THEM_GIO_HANG",
        spGH: spGH,
      };
      //Dùng hàm dispatch gửi giá trị lên reducer để set lại state
      dispatch(action);
    },
  };
};
export default connect(null, mapDispatchToProps)(SanPhamRedux);
