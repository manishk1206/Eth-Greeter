import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {greeterContract} from './EthereumSetup';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      greeting: ""
    }
  }
  componentWillMount(){
    var data = greeterContract.greet()
    this.setState({
      greeting: String(data)
    })

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h2>"{this.state.greeting}"</h2>
      </div>
    );
  }
}

export default App;
