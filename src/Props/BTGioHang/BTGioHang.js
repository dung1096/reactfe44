import React, { Component } from "react";
import ModalGH from "./ModalGH";
import DSSP from "./DSSP";

export default class BTGioHang extends Component {
  state = {
    gioHang: [],
  };

  themGioHang = (sanPhamClick) => {
    console.log(sanPhamClick);

    //Từ sp dc click tạo ra sp giỏ hàng
    let spGioHang = {
      maSP: sanPhamClick.maSP,
      tenSP: sanPhamClick.tenSP,
      hinhAnh: sanPhamClick.hinhAnh,
      gia: sanPhamClick.giaBan,
      soLuong: 1,
    };

    let gioHangCapNhap = [...this.state.gioHang];

    //ktra sp đã có trong giỏ hàng chưa
    let index = gioHangCapNhap.findIndex(
      (spGH) => spGH.maSP === spGioHang.maSP
    );
    if (index !== -1) {
      gioHangCapNhap[index].soLuong += 1;
    } else {
      gioHangCapNhap.push(spGioHang);
    }
    this.setState({
      gioHang: gioHangCapNhap,
    });
  };

  arrProduct = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ];
  render() {
    return (
      <div className="container">
        <DSSP themGioHang={this.themGioHang} mangSanPham={this.arrProduct} />
        <ModalGH gioHang={this.state.gioHang} />
      </div>
    );
  }
}
