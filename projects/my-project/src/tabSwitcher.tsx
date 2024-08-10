import React from "react";
import { useState } from "react";
import Feed from "./Feed";
import About from "./about";

export default function tabSwitcher() {
  const [component, setComponent] = useState(<Feed />);

  function switchTab(newComponent) {
    if (newComponent == "Feed") {
      setComponent(<Feed />);
    } else if (newComponent == "About") {
      setComponent(<About />);
    }
  }

  return (
    <div className='grid gap-y-3 relative -top-20'>
      <div className='flex justify-center w-full'>
        <ul className='flex justify-center mt-10 w-[512px]'>
          <li
            className='flex basis-1/2 justify-center items-center h-10 hover:bg-gray-100 cursor-pointer'
            onClick={() => switchTab("Feed")}
          >
            Feed
          </li>
          <li
            className='flex basis-1/2 justify-center items-center h-10 hover:bg-gray-100 cursor-pointer'
            onClick={() => switchTab("About")}
          >
            About
          </li>
        </ul>
      </div>
      <div className='flex justify-center'>{component}</div>
    </div>
  );
}
