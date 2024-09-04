import Image from "next/image";
import React from "react";
import { TbCertificate } from "react-icons/tb";
export const Bodybanner = () => {
  return (
    <>
      <section className="bg-slate-50">
        <div className="container lg:px-20 py-8 mx-auto">
          <div className="wrapper flex flex-wrap  ">
            <div className="finance w-[50%] px-1">
              <h4 className="mb-5 text-lg">Feel Valued & Rewarded</h4>
              <h1 className="text-4xl mb-5 font-bold w-[80%]">
                Finance Consulting for Challenging Times
              </h1>
              <p>
                We work to understand your issues and are driven to ask better
                questions in the pursuit of making work. Me contained explained
                my education. Vulgar as hearts by garret. Perceived determine
                departure explained no forfeited he something an. Contrasted
                dissimilar get joy you instrument out reasonably. Again keep.
              </p>
            </div>

            {/* image */}

            <div className="img w-[50%] flex items-center justify-end relative bg-red-300">
              <Image
                src={"/banner/banner_image.webp"}
                alt="Description"
                width={450}
                height={150}
              />

              <div className="client bg-slate-800 absolute left-[8%] bottom-[-5%] py-6 px-8">
                <div className="cirtificate flex items-center gap-3 border-b-2 border-b-gray-200 pb-2 ">
                  <span className="text-5xl text-[brown]">
                    <TbCertificate />
                  </span>

                  <div className="wrap ">
                    <h3 className="text-4xl text-[white]">98 %</h3>
                    <h6 className="text-white">Consulting Success</h6>
                  </div>
                </div>

                <div className="cirtificate flex items-center gap-3 border-b-2 border-b-gray-200 pb-2 mt-5 ">
                  <span className="text-5xl text-[brown]">
                    <TbCertificate />
                  </span>

                  <div className="wrap ">
                    <h3 className="text-4xl text-[white]">98 %</h3>
                    <h6 className="text-white">Consulting Success</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
