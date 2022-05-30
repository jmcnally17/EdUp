import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Login from './components/login/login';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
    this.url =
      process.env.REACT_APP_HEROKU_TEST_URL || "http://localhost:9000/testApi";
  }

  callAPI() {
    fetch(this.url)
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }))
      .catch((err) => err);
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{this.state.apiResponse}</p>
        <Login />
      </div>
    );
  }
}

export default App;
