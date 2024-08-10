import React from "react";
import Post from "./postTemp.jsx";
import Header from "./header.jsx";
import SignUp from "./SignUp.js";
import About from "./about.jsx";
import Feed from "./Feed.jsx";
import TabSwitcher from "./tabSwitcher.js";

export default function App() {
  return (
    <div className=''>
      <button
        onClick={() => {}}
        type='button'
        className='py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 fixed top-0 right-0'
      >
        Enable/Disable Dark mode
      </button>
      <Header />
      <TabSwitcher />
    </div>
  );
}
