import React from "react";
import "./resetStyles.css";

// Imports from react icons
import { FaBriefcase } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { FaCakeCandles } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";

export default function Header() {
  return (
    <div className='flex flex-col justify-center items-center w-full h-auto gap-y-2'>
      <img
        src='../banner-Placeholder.png'
        alt='banner-placeholder'
        className='h-60 object-cover -z-10 top-0'
      />

      <div className='relative -top-20'>
        <img
          src='../profilepicture-Placeholder.png'
          alt='profile-picture-placeholer'
          className='rounded-full w-36 z-10'
        />
        <div className='flex flex-col mb-3 w-[450px]'>
          <h1 className='flex flex-row font-mono text-3xl mb-3'>My Name</h1>
          <div className='flex flex-row mb-2'>Quote Placeholder</div>
          <div className='flex flex-row mb-2 max-sm:hidden'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            quasi distinctio pariatur quis, velit excepturi asperiores iusto
            facilis vero doloribus maxime error numquam nesciunt consequuntur
            perferendis mollitia. Impedit, corrupti dignissimos?
          </div>
        </div>
        <span className='flex flex-row gap-3'>
          <FaBriefcase />
          <div>Available</div>
          <FaLink />
          <div>/links</div>
          <FaCakeCandles />
          <div>November 3rd</div>
          <FaCalendarAlt />
          <div>Joined October 2023</div>
        </span>
      </div>
    </div>
  );
}
