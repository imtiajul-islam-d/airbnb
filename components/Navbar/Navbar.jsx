import React from "react";
import logo from "./../../public/assets/images/logo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="md:h-36 shadow-sm">
      <div className="max-w-6xl 2xl:max-w-7xl m-auto h-full py-2">
        <div className="flex items-center justify-between h-1/2">
          <Image src={logo} sizes="30vw" alt="logo" className="w-24 h-8" />
          <div>
            <img
              alt=""
              className="w-12 h-12 rounded-full"
              src="https://source.unsplash.com/40x40/?portrait?1"
            />
          </div>
        </div>
        <div className="flex items-center justify-center h-1/2 text-sm">
          <form className="h-full flex items-center border rounded-full pr-3">
            <label
              htmlFor="keyword"
              className="group transition-all after:transition-all relative hover:after:h-0 after:h-2/3 after:bg-gray-400 after:w-[1px] after:absolute after:right-0 after:top-2/4 after:-translate-y-2/4 h-full flex flex-col items-center"
            >
              <div className="group group-hover:bg-gray-200 transition-all h-full px-5 rounded-full flex flex-col justify-center">
                <label className="w-full px-2" htmlFor="keyword">
                  Where
                </label>
                <input
                  className="rounded-full group-hover:bg-gray-200 transition-all outline-none w-full py-1 px-2"
                  type="text"
                  name="keyword"
                  id="keyword"
                  placeholder="Search Destination"
                />
              </div>
            </label>
            <label
              htmlFor="checkOut"
              className="group transition-all after:transition-all relative hover:after:h-0 after:h-2/3 after:bg-gray-400 after:w-[1px] after:absolute after:right-0 after:top-2/4 after:-translate-y-2/4"
            >
              <div className="group group-hover:bg-gray-200 transition-all h-full px-5 rounded-full flex flex-col justify-center hover:bg-gray-300 hover:rounded-full items-center overflow-hidden py-2">
                <label className="w-full px-2" htmlFor="checkOut">
                  Check in
                </label>
                <input
                  className="rounded-full group-hover:bg-gray-200 transition-all outline-none py-1 px-2"
                  type="date"
                  name="checkOut"
                  id="checkOut"
                  placeholder="Search Destination"
                />
              </div>
            </label>
            <label
              htmlFor="checkOut"
              className="group transition-all after:transition-all relative hover:after:h-0 after:h-2/3 after:bg-gray-400 after:w-[1px] after:absolute after:right-0 after:top-2/4 after:-translate-y-2/4"
            >
              <div className="group group-hover:bg-gray-200 transition-all h-full px-5 rounded-full flex flex-col justify-center hover:bg-gray-300 hover:rounded-full items-center overflow-hidden py-2">
                <label className="w-full px-2" htmlFor="checkOut">
                  Check out
                </label>
                <input
                  className="rounded-full group-hover:bg-gray-200 transition-all outline-none py-1 px-2"
                  type="date"
                  name="checkOut"
                  id="checkOut"
                  placeholder="Search Destination"
                />
              </div>
            </label>
            <label
              htmlFor="checkOut"
              className="group transition-all relative "
            >
              <div className="group group-hover:bg-gray-200 transition-all h-full px-5 rounded-full flex flex-col justify-center hover:bg-gray-300 hover:rounded-full items-center overflow-hidden py-2">
                <label className="w-full px-2" htmlFor="checkOut">
                  Who
                </label>
                <p className="rounded-full group-hover:bg-gray-200 transition-all outline-none py-1 px-2">
                  Add guests
                </p>
              </div>
            </label>

            <div className="px-3 py-3 border rounded-full hover:bg-gray-200">
              <input
                className=""
                type="submit"
                name="search"
                id="search"
                value="Search"
              />
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
