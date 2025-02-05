
import { useEffect } from "react";
import { projects } from "../data";
import { Link } from "react-router-dom";
import Aos from "aos";

type projects = {
  id: number;
  name: string;
  img: string;
  details: string;
  github: string;
  live: string;
};

type Props = {};

export default function Project({}: Props) {
  useEffect(() => {
      Aos.init({
        duration: 1000, // Animation duration in milliseconds
        easing: "ease-in-out", // Default easing
       
      });
    }, []);
  return (
    <div id="projects" className="w-full  flex flex-col items-center justify-center gap-12 lg:pt-10 pt-20 bg-gradient-to-b from-black via-gray-900 to-black">
    
    <p data-aos="fade-down" className="text-5xl tracking-wider font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
      PROJECTS
    </p>
  
    {/* Projects Container */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-20">
      {projects.map((project: projects) => (
        <div
        data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"
          key={project.id}
          className="bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center p-5 gap-2 transform hover:-translate-y-2"
        >
          {/* Project Image */}
          <div className="relative overflow-hidden rounded-md">
             <img
              src={project.img}
              alt={project.name}
              className=" h-[200px] object-cover hover:scale-110 transition-transform duration-500"
            /> 
            
          </div>
  
          {/* Project Name */}
          <p className="text-yellow-400 text-md font-semibold text-center ">
            {project.name}
          </p>
          <p className="text-white w-[250px] text-center  font-semibold text-sm leading-relaxed">
                {project.details}
            </p>
          
  
          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            {/* View Button */}
            <Link
              to={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-md py-2 px-5 hover:opacity-90 transition duration-300"
            >
              View
            </Link>
            {/* GitHub Button */}
            <Link
              to={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-gray-300 border-2 border-yellow-400 rounded-md py-2 px-5 overflow-hidden group"
            >
              <span className="relative z-10 group-hover:text-black transition duration-300 ease-in-out font-semibold">
                GitHub
              </span>
              <span className="absolute inset-0 bg-yellow-400 w-0 h-full group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  
    {/* Show More Button */}
    {/* <div>
      <button className="text-black bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 rounded-md py-2 px-6 font-semibold shadow-md hover:shadow-lg transition duration-300">
        <Link to={""}>Show More</Link>
      </button>
    </div> */}
  </div>
  
  );
}
