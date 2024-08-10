import React from "react";
import "./resetStyles.css";
import Post from "./postTemp";

export default function Feed() {
  return (
    <div className='flex flex-col justify-center gap-y-3'>
      <Post />
      <Post />
      <Post />
    </div>
  );
}
