
type Props = {};

export default function About({}: Props) {
  return (
    <div className="w-full  lg:h-screen flex flex-col lg:pt-0 pt-20 gap-20  items-center justify-center bg-black">
      <p className="first-letter:text-[#fec544] text-4xl tracking-wider font-semibold text-white">
        ABOUT
        
      </p>

      <div className="flex md:flex-row flex-col lg:gap-32 gap-8 md:px-6 px-2 lg:px-0  ">
        <div className=" text-justify text-gray-300 lg:w-[500px]  p-2 leading-relaxed">
          I'm a passionate MERN stack developer with a strong foundation in
          building dynamic and responsive web applications. With expertise in
          MongoDB, Express.js, React, and Node.js, I create seamless and
          efficient solutions tailored to meet user needs. My journey in web
          development is fueled by continuous learning and a commitment to
          delivering high-quality, user-friendly experiences.
        </div>

        <div className="bg-black p-2 ">
          <div className="lg:w-[22rem] md:w-[19rem] w-fit  bg-white bg-opacity-10 border-0 backdrop-blur-lg rounded-lg shadow-lg p-6">
            <p className="text-white text-xl font-bold first-letter:text-[#fec544] tracking-wider">
              Education
            </p>
            <p className="text-gray-300 mt-2">
              Bachelor of Computer Application
            </p>
            <p className="text-gray-300 mt-2">Calicut University</p>
            <small className="text-gray-300">2021-2024</small>
          </div>
        </div>
      </div>
      <a
        href="/JaysonDas.pdf"
        download
        className="text-black bg-[#ffbb33] hover:bg-[#d4a434] font-semibold py-2 rounded w-[150px] text-center inline-block"
      >
        Download CV
      </a>
    </div>
  );
}
