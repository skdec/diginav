"use client";
import Image from "next/image";
import Link from "next/link";
import { ContactData, SocialIcons } from "@/data/navigation/nav";
import { FaAngleDown } from "react-icons/fa6";
import Hamburger from "hamburger-react";
import { useState } from "react";
import Dropdown from "./dropdown";

const MainNav = () => {
  return (
    <>
      <section className="bg-[rgb(29,32,39)] max-md:hidden ">
        <div className="container xl:px-20 mx-auto sm:px-4">
          <header className="wrapper flex flex-wrap py-2">
            <ul className="flex text-white gap-8 w-[80%] xl:pl-52 justify-center max-lg:w-[100%]  ">
              {ContactData.map((item, i) => {
                const { contact, icon } = item;
                return (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-[brown] text-2xl"> {icon}</span>
                    {contact}
                  </li>
                );
              })}
            </ul>
            {/* socila icons */}

            <ul className="flex text-white gap-2 w-[20%] justify-end max-lg:hidden ">
              {SocialIcons.map((item, i) => {
                const { icons } = item;
                return (
                  <li key={i} className="flex items-center ">
                    <span className="p-2"> {icons}</span>
                  </li>
                );
              })}
            </ul>
          </header>
        </div>
      </section>
      <Nav />
    </>
  );
};

export default MainNav;

// navigationmenu

const Nav = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className="brand relative  ">
        <div className="container xl:px-20 mx-auto ">
          <nav className="header flex  py-2">
            <div className=" w-[20%] max-lg:w-[45%]">
              <Image
                src="/logo/brand.png"
                alt="Description"
                width={210}
                height={150}
              />
            </div>

            <ul className="nav flex items-center gap-12 justify-center w-[65%] xl:text-sm 2xl:text-lg max-lg:hidden">
              <li>
                <Link href="#">Home</Link>
              </li>
              <li className="hidden-shown">
                <Link href="#" className="flex  items-center gap-1">
                  Courses <FaAngleDown />
                  <Dropdown />
                </Link>
              </li>
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Corporate Training</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>

            <div className="btn w-[15%]  flex justify-end flex-wrap max-lg:w-[40%] ">
              <button
                className="bg-[brown] text-white py-4 rounded-md  px-7 "
                type="button"
              >
                <Link href={"#"}> Get IN Touch</Link>
              </button>
            </div>
            <div className="hamburger w-[5%] flex justify-center items-center lg:hidden">
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
          </nav>
        </div>
      </section>
    </>
  );
};
