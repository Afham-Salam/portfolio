import React from 'react'
import { skills } from '../data'


type skills = {
  id: number;
  name: string;
  img: string;
  
};

type Props = {}

export default function Skill({}: Props) {
  return (
    <div className='w-full lg:h-screen flex flex-col lg:pt-0 pt-20 gap-20  items-center justify-center bg-black'>
       <p className="first-letter:text-[#fec544] text-4xl tracking-wider font-semibold text-white">
        Skills
      </p>

      <div className="flex gap-6 flex-wrap justify-center items-center lg:px-20 ">
  {skills.map((skill: skills) => (
    <div
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