import React, { Component } from "react";
import cssDatabinding from "./DataBinding.module.css";

export default class DataBinding extends Component {
  //Thuộc tính
  name = "fontEnd";
  img = "https://picsum.photos/300/300";
  //Phương thức
  renderImg = () => {
    let objStyle = { fontWeight: "bold" };
    return (
      <div className="card w-25">
        <h1 style={objStyle} className={`${cssDatabinding.title} display-4`}>
          Đây là hình ảnh
        </h1>
        <img className="card-img-top" src={this.img} alt />
      </div>
    );
  };

  render() {
    //Binding biến
    let title = "HELLO";
    let srcImg = "https://picsum.photos/200/200";

    //Binding hàm
    let renderText = () => {
      //Trả về chuỗi, số hoặc đoạn html react(jsx)
      return (
        <div>
          <h1>Hello 123</h1>
        </div>
      );
    };

    return (
      <div>
        {this.renderImg()}
        <h1 id="title">{title}</h1>
        <img src={srcImg} />
        {renderText()}
        <p>Name: {this.name}</p>
      </div>
    );
  }
}
