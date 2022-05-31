import React from "react";

export default function Notice(noticeInfo) {
  return (
    <div class="col s12 m4">
      <div class="icon-block">
        <h5 class="center">{ noticeInfo.title } </h5>

        <p class="light"> { noticeInfo.description } </p>
      </div>
    </div>
  )
}
