import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Login from './components/login/login';
import Welcome from './components/welcomeUser/welcomeUser';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "", loginStatus: false };
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
        <h1><Welcome /></h1>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{this.state.apiResponse}</p>
        <Login onSuccess={() => {
          this.setState({ loginStatus: true })
        }}/>
      </div>
    );
  }
}

export default App;
