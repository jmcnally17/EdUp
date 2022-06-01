import { useState, useEffect } from "react";
import Header from "../header/header";
import Sidenav from "../navbar/navbar";
import SchoolFooter from "../footer/footer";

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
      <Sidenav /> 
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
    </div>
  )
}