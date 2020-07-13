import React, { Component } from "react";

export default class HandleState extends Component {
  //state:thuộc tính có sẳn của class component cho phép đổi giá trị v render lại

  state = {
    isLogin: false,
  };

  //Tạo ra 2 thuộc tính là
  //isLogin: true => hello Hao
  //isLogin: false => hiện nút đăng nhập
  userName = "Hao";
  renderContent = () => {
    if (this.state.isLogin) {
      return <h1>Hello {this.userName}</h1>;
    }
    return (
      <button
        onClick={() => {
          this.login();
        }}
      >
        Đăng nhập
      </button>
    );
  };

  login = () => {
    // this.isLogin = true;
    // console.log(this.state.isLogin);

    const newState = {
      isLogin: true,
    };
    //this.state: phương thức có sẳn của component nhân vào stage mới thay thế cho state cũ và tự động gọi hàm render
    this.setState(newState, () => {
      console.log(this.state.isLogin);
    });
  };
  render() {
    return (
      <div>
        {/* {this.isLogin ? (
          <h1>Hello {this.userName}</h1>
        ) : (
          <button>Đăng nhập</button>
        )} */}

        {this.renderContent()}
      </div>
    );
  }
}
