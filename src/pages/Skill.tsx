
import { useEffect } from 'react';
import { skills } from '../data'
import "aos/dist/aos.css";
import Aos from 'aos';



type skills = {
  id: number;
  name: string;
  img: string;
  
};

type Props = {}

export default function Skill({}: Props) {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Default easing
     
    });
  }, []);
  return (
    <div  id="skills" className='w-full  lg:h-screen flex flex-col lg:pt-0 pt-20 gap-20  items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black'>
       <p data-aos="fade-down" className="text-5xl lg:text-5xl tracking-wider font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
     SKILLS
    </p>

      <div  className="flex gap-6 flex-wrap justify-center items-center lg:px-20 ">
  {skills.map((skill: skills) => (
    <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"
      key={skill.name}
      
      className="flex flex-col items-center justify-center h-40 w-48 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
    >
      <img
        src={skill.img}
        alt={skill.name}
        className="w-10 h-40 md:h-40 object-contain"
      />
      <p className="mt-2 text-white text-lg font-semibold pb-4">{skill.name}</p>
    </div>
  ))}
</div>

       
       

      












    </div>
  )
}