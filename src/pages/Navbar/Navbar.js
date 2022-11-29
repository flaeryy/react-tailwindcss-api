import React, { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import MobileNav from "./MobileNav";

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "dark" ? true : false
  );
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const darkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleScroll = () => {
    console.log("ehre");
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    if (isDarkMode) {
      localStorage.setItem("darkMode", "dark");
    } else localStorage.setItem("darkMode", "light");

    isDarkMode
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");

    isOpen
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }, [isOpen, isDarkMode, darkMode, prevScrollPos]);
  return (
    <nav
      className={`flex lg:px-20 sticky ${
        visible ? "top-0" : ""
      } bg-white  dark:bg-slate-900 dark:text-slate-400 z-50  `}
    >
      <div className="flex justify-between w-full z-20">
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
            <li className="relative flex items-center">
              <a
                className="before:content-[''] before:h-[2px] before:bottom-1 before:absolute before:transition-all before:duration-300 before:bg-red-600 before:w-full before:opacity-40 hover:before:h-2/3"
                href="/"
              >
                Home
              </a>
            </li>

            <li className="relative flex items-center">
              <a
                className="before:content-[''] before:h-[2px] before:bottom-1 before:absolute before:transition-all before:duration-300 before:bg-red-600 before:w-full before:opacity-40 hover:before:h-2/3"
                href="/fruit-dose"
              >
                Fruit Dose
              </a>
            </li>

            <li className="relative flex items-center">
              <a
                className="before:content-[''] before:h-[2px] before:bottom-1 before:absolute before:transition-all before:duration-300 before:bg-red-600 before:w-full before:opacity-40 hover:before:h-2/3"
                href="/recipes/fruits"
              >
                {" "}
                Recipes
              </a>
            </li>

            <li className="relative flex items-center">
              <a
                className="before:content-[''] before:h-[2px] before:bottom-1 before:absolute before:transition-all before:duration-300 before:bg-red-600 before:w-full before:opacity-40 hover:before:h-2/3"
                href="/about-us"
              >
                {" "}
                About Us
              </a>
            </li>

            <li
              onClick={darkMode}
              className="flex m-auto items-center bg-gray-400 dark:bg-black relative w-14 h-6 justify-between rounded-3xl cursor-pointer "
            >
              <div
                className={`absolute w-6 h-6 bg-slate-700 opacity-50 dark:bg-slate-300 rounded-full transition duration-500 ease-in-out ${
                  isDarkMode ? "translate-x-8" : "translate-x-0"
                }`}
              ></div>
              <svg
                className="relative h-4 w-4 ml-1"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11 0H13V4.06189C12.6724 4.02104 12.3387 4 12 4C11.6613 4 11.3276 4.02104 11 4.06189V0ZM7.0943 5.68018L4.22173 2.80761L2.80752 4.22183L5.6801 7.09441C6.09071 6.56618 6.56608 6.0908 7.0943 5.68018ZM4.06189 11H0V13H4.06189C4.02104 12.6724 4 12.3387 4 12C4 11.6613 4.02104 11.3276 4.06189 11ZM5.6801 16.9056L2.80751 19.7782L4.22173 21.1924L7.0943 18.3198C6.56608 17.9092 6.09071 17.4338 5.6801 16.9056ZM11 19.9381V24H13V19.9381C12.6724 19.979 12.3387 20 12 20C11.6613 20 11.3276 19.979 11 19.9381ZM16.9056 18.3199L19.7781 21.1924L21.1923 19.7782L18.3198 16.9057C17.9092 17.4339 17.4338 17.9093 16.9056 18.3199ZM19.9381 13H24V11H19.9381C19.979 11.3276 20 11.6613 20 12C20 12.3387 19.979 12.6724 19.9381 13ZM18.3198 7.0943L21.1923 4.22183L19.7781 2.80762L16.9056 5.6801C17.4338 6.09071 17.9092 6.56608 18.3198 7.0943Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                className="relative h-4 w-4 mr-1"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.2256 2.00253C9.59172 1.94346 6.93894 2.9189 4.92893 4.92891C1.02369 8.83415 1.02369 15.1658 4.92893 19.071C8.83418 22.9763 15.1658 22.9763 19.0711 19.071C21.0811 17.061 22.0565 14.4082 21.9975 11.7743C21.9796 10.9772 21.8669 10.1818 21.6595 9.40643C21.0933 9.9488 20.5078 10.4276 19.9163 10.8425C18.5649 11.7906 17.1826 12.4053 15.9301 12.6837C14.0241 13.1072 12.7156 12.7156 12 12C11.2844 11.2844 10.8928 9.97588 11.3163 8.0699C11.5947 6.81738 12.2094 5.43511 13.1575 4.08368C13.5724 3.49221 14.0512 2.90664 14.5935 2.34046C13.8182 2.13305 13.0228 2.02041 12.2256 2.00253ZM17.6569 17.6568C18.9081 16.4056 19.6582 14.8431 19.9072 13.2186C16.3611 15.2643 12.638 15.4664 10.5858 13.4142C8.53361 11.362 8.73568 7.63895 10.7814 4.09281C9.1569 4.34184 7.59434 5.09193 6.34315 6.34313C3.21895 9.46732 3.21895 14.5326 6.34315 17.6568C9.46734 20.781 14.5327 20.781 17.6569 17.6568Z"
                  fill="currentColor"
                />
              </svg>
            </li>
          </ul>
        </div>
      </div>

      <MobileNav
        isOpen={isOpen}
        setOpen={setOpen}
        darkMode={darkMode}
        isDarkMode={isDarkMode}
      />
    </nav>
  );
}

export default Navbar;
