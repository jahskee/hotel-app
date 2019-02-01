import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./components/redux/store/store";
import CompanyInfo from "./components/screens/company-info/CompanyInfo";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <CompanyInfo />
        </div>
      </Provider>
    );
  }
}

export default App;
