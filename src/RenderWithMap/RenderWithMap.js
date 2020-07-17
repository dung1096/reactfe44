import React, { Component } from "react";

export default class renderWithMap extends Component {
  danhSachSanPham = [
    {
      maSP: 1,
      tenSP: "Iphone X",
      gia: 1000,
      hinhAnh: "http://picsum.photos/200/200",
    },
    {
      maSP: 2,
      tenSP: "Iphone XS",
      gia: 1000,
      hinhAnh: "http://picsum.photos/200/200",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      gia: 1000,
      hinhAnh: "http://picsum.photos/200/200",
    },
  ];

  //Cách 1:
  //   renderTable = () => {
  //     let arrSPJSX = [];
  //     for (let sanPham of this.danhSachSanPham) {
  //       //Từ sản phẩm tạo ra 1 object jsx (thẻ <tr></tr>)
  //       let trJSX = (
  //         <tr key={sanPham.maSP}>
  //           <td>{sanPham.maSP}</td>
  //           <td>{sanPham.tenSP}</td>
  //           <td>{sanPham.gia}</td>
  //           <td>
  //             <img
  //               src={sanPham.hinhAnh}
  //               alt={sanPham.hinhAnh}
  //               width={100}
  //               height={100}
  //             />
  //           </td>
  //           <td>
  //             <button className="btn btn-info">Xóa</button>
  //           </td>
  //         </tr>
  //       );
  //       //push tr vào mảng jsx
  //       arrSPJSX.push(trJSX);
  //     }
  //     return arrSPJSX;
  //   };

  //Cách 2: dùng map()
  renderTable = () => {
    return this.danhSachSanPham.map((sanPham, index) => {
      return (
        <tr key={sanPham.maSP}>
          <td>{sanPham.maSP}</td>
          <td>{sanPham.tenSP}</td>
          <td>{sanPham.gia}</td>
          <td>
            <img
              src={sanPham.hinhAnh}
              alt={sanPham.hinhAnh}
              width={100}
              height={100}
            />
          </td>
          <td>
            <button className="btn btn-info">Xóa</button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <h3 className="text-primary">Danh mục sản phẩm</h3>

        <table className="table">
          <thead>
            <tr>
              <th>Mã SP</th>
              <th>Tên SP</th>
              <th>Giá</th>
              <th>Hình Ảnh</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>
    );
  }
}
