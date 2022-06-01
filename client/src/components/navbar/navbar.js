import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
// import image1 from "client/public/logo192.png";
// import image2 from "../../../public/logo512.jpg";

export default class Sidenav extends Component {
  componentDidMount() {
    const options = {
      inDuration: 250,
      outDuration: 200,
      draggable: true
    };
    M.Sidenav.init(this.Sidenav, options);

    let instance = M.Sidenav.getInstance(this.Sidenav);
    // instance.open();
    console.log(instance.isOpen);
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
              <div className="background">
                {/* <img src={image2} /> */}
              </div>
              <a href="#user">
                {/* <img className="circle" src={image1} /> */}
              </a>
              <a href="#name">
                <span className="white-text name">John Doe</span>
              </a>
              <a href="#email">
                <span className="white-text email">jdandturk@gmail.com</span>
              </a>
            </div>
          </li>
          <li>
            <a href="#!">
              <i className="material-icons">cloud</i>First Link With Icon
            </a>
          </li>
          <li>
            <a href="/noticeboard">Noticeboard</a>
          </li>
          <li>
            <div className="divider" />
          </li>
          <li>
            <a className="subheader">Subheader</a>
          </li>
          <li>
            <a className="waves-effect" href="#!">
              Third Link With Waves
            </a>
          </li>
        </ul>
        <a href="#!" data-target="slide-out" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>
      </div>
    );
  }
}

// import react from "react";

// export default function NavBar() {

//   return(
//       <div>
//       <ul id="slide-out" class="side-nav">
//       <li><div class="user-view">
//         <div class="background">
//           {/* <img src="images/office.jpg"> */}
//         </div>
//         {/* <a href="#!user"><img class="circle" src="images/yuna.jpg"></a> */}
//         <a href="#!name"><span class="white-text name">John Doe</span></a>
//         <a href="#!email"><span class="white-text email">jdandturk@gmail.com</span></a>
//       </div></li>
//       <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
//       <li><a href="#!">Second Link</a></li>
//       <li><div class="divider"></div></li>
//       <li><a class="subheader">Subheader</a></li>
//       <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
//     </ul>
//     <a href="#" data-activates="slide-out" class="button-collapse"><i class="material-icons">menu</i></a>
//     </div>    
//   )
     
// }

