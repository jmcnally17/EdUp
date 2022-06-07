import React from "react";

export default function Label( {filter} ) {
  return (
    <div>
      <br></br>
      <a
        onClick={() => filter(null)}
        class="waves-effect waves-light btn-small"
      ><i class="material-icons-outlined right">event_available</i> Show all the Events
      </a>
      <br></br>
      <br></br>
      <button onClick={() => filter('indigo')} className={`bg-indigo-500 w-full h-7 white-text`}>
        General
      </button>
      <div class="row center"></div>
      <button onClick={() => filter('red')} className={`bg-red-500 w-full h-7 white-text`}>
        Maths
      </button>
      <div class="row center"></div>
      <button onClick={() => filter('blue')} className={`bg-blue-500 w-full h-7 white-text`}>
        Sports
      </button>
      <div class="row center"></div>
      <button onClick={() => filter('green')} className={`bg-green-500 w-full h-7 white-text`}>
        Languages
      </button>
      <div class="row center"></div>
      <button onClick={() => filter('purple')} className={`bg-purple-500 w-full h-7 white-text`}>
        History
      </button>
      <div class="row center"></div>
      <button onClick={() => filter('gray')} className={`bg-gray-500 w-full h-7 white-text`}>
        Geography
      </button>
    </div>
  );
}
