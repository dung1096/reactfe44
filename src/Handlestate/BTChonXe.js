import React, { Component } from "react";

export default class BTChonXe extends Component {
  state = {
    srcImg: "./img/red-car.jpg",
  };

  changeColor = (newImgSrc) => {
    this.setState({
      srcImg: newImgSrc,
    });
  };
  render() {
    return (
      <div className="container">
        <h3 className="text-center">Bài tập chọn xe</h3>
        <div className="row">
          <div className="col-6">
            <img src={this.state.srcImg} alt="car" className="img-fluid" />
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-3">
                <button
                  className="btn btn-success"
                  onClick={() => {
                    this.changeColor("./img/steel-car.jpg");
                  }}
                >
                  Steel
                </button>
              </div>
              <div className="col-3">
                <button
                  className="btn btn-info"
                  onClick={() => {
                    this.changeColor("./img/silver-car.jpg");
                  }}
                >
                  Silver
                </button>
              </div>
              <div className="col-3">
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    this.changeColor("./img/red-car.jpg");
                  }}
                >
                  Red
                </button>
              </div>
              <div className="col-3">
                <button
                  className="btn btn-dark"
                  onClick={() => {
                    this.changeColor("./img/black-car.jpg");
                  }}
                >
                  Black
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//B1:Dàn layout
//B2: Xác địn nguồn dữ liệu
//B3: Xây dựng chức năng
