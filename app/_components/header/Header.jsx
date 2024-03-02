// "use client"
import Link from "next/link";
import React from "react";
import Image from "next/image";
import "./header.css"
function Header() {
  return (
    <header className="bg-white">
      <div className="mx-auto sm:w-full flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link className="block text-teal-600" href="/">
          <Image
          alt="header img"
          src={"/img/header.svg"}
          width={108}
          height={50}
           />
        </Link>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block md:hidden sm:hidden">
            <ul className="flex items-center gap-6 text-sm">
            <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="#"
                >
                  {" "}
                  Home{" "}
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="#"
                >
                  {" "}
                  Blog{" "}
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="#"
                >
                  {" "}
                  Gifts{" "}
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4 ">
            <div className=" sm:gap-4 items-center md:hidden sm:hidden">
              <button
                className="block rounded-md px-5 py-2.5 text-sm font-medium text-white "
                href="#"
              >
                <Image
                src={"/img/search-normal.svg"}
                width={24}
                height={24}
                alt="search-icon" 
                />
                
              </button>
              <button
                className="block rounded-md px-5 py-2.5 text-sm font-medium text-white "
                href="#"
              >
                <Image
                src={"/img/notification.svg"}
                width={24}
                height={24}
                alt="search-icon" 
                />
                
              </button>
              <button
                className="block px-5 py-2.5 text-sm font-medium text-white "
                href="#"
              >
                <Image
                className="rounded-full img"
                src={"/img/person.jpg"}
                width={40}
                height={40}
                alt="search-icon" 
                />
                
              </button>
              <button
                className="flex items-center gap-1 rounded-md px-5 py-2.5 text-sm font-medium text-white btn"
                href="#"
              >
                <Image
                className="rounded-full icon-img"
                src={"/img/add-circle.svg"}
                width={18}
                height={18}
                alt="search-icon" 
                />
                Add New Product
              </button>
              <button
                className="block px-5 py-2.5 text-sm font-medium text-white "
                href="#"
              >
                <Image
                className="rounded-full"
                src={"/img/global.svg"}
                width={24}
                height={24}
                alt="search-icon" 
                />
                
              </button>
            </div>

            <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
