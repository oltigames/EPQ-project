import React from "react";
import "./resetStyles.css";

export default function Post() {
  return (
    <div className='flex w-full justify-center dark:bg-black'>
      <div className='flex flex-row gap-x-3 p-4 rounded-lg hover:bg-gray-100'>
        <img
          src='../profilepicture-Placeholder.png'
          alt='profile-picture'
          className='rounded-full h-10 max-w-full z-10'
        />
        <div className='w-[470px] grid gap-y-1.5 dark:text-black'>
          <h1 className='mb-1 font-bold text-fluid-1'>My Name</h1>
          <h2>Project Name</h2>
          <p className='text-pretty h-fit'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum,
            quod. Molestiae reiciendis similique minus, cum sit aliquam itaque
            assumenda voluptate ipsum molestias odio aliquid fuga distinctio
            quae, aspernatur, aut deleniti.
          </p>
        </div>
      </div>
    </div>
  );
}
