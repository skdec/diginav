import { Course } from "@/data/navigation/courses";
import Link from "next/link";
import React from "react";
import { SiStudyverse } from "react-icons/si";

const Dropdown = () => {
  return (
    <>
      <section>
        <div className="container mx-auto">
          <div className="wrapper flex  bg-slate-200 shadow-lg ">
            <div className="course bg-yellow-300 py-4 px-7 w-[20%]">
              <ul>
                <li className="py-4 px-7 bg-red-300  mt-1">
                  Digital Marketing
                </li>
                <li className="py-4 px-7 bg-red-300  mt-1 abc">
                  Web development
                </li>
                <li className="py-4 px-7 bg-red-300  mt-1 abc">
                  Web development
                </li>
                <li className="py-4 px-7 bg-red-300  mt-1 abc">
                  Web development
                </li>
                <li className="py-4 px-7 bg-red-300  mt-1 abc">
                  Web development
                </li>
              </ul>
            </div>

            <div className="course_type pl-20 py-4 w-[40%] bg-lime-400">
              {/* Digital Marketing */}
              <ul className="grid grid-cols-2  bg-amber-900 ">
                <li>
                  <Link href={"#"} className="flex items-center gap-6">
                    <span>
                      <SiStudyverse />
                    </span>
                    SEO
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className="flex items-center gap-6">
                    <span>
                      <SiStudyverse />
                    </span>
                    PPC
                  </Link>
                </li>
              </ul>
              {/* web Development */}
              <ul className="grid grid-cols-2  bg-orange-300 ">
                <li>
                  <Link href={"#"} className="flex items-center gap-6">
                    <span>
                      <SiStudyverse />
                    </span>
                    full stack
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className="flex items-center gap-6">
                    <span>
                      <SiStudyverse />
                    </span>
                    mern stack
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className="flex items-center gap-6">
                    <span>
                      <SiStudyverse />
                    </span>
                    mern stack
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className="flex items-center gap-6">
                    <span>
                      <SiStudyverse />
                    </span>
                    mern stack
                  </Link>
                </li>
              </ul>

              {/* Database & CMS Training */}
              <ul className="grid grid-cols-2  bg-orange-500 ">
                <li>
                  <Link href={"#"} className="flex items-center gap-6">
                    <span>
                      <SiStudyverse />
                    </span>
                    full stack
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className="flex items-center gap-6">
                    <span>
                      <SiStudyverse />
                    </span>
                    mern stack
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className="flex items-center gap-6">
                    <span>
                      <SiStudyverse />
                    </span>
                    mern stack
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className="flex items-center gap-6">
                    <span>
                      <SiStudyverse />
                    </span>
                    mern stack
                  </Link>
                </li>
              </ul>

              {/* Cyber Security */}
              <ul className="grid grid-cols-2  bg-orange-900 ">
                <li>
                  <Link href={"#"} className="flex items-center gap-6">
                    <span>
                      <SiStudyverse />
                    </span>
                    full stack
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className="flex items-center gap-6">
                    <span>
                      <SiStudyverse />
                    </span>
                    mern stack
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className="flex items-center gap-6">
                    <span>
                      <SiStudyverse />
                    </span>
                    mern stack
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className="flex items-center gap-6">
                    <span>
                      <SiStudyverse />
                    </span>
                    mern stack
                  </Link>
                </li>
              </ul>

              {/* web designing */}
              <ul className="grid grid-cols-2  bg-slate-800 ">
                <li>
                  <Link href={"#"} className="flex items-center gap-6">
                    <span>
                      <SiStudyverse />
                    </span>
                    full stack
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className="flex items-center gap-6">
                    <span>
                      <SiStudyverse />
                    </span>
                    mern stack
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className="flex items-center gap-6">
                    <span>
                      <SiStudyverse />
                    </span>
                    mern stack
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className="flex items-center gap-6">
                    <span>
                      <SiStudyverse />
                    </span>
                    mern stack
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dropdown;
