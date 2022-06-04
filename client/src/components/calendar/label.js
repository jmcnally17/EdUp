import React from "react";

export default function Label( {filter} ) {
  return (
    <div>
      <br></br>
      <button
        onClick={() => filter(null)}
        className={`bg-white-200 w-full text-gray-500 font-bold mt-10"`}
      >
        Departments
      </button>
      <br></br>
      <br></br>
      <button onClick={() => filter('indigo')} className={`bg-indigo-200 w-full`}>
        General
      </button>
      <button onClick={() => filter('red')} className={`bg-red-200 w-full`}>
        Maths
      </button>
      <button onClick={() => filter('blue')} className={`bg-blue-200 w-full`}>
        Sports
      </button>
      <button onClick={() => filter('green')} className={`bg-green-200 w-full`}>
        Languages
      </button>
      <button onClick={() => filter('purple')} className={`bg-purple-200 w-full`}>
        History
      </button>
      <button onClick={() => filter('gray')} className={`bg-gray-200 w-full`}>
        Geography
      </button>
    </div>
  );
}
