import QRCode from "qrcode";
import { useState } from "react";
import { Navigate } from "react-router-dom";

function Qrcode({ user }) {
  const [url, setUrl] = useState("");
  const [qr, setQr] = useState("");
  const GenerateQRCode = () => {
    QRCode.toDataURL(
      url,
      {
        width: 500,
        margin: 2,
        color: {
          dark: "#335383FF",
          light: "#EEEEEEFF",
        },
      },
      (err, url) => {
        if (err) return console.error(err);
        console.log(url);
        setQr(url);
      }
    );
  };

  const ifAdmin = () => {
    if (user.admin === true) {
      return (
        <div className="container">
          <h1 className="header center orange-text">QR Generator</h1>
          <div className="row center"></div>
          <div className="row center"></div>
          <div className="input-field col s6">
            <input
              aria-label="name"
              type="text"
              placeholder="Event"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <a className="waves-effect waves-light btn" onClick={GenerateQRCode}>
            Generate<i className="material-icons right">build</i>
          </a>
          <div className="row center"></div>
          <div className="row center"></div>
          {qr && (
            <>
              <img src={qr} />
              <div className="row center"></div>
              <a
                className="waves-effect waves-light btn"
                type="submit"
                href={qr}
                download="schoolqrcode.png"
              >
                Download<i className="material-icons right">file_download</i>
              </a>
            </>
          )}
          <div className="row center"></div>
          <div className="row center"></div>
          <div className="row center"></div>
          <div className="row center"></div>
        </div>
      );
    } else if (user.admin === false) {
      return (
        <div>
          <Navigate to="/noticeboard" />
        </div>
      );
    }
  };
  return <div>{ifAdmin()}</div>;
}
export default Qrcode;
