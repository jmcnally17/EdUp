import { useState, useEffect } from "react";

let url;
if (process.env.REACT_APP_HEROKU_TEST_URL) {
  url = `${process.env.REACT_APP_HEROKU_TEST_URL}notices/index`;
} else {
  url = "http://localhost:9000/notices/index";
}
export default function Noticeboard() {
  const [data, setData] = useState([])
  useEffect(()=>{
    async function fetchMyAPI() {
      let response = await fetch(url)
      response = await response.json()
      setData(response.notices)
    }
    fetchMyAPI()
  }, [])

  return (
    <div>   
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
      
    <div class="section no-pad-bot" id="index-banner">
    <div class="container">
    
      <h1 class="header center orange-text">School Notice Board</h1>
      <div class="row center">
        <h5 class="header col s12 light">Keep up to date with your School </h5>
      </div>
      <div class="row center">
        <a href="https://makers.tech" id="download-button" class="btn-large waves-effect waves-light orange">School website</a>
      </div>
      <div class="row center"></div>
      <div class="row center">
        <a href="/noticeboard/new" id="download-button" class="btn-large waves-effect waves-light orange">Add New Notice</a>
      </div>

  

    </div>
  </div>

  <div class="container">
    <div class="section">

      <div class="row">
        {data.map((noticeInfo, _key) => {
          return (
            <div>
            <ul class="collection">
            <li class="collection-item">  
            <div class="col s12">
              <div class="icon-block">
                <h5 class="center">{ noticeInfo.title } </h5>
                <p class="center"> { noticeInfo.description } </p>
              </div>
              </div>
            
            </li>
            </ul>
            
            </div>
          );
        })}
      </div>
    </div>
    
  </div>
  <footer class="page-footer orange">
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
  )
}