import React, { useState } from "react";
import { Link } from 'react-router-dom'

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
  }

  const handleDescription = ({ target }) => {
    setDescription(target.value);
  }
  const alert = () => { window.alert("New notice has been created")}

  const handleSubmit = () => {
   
    fetch(url, {
    method: "POST",
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({
       title,
       description,
    })
    
  } );
  {alert()};
}

  return (
    <div>
    <div class="row">
      <nav class="light-blue lighten-1" role="navigation">
      <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo">Logo</a>
        <ul class="right hide-on-med-and-down">
          <li><a href="#">Navbar Link</a></li>
        </ul>
        <ul id="nav-mobile" class="sidenav">
          <li><a href="#">Navbar Link</a></li>
        </ul>
        <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      </div>
    </nav>

    
 
    <form onSubmit={handleSubmit} class="col s12">
      <div class="container">
      <div class="row center"></div>
        <div class="row center"></div>
        <div class="row center"></div>
        <div class="row center"></div>
        <div class="row">
          <div class="input-field col s12">
            <h4>Title</h4>
            <input placeholder="Title" id="title" type="text" class="validate" onChange={handleTitle} />
            
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
          <h4>Description</h4>
            <input placeholder="Description" id="description" type="text" class="validate" onChange={handleDescription} />
          </div>
        </div>
        <button class="btn waves-effect waves-light" type="submit" name="action">Submit 
          <i class="material-icons right">send</i>
          
        </button>
        <div class="row center"></div>
        <div class="row center"></div>
        <div class="col s6 offset-s6">
        <a href="/noticeboard" id="download-button" class="btn-large waves-effect waves-light orange">Notice Board</a>
        
        </div>
      </div>
    </form>

    <footer class="page-footer orange" style= {{position: "fixed",  bottom: "0", left: "0", width: "100%" }} >
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">Company Bio</h5>
          <p class="grey-text text-lighten-4">We are a team of college students working on this project like it's our full time job. Any amount would help support and continue development on this project and is greatly appreciated.</p>
        </div>
        <div class="col l3 s12">
          <h5 class="white-text">Settings</h5>
          <ul>
            <li><a class="white-text" href="#!">Link 1</a></li>
            <li><a class="white-text" href="#!">Link 2</a></li>
            <li><a class="white-text" href="#!">Link 3</a></li>
            <li><a class="white-text" href="#!">Link 4</a></li>
          </ul>
        </div>
        <div class="col l3 s12">
          <h5 class="white-text">Connect</h5>
          <ul>
            <li><a class="white-text" href="#!">Link 1</a></li>
            <li><a class="white-text" href="#!">Link 2</a></li>
            <li><a class="white-text" href="#!">Link 3</a></li>
            <li><a class="white-text" href="#!">Link 4</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
        Made by <a class="orange-text text-lighten-3" href="http://materializecss.com">Materialize</a>
      </div>
    </div>
  </footer>
  </div>
</div>
)}