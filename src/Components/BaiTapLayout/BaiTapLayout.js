import React, { Component } from "react";
import BTHeader from "./BTHeader.js";
import BTSlider from "./BTSlider.js";
import BTProductList from "./BTProductList.js";
import BTProduct from "./BTProduct.js";
import BTFooter from "./BTFooter.js";

export default class BaiTapLayout extends Component {
  render() {
    return (
      <div>
        <BTHeader />
        <BTSlider />
        <BTProductList />
        <BTProduct />
        <BTFooter />
      </div>
    );
  }
}
