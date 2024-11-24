
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
    <div className="w-full  md:h-screen lg:h-screen h-screen flex flex-col lg:pt-0 pt-20 gap-20  items-center justify-center bg-black">
      <p className="first-letter:text-[#fec544] text-4xl tracking-wider font-semibold text-white">
        PROJECTS
      </p>

      <div className="flex gap-6 flex-wrap items-center justify-center lg:px-20">
        {projects.map((project: projects) => (
          <div
            key={project.id}
            className="bg-[#1f1f1f] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center p-5 gap-4"
          >
            {/* Project Image */}
            <div className="overflow-hidden rounded-md">
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-[200px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Project Name */}
            <h3 className="text-[#ffbb33] text-xl font-semibold text-center">
              {project.name}
            </h3>

            {/* Project Details */}
            <p className="text-gray-300 text-sm text-center leading-relaxed">
              {project.details}
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              {/* View Button */}
              <Link
                to={"https://goku-clone.netlify.app"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black text-sm bg-gradient-to-r from-[#ffbb33] to-[#d4a434] font-semibold rounded-md py-2 px-6 hover:opacity-90 transition duration-300 flex justify-center items-center"
              >
                View
              </Link>
              {/* GitHub Button */}
              <Link
                to={"https://github.com/Afham-Salam/Goku-Clone"}
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-gray-300 text-sm border-2 border-[#ffbb33] bg-transparent rounded-md py-2 px-6 overflow-hidden group"
              >
                <span className="relative z-10 group-hover:text-black transition duration-300 ease-in-out font-semibold">
                  Github
                </span>
                <span className="absolute inset-0 bg-[#ffbb33] w-0 h-full group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </Link>
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
