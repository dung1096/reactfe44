import React, { Component } from "react";
import BTProductItem from "./BTProductItem";

export default class BTSmartphone extends Component {
  render() {
    return (
      <div>
        <section id="smartphone" className=" container-fluid bg-dark pt-5 pb-5">
          <h1 className="text-white text-center">BEST SMARTPHONE</h1>
          <div className="row mx-0">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
              <BTProductItem />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
              <BTProductItem />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
              <BTProductItem />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
              <BTProductItem />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
