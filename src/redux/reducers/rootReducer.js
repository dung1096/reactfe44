import { combineReducers } from "redux";

import BTGioHangReducer from "./BTGioHangReducer";

//rootReducer quản lý state cua toàn ứng dung
const rootReducer = combineReducers({
  // nơi khai báo state (reducer) theo từng nghiệp vụ
  stateGioHangReducer: BTGioHangReducer,
});

export default rootReducer;
