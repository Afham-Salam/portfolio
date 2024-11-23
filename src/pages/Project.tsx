import React from "react";
import { projects } from "../data";
import { Link } from "react-router-dom";

type projects = {
  id: number;
  name: string;
  img: string;
  details: string;
};

type Props = {};

export default function Project({}: Props) {
  return (
    <div className="w-full lg:h-screen flex flex-col lg:pt-0 pt-20 gap-20  items-center justify-center bg-black">
      <p className="first-letter:text-[#fec544] text-4xl tracking-wider font-semibold text-white">
        Projects
      </p>

      <div className="flex gap-6 flex-wrap items-center justify-center lg:px-20">
        {projects.map((project: projects) => (
          <div key={project.id} className="flex flex-col gap-3">
            <img
              src={project.img}
              alt={project.name}
              className="w-[270px] hover:scale-110 overflow-hidden transition-transform hover:opacity-45 "
            />
            <p className=" text-white text-lg font-semibold r">
              {project.name}
            </p>
            <p className=" text-gray-300 text-[14px] font-semibold ">
              {project.details}
            </p>
            <div >
              <button className="text-black text-[12px] bg-[#ffbb33] font-semibold hover:bg-[#d4a434] rounded-md py-2 px-6 ">
                <Link to={"https://goku-clone.netlify.app"}>
                  View
                </Link>
              </button>
              <button className="relative text-gray-300 text-[12px] ml-5 border-2 border-[#ffbb33] bg-transparent rounded-md py-2 px-6 overflow-hidden group">
                <Link
                  to={"https://github.com/Afham-Salam/Goku-Clone"}
                  className="relative z-10 group-hover:text-black transition duration-300 ease-in-out font-semibold"
                >
                  Github
                </Link>
                <span className="absolute inset-0 bg-[#ffbb33] w-0 h-full group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </button>
            </div>
          </div>
        ))}
      </div>
    
        <button className="text-black bg-[#ffbb33] hover:bg-[#d4a434] rounded-md py-2 px-3 w-[120px]">
          <Link to={""}>Show More</Link>
        </button>

    </div>
  );
}
