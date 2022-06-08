import React, { useState } from "react";
import { Navigate } from "react-router-dom";

let url;
if (process.env.REACT_APP_HEROKU_URL) {
  url = `${process.env.REACT_APP_HEROKU_URL}/backend/notices`;
} else {
  url = "http://localhost:9000/backend/notices";
}

export default function New({ user }) {
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

  const renderForm = () => {
    if (user.admin === true) {
      return (
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
                    aria-label="title"
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
                    aria-label="description"
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
      );
    } else if (user.admin === false) {
      return <Navigate to="/noticeboard" />;
    }
  };

  return <div>{renderForm()}</div>;
}
