import { useState, useEffect } from "react";
import Sidenav from "../navbar/navbar";

let url;
if (process.env.REACT_APP_HEROKU_TEST_URL) {
  url = `${process.env.REACT_APP_HEROKU_TEST_URL}/backend/notices/index`;
} else {
  url = "http://localhost:9000/backend/notices/index";
}
export default function Noticeboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch(url);
      response = await response.json();
      setData(response.notices);
    }
    fetchMyAPI();
  }, []);

  return (
    <div>

      <Sidenav />
      
      <div className="section no-pad-bot" id="index-banner">
        <div className="container">
          <h1 className="header center orange-text">School Notice Board</h1>
          <div className="row center">
            <h5 className="header col s12 light">
              Keep up to date with your School{" "}
            </h5>
          </div>
          <div className="row center">
            <a
              href="https://makers.tech"
              id="download-button"
              className="btn-large waves-effect waves-light orange"
            >
              School website
            </a>
          </div>
          <div className="row center"></div>
          <div className="row center">
            <a
              href="/noticeboard/new"
              id="download-button"
              className="btn-large waves-effect waves-light orange"
            >
              Add New Notice
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="section">
          <div className="row">
            {data.map((noticeInfo, _key) => {
              return (
                <div>
                  <ul className="collection">
                    <li className="collection-item">
                      <div className="col s12">
                        <div className="icon-block">
                          <h5 className="center">{noticeInfo.title} </h5>
                          <p className="center"> {noticeInfo.description} </p>
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
  );
}
