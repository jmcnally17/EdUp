import React, { useState } from "react";

// const url = "https://school-communication-app.herokuapp.com/notice";

export default function New() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitle = ({ target }) => {
    setTitle(target.value);
  }

  const handleDescription = ({ target }) => {
    setDescription(target.value);
  }

  const handleSubmit = async() => {
    await fetch("http://localhost:9000/notices", {
    method: "POST",
    body: JSON.stringify({
      title: title,
      description: description,
  })
});
  }

  return (
    <div class="row">
    <form onSubmit={handleSubmit} class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input placeholder="Title" id="title" type="text" class="validate" onChange={handleTitle} />
          <label for="title">Title</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input placeholder="description" id="description" type="text" class="validate" onChange={handleDescription} />
          <label for="description">Description</label>
        </div>
      </div>
      <button class="btn waves-effect waves-light" type="submit" name="action">Submit
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
  )
}