import React, { useState } from "react";

function MobileNav({ isOpen, setOpen }) {
  return (
    <div
      className={`bg-white absolute top-0 right-0 text-center h-screen w-full duration-700 ease-in-out md:hidden ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <ul className="my-28 ">
        <li className="py-10 relative  ">
          <a href="/"> Home</a>
        </li>

        <li className="py-10">
          <a href="/fruit-dose"> Fruit Dose</a>
        </li>

        <li className="py-10">
          <a href="/recipes"> Recipes</a>
        </li>

        <li className="py-10">
          <a href="#"> Blog</a>
        </li>

        <li className="py-10">
          <a href="#"> Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default MobileNav;
