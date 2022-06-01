import React, { useState } from "react";
import Sidenav from "../navbar/navbar";
import "../../css/style.css";

let url;
if (process.env.REACT_APP_HEROKU_TEST_URL) {
  url = `${process.env.REACT_APP_HEROKU_TEST_URL}notices`;
} else {
  url = "http://localhost:9000/notices";
}

export default function New() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitle = ({ target }) => {
    setTitle(target.value);
  };

  const handleDescription = ({ target }) => {
    setDescription(target.value);
  };
  const alert = () => {
    window.alert("New notice has been created");
  };

  const handleSubmit = () => {
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        description,
      }),
    });
    alert();
  };

  return (
    <div>
      <Sidenav />
      <div className="row">
        <form onSubmit={handleSubmit} className="col s12">
          <div className="container">
            <div className="row center"></div>
            <div className="row center"></div>
            <div className="row center"></div>
            <div className="row center"></div>
            <div className="row">
              <div className="input-field col s12">
                <h4>Title</h4>
                <input
                  placeholder="Title"
                  id="title"
                  type="text"
                  className="validate"
                  onChange={handleTitle}
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <h4>Description</h4>
                <input
                  placeholder="Description"
                  id="description"
                  type="text"
                  className="validate"
                  onChange={handleDescription}
                />
              </div>
            </div>
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Submit
              <i className="material-icons right">send</i>
            </button>
            <div className="row center"></div>
            <div className="row center"></div>
            <div className="col s6 offset-s6">
              <a
                href="/noticeboard"
                id="download-button"
                className="btn-large waves-effect waves-light orange"
              >
                Notice Board
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
