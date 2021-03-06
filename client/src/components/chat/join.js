import React, { useState } from "react";
import chat from "../../images/chat.png";

export default function Join({ user }) {
  const [room, setRoom] = useState("");

  const handleRoom = ({ target }) => {
    setRoom(target.value);
  };

  const chatRooms = [
    "Admin",
    "Finance",
    "School reception desk",
    "Reception Year",
    "Year 1",
    "Year 2",
    "Year 3",
    "Year 4",
    "Year 5",
    "Year 6",
  ];

  return (
    <div>
      <div>
        <section className="py-20 bg-white">
          <div className="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">
            <div className="relative">
              <h2 className="w-full text-3xl font-bold text-center sm:text-4xl md:text-5xl">
                EdUp Chat Rooms
              </h2>
              <br></br>
              <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
                <div className="flex items-center mb-8 sm:w-1/2 md:w-7/12 sm:order-last">
                  <img className="rounded-lg" src={chat} alt="" />
                </div>
                <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
                  <div className="mt-5 text-lg text-gray-700 text md:text-left">
                    These chat rooms are designed for you to connect with our
                    admin staff and teachers.<br></br>
                    <br></br>
                    <blockquote>
                      <b>Admin</b> - For any admin related matters<br></br>
                      <b>Finance</b> - To get in touch with our finance
                      department<br></br>
                      <b>Class</b> - Select the appropriate class to communicate
                      with your child's teacher
                    </blockquote>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-white rounded-2xl border shadow-x1 p-10 ">
                  <div className="flex flex-col items-center space-y-4">
                    <h1 className="font-bold text-2xl text-gray-700 w-4/6 text-center">
                      Join a chat room
                    </h1>
                    <select className="browser-default" onChange={handleRoom}>
                      <option hidden value="">
                        Select chat room
                      </option>
                      {chatRooms.map((chatRoom) => (
                        <option key={chatRoom} value={chatRoom}>
                          {chatRoom}
                        </option>
                      ))}
                    </select>
                    <a
                      href={`/chat/room?name=${user.username}&room=${room}`}
                      className="bg-black text-white rounded-md hover:bg-red-500 font-semibold px-4 py-3 w-1/12 center"
                    >
                      Join
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
