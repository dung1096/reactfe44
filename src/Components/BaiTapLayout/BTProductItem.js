import React, { Component } from "react";

export default class BTProductItem extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="card bg-light">
            <img
              className="card-img-top"
              src="./img/sp_iphoneX.png"
              alt="Card"
              style={{ maxWidth: "100%", height: 250 }}
            />
            <div className="card-body text-center">
              <h4 className="card-title text-center">iPhone X</h4>
              <p className="card-text">
                iPhone X features a new all-screen design. Face ID, which makes
                your face your password
              </p>
              <a href="#" className="btn btn-primary">
                Detail
              </a>
              <a href="#" className="btn btn-danger">
                Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
