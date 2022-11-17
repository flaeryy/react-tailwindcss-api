import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import Hamburger from "hamburger-react";
import MobileNav from "./MobileNav";

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    isOpen
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }, [isOpen]);
  return (
    <nav className="relative flex lg:mx-20">
      <div className="flex justify-between w-full z-10">
        <div className="m-5 flex items-center py-5">
          <a className="cursor-pointer" href="/">
            <h1 className="text-3xl font-bold">
              Fruits<span className="text-red-500 text-3xl">.</span>
            </h1>
          </a>
        </div>
        <div className="m-4 flex items-center md:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} duration={0.5} />
        </div>

        <div className="hidden md:flex p-10">
          <ul className="flex gap-x-10 relative">
            <li className="relative">
              <a
                className="before:content-[''] before:h-1 before:bottom-2 before:absolute before:transition-all before:duration-300 before:bg-red-600 before:w-full before:opacity-40 hover:before:h-2/3"
                href="/"
              >
                {" "}
                Home
              </a>
            </li>

            <li className="relative">
              <a
                className="before:content-[''] before:h-1 before:bottom-2 before:absolute before:transition-all before:duration-300 before:bg-red-600 before:w-full before:opacity-40 hover:before:h-2/3"
                href="/fruit-dose"
              >
                {" "}
                Fruit Dose
              </a>
            </li>

            <li className="relative">
              <a
                className="before:content-[''] before:h-1 before:bottom-2 before:absolute before:transition-all before:duration-300 before:bg-red-600 before:w-full before:opacity-40 hover:before:h-2/3"
                href="/recipes"
              >
                {" "}
                Recipes
              </a>
            </li>

            <li className="relative">
              <a
                className="before:content-[''] before:h-1 before:bottom-2 before:absolute before:transition-all before:duration-300 before:bg-red-600 before:w-full before:opacity-40 hover:before:h-2/3"
                href="#"
              >
                {" "}
                About Us
              </a>
            </li>

            <li className="relative">
              <a
                className="before:content-[''] before:h-1 before:bottom-2 before:absolute before:transition-all before:duration-300 before:bg-red-600 before:w-full before:opacity-40 hover:before:h-2/3"
                href="#"
              >
                {" "}
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      <MobileNav isOpen={isOpen} setOpen={setOpen} />
    </nav>
  );
}

export default Navbar;
