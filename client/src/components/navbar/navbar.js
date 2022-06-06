import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

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
  render() {
    return (
      <div>
        <ul
          ref={(Sidenav) => {
            this.Sidenav = Sidenav;
          }}
          id="slide-out"
          className="sidenav sidenav-close"
        >
          <li>
            <div className="user-view">
              <div className="background"></div>
              <a href="#user"></a>
              <a href="#name">
                <span className="white-text name">John Doe</span>
              </a>
              <a href="#email">
                <span className="white-text email">jdandturk@gmail.com</span>
              </a>
            </div>
          </li>
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
            <a href="/logout">
              <i className="material-icons">logout</i>Logout
            </a>
          </li>
        </ul>
        <a href="#!" data-target="slide-out" className="sidenav-trigger white">
          <i className="material-icons ">menu</i>
        </a>
      </div>
    );
  }
}
