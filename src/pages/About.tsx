
type Props = {};

export default function About({}: Props) {
  return (
    <div id="about" className="w-full md:h-full lg:h-screen flex flex-col lg:pt-0 pt-20 gap-20 items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black">
    
    <p className="text-5xl lg:text-5xl tracking-wider font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
      ABOUT
    </p>
  
   
    <div className="flex md:flex-row flex-col lg:gap-24 gap-12 px-4 lg:px-0 items-center">
      {/* About Text */}
      <div  data-aos="fade-left" className="text-justify text-gray-300 lg:w-[500px] leading-relaxed p-4 border-l-4 border-yellow-500 bg-opacity-10 bg-gray-700 rounded-lg shadow-lg">
        <p>
          I'm a passionate MERN stack developer with a strong foundation in
          building dynamic and responsive web applications. With expertise in
          MongoDB, Express.js, React, and Node.js, I create seamless and efficient
          solutions tailored to meet user needs. My journey in web development is
          fueled by continuous learning and a commitment to delivering
          high-quality, user-friendly experiences.
        </p>
      </div>
  
      {/* Education Section */}
      <div className="lg:w-[22rem] md:w-[19rem] w-fit bg-gradient-to-b from-yellow-500 via-yellow-400 to-yellow-300 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
        <div className="bg-black bg-opacity-70 rounded-xl p-6">
          <p className="text-2xl font-bold text-white tracking-wide mb-4">
            Education
          </p>
          <p className="text-gray-300 text-lg font-medium">
            Bachelor of Computer Application
          </p>
          <p className="text-gray-300 mt-2 text-sm">Calicut University</p>
          <small className="text-gray-400 block mt-1">2021-2024</small>
        </div>
      </div>
    </div>
  
    {/* Download CV Button */}
    <a
      href="/JaysonDas.pdf"
      download
      className="bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 hover:from-yellow-400 hover:to-yellow-600 text-black font-bold py-3 px-6 rounded-md shadow-md transform hover:scale-105 transition-transform duration-300"
    >
      Download CV
    </a>
  </div>
  
  );
}
