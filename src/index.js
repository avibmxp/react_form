import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CustomForm from "./CustomForm";
import { createStore } from "redux";
import allReducers from "./reducers";
import { Provider } from "react-redux";

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <CustomForm formStracture='{"inputs":[{"name":"input","label":"Input dispaly name","type":"string"},{"name":"checkbox","label":"Checkbox display name","type":"boolean"},{ "name": "select", "label": "Select dispaly name", "type": "select", "options": ["option1", "option2", "option3"] }]}' />
  </Provider>,
  document.getElementById("root")
);
