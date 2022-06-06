import React, { useState } from "react";
import { Link } from "react-router-dom";
import chat from "../../images/chat.png"

export default function Join() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const handleName = ({ target }) => {
    setName(target.value);
  };

  const handleRoom = ({ target }) => {
    setRoom(target.value);
  };

  const handleClick = (e) => {
    return room && name ? null : e.preventDefault();
  };

  return (
    <div>
      <div>
    <section class="py-20 bg-white">
      <div class="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">
        <div class="relative">
          <h2 class="w-full text-3xl font-bold text-center sm:text-4xl md:text-5xl">EdUp Chat Rooms</h2>
          {/* <p class="w-full py-8 mx-auto -mt-2 text-lg text-center text-gray-700 intro sm:max-w-3xl">Say goodbye to cash-stuffed envelopes and mysteriously vanishing school letters. Here you can pay for your child's tuition, sports clubs, activities and more!</p> */}
          <br></br>
          <div class="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div class="flex items-center mb-8 sm:w-1/2 md:w-7/12 sm:order-last">
              <img class="rounded-lg" src={chat} alt="" />
            </div>
            <div class="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
              {/* <h3 class="mt-2 text-2xl sm:text-left md:text-4xl">Welcome</h3> */}
              <p class="mt-5 text-lg text-gray-700 text md:text-left">These chat rooms are designed for you to connect with our admin staff and teachers.<br></br><br></br>
                    Admin - For any admin related matters<br></br>
                    Finance - To get in touch with our finance department</p>
                </div>
                </div>
          <h1>Join</h1>
              <div>
              <center>
      <div class="bg-white rounded-2xl border shadow-x1 p-10 max-w-lg">
        <div class="flex flex-col items-center space-y-4">
          <h1 class="font-bold text-2xl text-gray-700 w-4/6 text-center">
            Join a chat room
          </h1>
          <select  className = "browser-default" value = {payee} onChange={handlePayee} >
          <option hidden value=''>Select</option> 
            {parents.map((parent) => <option key={parent.username} value={parent.username}>{parent.username}</option>)}
          </select>
          <input
          type="text"
          placeholder="Invoice Title"
          class="border-2 rounded-lg w-full h-12 px-4"
          onChange={handleTitle} 
          />
          <input
          type="number"
          placeholder="Amount"
          class="border-2 rounded-lg w-full h-12 px-4"
          onChange={handlePrice}
          />
          <button onClick={handleSubmit}
            class="bg-black text-white rounded-md hover:bg-red-500 font-semibold px-4 py-3 w-full"
          >
            Submit
          </button>
        </div>
          </div>
          </center>
        <input placeholder="Name" type="text" onChange={handleName} />
      </div>
      <div>
        <input placeholder="Room" type="text" onChange={handleRoom} />
      </div>
      <Link to={`/chat/room?name=${name}&room=${room}`} onClick={handleClick}>
        <button type="submit">Sign in</button>
      </Link>
              </div>
              </div>
        </section>
      </div>
    </div>
  );
}
