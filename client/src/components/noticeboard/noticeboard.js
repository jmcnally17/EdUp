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

      const ProductDisplay = () (
  <section>
    <div className="product">
      <img
        src="https://i.imgur.com/EHyR2nP.png"
        alt="The cover of Stubborn Attachments"
      />
      <div className="description">
      <h3>Stubborn Attachments</h3>
      <h5>$20.00</h5>
      </div>
    </div>
    <form action="/create-checkout-session" method="POST">
      <button type="submit">
        Checkout
      </button>
    </form>
  </section>
);

const Message = ({ message }) (
  <section>
    <p>{message}</p>
  </section>
);

      export default function App() {
        [message, setMessage] = useState(""),

        useEffect(() => {
          // Check to see if this is a redirect back from Checkout
          const query = new URLSearchParams(window.location.search);

          if (query.get("success")) {
            setMessage("Order placed! You will receive an email confirmation.")
          }

          if (query.get("canceled")) {
            setMessage(
              "Order canceled -- continue to shop around and checkout when you're ready."
            )
          }
        }, [])
      
  // return message ? (
  //   <Message message={message} />
  // ) : (
  //   <ProductDisplay />
  //     );
  }
      
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
