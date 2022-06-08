import React from "react";

export default function SchoolFooter() {
  return (
    <footer className="page-footer sticky top-[100vh] orange">
      <div className="container">
        <div className="row">
          <div className="col l9 s12">
            <h5 className="white-text">EdUp Digital School Company</h5>
            <div className="row center"></div>
            <p className="grey-text text-lighten-4">
              We are a team of budding developers working on this project like
              it's our full time job. Any amount would help support and continue
              development on this project and is greatly appreciated.
            </p>
            <div className="row center"></div>
            <p className="grey-text text-lighten-4">
              For our final project on the Makers Academy course, five students
              of the March 2022 have chosen to create a web app that will
              primarily be used for communication between schools and parents.
            </p>
            <div className="row center"></div>
            <p className="grey-text text-lighten-4">
              Parents will be able to login to their accounts to check the
              latest notices, have a calendar with important dates and events
              marked by teachers, make payments to pay for any invoices for
              their child's education with text confirmation and also be able to
              have a live chat with staff from school.
            </p>
          </div>

          <div className="col l3 s12">
            <h5 className="white-text">Connect</h5>
            <ul>
              <li>
                <div className="row center"></div>
                <a className="white-text" href="https://makers.tech">
                  School Website
                </a>
              </li>
              <li>
                <div className="row center"></div>
                <a
                  className="white-text"
                  href="https://www.gov.uk/government/organisations/department-for-education"
                >
                  Department for Education
                </a>
              </li>
              <li>
                <div className="row center"></div>
                <a
                  className="white-text"
                  href="https://www.geeksforgeeks.org/mern-stack/"
                >
                  MERN Stack
                </a>
              </li>
              <li>
                <div className="row center"></div>
                <a
                  className="white-text"
                  href="https://github.com/jmcnally17/EdUp#readme"
                >
                  About us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright"></div>
    </footer>
  );
}
