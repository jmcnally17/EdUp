import { useState, useEffect } from "react";
import dayjs from 'dayjs'

let url;
if (process.env.REACT_APP_HEROKU_URL) {
  url = `${process.env.REACT_APP_HEROKU_URL}/backend/notices/index`;
} else {
  url = "http://localhost:9000/backend/notices/index";
}
export default function Noticeboard( {user} ) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch(url);
      response = await response.json();
      setData(response.notices);
    }
    fetchMyAPI();
  }, []);

  let deleteUrl;
  if (process.env.REACT_APP_HEROKU_URL) {
    deleteUrl = `${process.env.REACT_APP_HEROKU_URL}/backend/notices/delete`;
  } else {
    deleteUrl = "http://localhost:9000/backend/notices/delete";
  }

  const handleDelete = (noticeId) => {
    fetch(`${deleteUrl}/${noticeId}`, {
      method: "DELETE",
    })
    window.location.reload(false);
  }

  const ifAdmin = (noticeId) => {
    if (user.admin) {
      return (
        <button type="submit" onClick={() => {handleDelete(noticeId)}}>
          <span className="material-icons-outlined text-gray-400">
            delete
          </span>
        </button>
      )
    }
  }

  const formatDate = (date) => {
    return (
      dayjs(date).format("DD/MM/YYYY")
    )
  }

  return (
    <div>
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
            {data.map((noticeInfo, key) => {
              return (
                <div key={key}>
                  <ul className="collection">
                    <li className="collection-item">
                      <div className="col s12">
                        <div className="icon-block">
                          <h5 className="center">{noticeInfo.title} </h5>
                          <p className="center">{noticeInfo.description} </p>
                          <p className="center">{formatDate(noticeInfo.createdAt)} </p>
                          {ifAdmin(noticeInfo._id)}
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
