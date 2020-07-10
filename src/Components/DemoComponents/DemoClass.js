import React, { Component } from "react"; //rcc

export default class DemoClass extends Component {
  //Có thể định nghĩa thêm các thuộc tính và phương thức khác

  //render: Chứa nội dung của giao diện component
  render() {
    return (
      <div>
        <div className="card">
          <img className="card-img-top" src="holder.js/100x180/" alt />
          <div className="card-body">
            <h4 className="card-title">Title</h4>
            <p className="card-text">Text</p>
          </div>
        </div>
      </div>
    );
  }
}
