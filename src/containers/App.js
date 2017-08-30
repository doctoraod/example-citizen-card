import React, { Component } from 'react';
import SmartCard from '../components/SmartCard';
import JsonText from '../components/JsonText';

class App extends Component {
  constructor() {
    super()
    this.state = {
      status: false,
      data: {}
    } 
  }
  handleSmartCardChange = (value) => {
    if (value === null) {
      this.setState({
        status: false,
        data: {}
      })
    } else {
      this.setState({
        status: true,
        data: value
      })
    }
  }
  render() {
    return (
      <div className="App">
        <h1 className="title">Status</h1>
        <h2 className="subtitle">
          <button className={this.state.status ? 'button is-success' : 'button is-danger'}>{this.state.status ? 'ON' : 'OFF'}</button>
        </h2>
        <h1 className="title">Data</h1>
        <h2 className="subtitle"><JsonText data={this.state.data}/></h2>
        <SmartCard onChange={this.handleSmartCardChange} />
      </div>
    );
  }
}

export default App;
