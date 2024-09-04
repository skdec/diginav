import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

const Card = () => {
  return (
    <section className="bg-slate-200 py-5">
      <div className="container mx-auto px-[4%]">
        <div className="wrapper grid grid-cols-2 gap-3 max-xl:grid-cols-1 `  ">
          <div className="card flex gap-10 bg-white px-[4%] rounded-lg items-center group py-9 overflow-hidden">
            <div>
              <div className="content translate-y-[25px] group-hover:translate-y-[0px] duration-300">
                <h2 className="text-[2rem] mb-3">Team Augmentation</h2>
                <p className="mb-3">
                  We provide engineers or teams tailored to your project,
                  ensuring skill and compatibility with your goals and culture.
                  They will collaborate with you closely, infusing fresh energy
                  and ideas.
                </p>
                <ul className="flex gap-6 mb-6">
                  <li className="bg-slate-300 px-[2%] py-[.5%] rounded-md">
                    cultural fit
                  </li>
                  <li className="bg-slate-300 px-[2%] py-[.5%] rounded-md">
                    cultural fit
                  </li>
                  <li className="bg-slate-300 px-[2%] py-[.5%] rounded-md">
                    cultural fit
                  </li>
                </ul>
              </div>
              <div className="btn translate-y-[90px] duration-300 group-hover:translate-y-[0px] ">
                <button className="bg-black text-white px-[3%] py-[2%] rounded-md flex items-center gap-4 text-sm ">
                  Let s Chat <GoArrowUpRight />
                </button>
              </div>
            </div>
            <div className="icon">
              <Image
                src="/card/s-3.svg"
                alt="Description of the image"
                width={1}
                height={1}
                className="duration-300  group-hover:scale-[1.5] w-[300px]"
              />
            </div>
          </div>
          <div className="card flex gap-10 bg-white px-[4%] rounded-lg items-center group py-9 overflow-hidden">
            <div>
              <div className="content translate-y-[25px] group-hover:translate-y-[0px] duration-300">
                <h2 className="text-[2rem] mb-3">Team Augmentation</h2>
                <p className="mb-3">
                  We provide engineers or teams tailored to your project,
                  ensuring skill and compatibility with your goals and culture.
                  They will collaborate with you closely, infusing fresh energy
                  and ideas.
                </p>
                <ul className="flex gap-6 mb-6">
                  <li className="bg-slate-300 px-[2%] py-[.5%] rounded-md">
                    cultural fit
                  </li>
                  <li className="bg-slate-300 px-[2%] py-[.5%] rounded-md">
                    cultural fit
                  </li>
                  <li className="bg-slate-300 px-[2%] py-[.5%] rounded-md">
                    cultural fit
                  </li>
                </ul>
              </div>
              <div className="btn translate-y-[90px] duration-300 group-hover:translate-y-[0px] ">
                <button className="bg-black text-white px-[3%] py-[2%] rounded-md flex items-center gap-4 text-sm ">
                  Let s Chat <GoArrowUpRight />
                </button>
              </div>
            </div>
            <div className="icon">
              <Image
                src="/card/s-3.svg"
                alt="Description of the image"
                width={300}
                height={200}
                className="duration-300  group-hover:scale-[1.5]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
