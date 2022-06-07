import React from "react";
import paymentconfirmation from "../../images/paymentconfirmation.png";

export default function success() {
  return (
    <div>
      <div className="hero bg-white py-5">
        <div className="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
          <div className="hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="hero-text col-span-6">
              <h1 className=" font-bold text-4xl md:text-5xl max-w-xl text-gray-900 leading-tight">
                Thank you for your payment!
              </h1>
              <hr className=" w-12 h-1 bg-orange-500 rounded-full mt-8" />
              <p className="text-gray-800 text-base leading-relaxed mt-8 font-semibold">
                You should receive a WhatsApp confirmation shortly
              </p>
              <br></br>
              <div className="get-app flex space-x-5 mt-10 justify-center md:justify-start"></div>
            </div>

            <div className="hero-image col-span-6">
              <img src={paymentconfirmation} alt="" className="" />
            </div>
            <br></br>
          </div>
        </div>
      </div>
      <script
        src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.3.5/dist/alpine.min.js"
        defer
      ></script>
    </div>
  );
}
