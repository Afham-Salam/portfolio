import React, { useState } from 'react'
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaPhone, FaWhatsapp } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
// import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';


type Props = {}

export default function Contact({}: Props) {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const serviceId = 'service_brmu3tb';
    const templateId = 'template_elcd3vd';
    const publicKey = 'Sy9ksp3Jx6v1FNcVr';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Afham Salam',
      subject:subject,
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully", response);
        alert('Message sent successfully!');
        // Reset form fields
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      })
      .catch((error) => {
        console.error("Error sending email", error);
        alert('Failed to send message. Please try again.');
      });
  };


  return (
    <div id='contact' className="w-full lg:h-screen flex flex-col lg:pt-10 pt-20 items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
 

  {/* Heading with Margin */}
  <p className="text-5xl lg:text-5xl text-center tracking-wider font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 z-10 mt-0">
  GET IN TOUCH
  </p>

  <div className="flex flex-col md:flex-row justify-center items-center gap-16 mt-10 z-10">
    {/* Form Section */}
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 bg-opacity-90 rounded-xl p-6 flex flex-col gap-4 w-full lg:w-[450px] shadow-lg"
    >
      <p className="text-white text-xl font-semibold">Just Say Hello</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name"
        className="w-full p-3 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-yellow-500 transition"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your Email"
        className="w-full p-3 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-yellow-500 transition"
        required
      />
      <input
        type="text"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        placeholder="Your Subject"
        className="w-full p-3 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-yellow-500 transition"
        required
      />
      <textarea
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={4}
        className="w-full p-3 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-yellow-500 transition"
        required
      />
      <button
        type="submit"
        className="text-black bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 hover:from-yellow-400 hover:to-yellow-600 rounded-md py-2 w-[140px] font-bold shadow-lg  transition"
      >
        Send Message
      </button>
    </form>

    {/* Contact Info Section */}
    <div className="flex flex-col gap-6">
      <p className="text-white text-xl font-semibold">Contact Info</p>
      <div className="grid grid-cols-1 gap-4">
        {/* Email */}
        <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-800 shadow-md hover:shadow-lg transition">
          <FaEnvelope className="text-yellow-500 w-8 h-8" />
          <div>
            <strong className="text-white">Email</strong>
            <p className="text-gray-400">afhamsalam8060@gmail.com</p>
          </div>
        </div>
        {/* Phone */}
        <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-800 shadow-md hover:shadow-lg transition">
          <FaPhone className="text-yellow-500 w-8 h-8" />
          <div>
            <strong className="text-white">Phone</strong>
            <p className="text-gray-400">+91 7594078322</p>
          </div>
        </div>
        {/* Location */}
        <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-800 shadow-md hover:shadow-lg transition">
          <MdLocationPin className="text-yellow-500 w-8 h-8" />
          <div>
            <strong className="text-white">Location</strong>
            <p className="text-gray-400">India</p>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div>
        <p className="text-gray-400 mb-2">Visit my social profiles</p>
        <div className="flex gap-9">
          <a href="https://www.linkedin.com/in/afham-salam" target="_blank" >
            <FaLinkedin size={28} className="text-white hover:text-yellow-500 transition" />
          </a>
          <a href="https://github.com/Afham-Salam" target="_blank" >
            <FaGithub size={28} className="text-white hover:text-yellow-500 transition" />
          </a>
          <a href="mailto:afhamsalam8060@gmail.com" >
            <FaEnvelope size={28} className="text-white hover:text-yellow-500 transition" />
          </a>
          <a href="https://api.whatsapp.com/send?phone=7594078322" target="_blank" >
            <FaWhatsapp size={28} className="text-white hover:text-yellow-500 transition" />
          </a>
          <a href="https://www.instagram.com/.afham_." target="_blank" >
            <FaInstagram size={28} className="text-white hover:text-yellow-500 transition" />
          </a>
        </div>
      </div>
    </div>
  </div>

  
</div>


   
  )
}