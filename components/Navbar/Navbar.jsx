import React, { useState } from "react";
import logo from "./../../public/assets/images/logo.png";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Navbar = () => {
  const [search, setSearch] = useState(false);
  return (
    <section className="">
      <div
        className={`max-w-6xl 2xl:max-w-7xl m-auto ${
          search ? "block" : "absolute -top-80"
        } py-5 transition-all duration-300`}
      >
        <div className="flex items-center justify-center h-1/2 text-sm space-x-4">
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
          <div className="">
            <button onClick={() => setSearch(!search)}>X</button>
          </div>
        </div>
      </div>
      <nav className={`border-b ${search ? "hidden" : "block"} h-[80px]`}>
        <div className="max-w-6xl 2xl:max-w-7xl m-auto py-2 h-[80px]">
          <div className="flex items-center justify-between h-full">
            <Image src={logo} sizes="30vw" alt="logo" className="w-auto h-14" />
            <div className="h-full flex items-center">
              <div onClick={() => setSearch(!search)} className={`border hover:shadow-md transition-all cursor-pointer rounded-full flex items-center justify-between space-x-3 px-5 py-2 ${search && "absolute -top-28"} transition-all delay-300`}>
                <div className="px-3 relative after:h-2/3 after:bg-gray-400 after:w-[1px] after:absolute after:right-0 after:top-2/4 after:-translate-y-2/4">
                  <p>Anywhere</p>
                </div>
                <div className="px-3 relative after:h-2/3 after:bg-gray-400 after:w-[1px] after:absolute after:right-0 after:top-2/4 after:-translate-y-2/4">
                  <p>Any Week</p>
                </div>
                <div className="px-3 relative after:h-2/3 after:bg-gray-400 after:w-[1px] after:absolute after:right-0 after:top-2/4 after:-translate-y-2/4">
                  <p>Add Guests</p>
                </div>
                <div className="px-3">
                  <p className="bg-red-500 p-2 rounded-full">
                    <AiOutlineSearch className="text-xl" />
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img
                alt=""
                className="w-12 h-12 rounded-full"
                src="https://source.unsplash.com/40x40/?portrait?1"
              />
            </div>
          </div>
        </div>
      </nav>
      <section>
        <div className="max-w-6xl 2xl:max-w-7xl mx-auto py-3">
          <Swiper
            slidesPerView={2}
            spaceBetween={5}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Image
                src={logo}
                sizes="10vw"
                alt="logo"
                className="w-auto h-12"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={logo}
                sizes="10vw"
                alt="logo"
                className="w-auto h-12"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={logo}
                sizes="10vw"
                alt="logo"
                className="w-auto h-12"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={logo}
                sizes="10vw"
                alt="logo"
                className="w-auto h-12"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={logo}
                sizes="10vw"
                alt="logo"
                className="w-auto h-12"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={logo}
                sizes="10vw"
                alt="logo"
                className="w-auto h-12"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={logo}
                sizes="10vw"
                alt="logo"
                className="w-auto h-12"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </section>
  );
};

export default Navbar;
