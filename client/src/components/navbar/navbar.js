import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import Axios from 'axios';

let logOutUrl;
if (process.env.REACT_APP_HEROKU_URL) {
  logOutUrl = `${process.env.REACT_APP_HEROKU_URL}/backend/sessions/logout`;
} else {
  logOutUrl = "http://localhost:9000/backend/sessions/logout";
}

export default class Sidenav extends Component {
  componentDidMount() {
    const options = {
      inDuration: 250,
      outDuration: 200,
      draggable: true,
    };
    M.Sidenav.init(this.Sidenav, options);

    // let instance = M.Sidenav.getInstance(this.Sidenav);
  }

  logOut = () => {
    Axios({
      method: "POST",
      withCredentials: true,
      url: logOutUrl,
    })
  };

  render() {
    return (
      <div>
        <nav>
          <nav className="light-blue lighten-1" role="navigation">
            <div className="nav-wrapper container">
              <a href="/" className="brand-logo center">
                <i className="material-icons">local_library</i>EdUp
              </a>
              <ul
                ref={(Sidenav) => {
                  this.Sidenav = Sidenav;
                }}
                id="slide-out"
                className="sidenav sidenav-close"
              >
                <li>
                  <a href="/">
                    <i className="material-icons">home</i>Home
                  </a>
                </li>
                <li>
                  <div className="divider" />
                </li>
                <li>
                  <a href="/noticeboard">
                    <i className="material-icons">event_note</i>Noticeboard
                  </a>
                </li>

                <li>
                  <a href="/payments">
                    <i className="material-icons">payments</i>Payments
                  </a>
                </li>
                <li>
                  <a href="/calendar">
                    <i className="material-icons">calendar_month</i>Calendar
                  </a>
                </li>
                <li>
                  <a href="/chat">
                    <i className="material-icons">forum</i>Chat Rooms
                  </a>
                </li>
                <li>
                  <a href="http://makers.tech">
                    <i className="material-icons">language</i>School Website
                  </a>
                </li>
                <a href='/' onClick={this.logOut}>
                  <i className="material-icons">logout</i>Logout
                </a>
              </ul>

              <a
                href="#!"
                data-target="slide-out"
                className="show-on-large sidenav-trigger"
              >
                <i className="material-icons ">menu</i>
              </a>
            </div>
          </nav>
        </nav>
      </div>
    );
  }
}
