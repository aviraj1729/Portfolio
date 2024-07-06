import React from "react";

export default function MyButton({ name, icon, path }) {
  return (
    <a href={path} target="_blank" rel="noopener noreferrer">
      <button className="relative inline-flex items-center whitespace-nowrap justify-center p-0.5 mb-2 me-2 overflow-hidden text-lg font-medium text-gray-900 rounded-full group hover:text-black dark:hover:text-white dark:text-white">
        <span className="relative px-5 py-2.5 transition-all ease-in delay-50 h-[2.5rem] rounded-full border-2 border-black dark:border-white group-hover:bg-opacity-0 inline-flex items-center">
          <span className="icon">{icon}</span>
          <span className="icon-and-text ml-2 hidden lg:group-hover:inline-flex sm:inline-flex">
            {name}
          </span>
        </span>
      </button>
    </a>
  );
}
