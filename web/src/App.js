import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CompanyInfo from './components/screens/company-info/CompanyInfo';

class App extends Component {
  render() {
    return (
      <div className="App">
      
          <CompanyInfo />
     
      </div>
    );
  }
}

export default App;
