import React, { useState } from 'react'
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { Link } from 'react-router-dom';
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
    <div  className="w-full md:h-screen lg:h-screen flex flex-col lg:pt-0 pt-20 gap-20  items-center justify-center bg-black">
      
        <p className="text-center text-3xl text-white font-semibold tracking-wider  first-letter:text-[#fec544] ">
          CONTACT ME
        </p>
        <div className="flex flex-col md:flex-row  justify-center items-center gap-14">
          {/* Left Section */}
          <form
            onSubmit={handleSubmit}
            className="bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-6 flex flex-col gap-4 w-full lg:w-[500px]"
            data-aos="fade-right"
          >
            <p className="text-white text-2xl font-semibold">Just Say Hello</p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full p-3 rounded-md bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg text-white  focus:border-[#fec544] transition"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="w-full p-3 rounded-md bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg text-white  focus:border-[#fec544] transition"
              required
            />
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Your Subject"
              className="w-full p-3 rounded-md bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg text-white  focus:border-[#fec544] transition"
              required
            />
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
              className="w-full p-3 rounded-md bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg text-white  focus:border-[#fec544] transition"
              required
            />
            <button
              type="submit"
              className="self-start text-black bg-[#ffbb33] hover:bg-[#d4a434] rounded-md py-2  w-[120px]"
            >
              Send Message
            </button>
          </form>

          {/* Right Section */}
          <div
            className="flex flex-col justify-center gap-8 w-full lg:w-1/2  md:mb-14"
            data-aos="fade-left"
          >
            <p className="text-white text-2xl">Contact Info</p>

            {/* Contact Information */}
            <div className="flex items-center gap-4 ">
              <FaEnvelope className="text-[#fff] w-11 h-11 p-3 rounded-full bg-[#070d1b] border-0 border-[#3f4551]" />
              <div>
                <strong className="text-white text-lg">Email</strong>
                <p className="text-gray-400">afhamsalam8060@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaPhone className="text-white w-11 h-11 p-3 rounded-full bg-[#070d1b] border-0 border-[#3f4551]" />
              <div>
                <strong className="text-white text-lg">Phone</strong>
                <p className="text-gray-400">+91 7594078322</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MdLocationPin  className="text-[#fff] w-11 h-11 p-3 rounded-full bg-[#070d1b] border-0 border-[#3f4551]" />
              <div>
                <strong className="text-white text-lg">Location</strong>
                <p className="text-gray-400">India</p>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <p className="text-gray-400 mb-4">
                Visit my social profile and get connected
              </p>
              <div className="flex gap-5">
            <Link to={"https://www.linkedin.com/in/afham-salam?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                />
              </svg>
            </Link>
            <Link to={"https://github.com/Afham-Salam"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                />
              </svg>
            </Link>
            <Link to={"mailto:afhamsalam8060@gmail.com"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20"><path fill="white" fill-rule="evenodd" d="m7.172 11.334l2.83 1.935l2.728-1.882l6.115 6.033q-.242.079-.512.08H1.667c-.22 0-.43-.043-.623-.12zM20 6.376v9.457c0 .247-.054.481-.15.692l-5.994-5.914zM0 6.429l6.042 4.132l-5.936 5.858A1.7 1.7 0 0 1 0 15.833zM18.333 2.5c.92 0 1.667.746 1.667 1.667v.586L9.998 11.648L0 4.81v-.643C0 3.247.746 2.5 1.667 2.5z"/></svg>
            </Link>
            <Link to={"https://api.whatsapp.com/send?phone=7594078322"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
                />
              </svg>
            </Link>
            <Link to={"https://www.instagram.com/.afham_.?igsh=MTVjZmxocGtsbXZ2bA=="}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  fill-rule="evenodd"
                  d="M7.465 1.066C8.638 1.012 9.012 1 12 1s3.362.013 4.534.066s1.972.24 2.672.511c.733.277 1.398.71 1.948 1.27c.56.549.992 1.213 1.268 1.947c.272.7.458 1.5.512 2.67C22.988 8.639 23 9.013 23 12s-.013 3.362-.066 4.535c-.053 1.17-.24 1.97-.512 2.67a5.4 5.4 0 0 1-1.268 1.949c-.55.56-1.215.992-1.948 1.268c-.7.272-1.5.458-2.67.512c-1.174.054-1.548.066-4.536.066s-3.362-.013-4.535-.066c-1.17-.053-1.97-.24-2.67-.512a5.4 5.4 0 0 1-1.949-1.268a5.4 5.4 0 0 1-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C1.012 15.361 1 14.987 1 12s.013-3.362.066-4.534s.24-1.972.511-2.672a5.4 5.4 0 0 1 1.27-1.948a5.4 5.4 0 0 1 1.947-1.269c.7-.271 1.5-.457 2.67-.511m8.98 1.98c-1.16-.053-1.508-.064-4.445-.064s-3.285.011-4.445.064c-1.073.049-1.655.228-2.043.379c-.513.2-.88.437-1.265.822a3.4 3.4 0 0 0-.822 1.265c-.151.388-.33.97-.379 2.043c-.053 1.16-.064 1.508-.064 4.445s.011 3.285.064 4.445c.049 1.073.228 1.655.379 2.043c.176.477.457.91.822 1.265c.355.365.788.646 1.265.822c.388.151.97.33 2.043.379c1.16.053 1.507.064 4.445.064s3.285-.011 4.445-.064c1.073-.049 1.655-.228 2.043-.379c.513-.2.88-.437 1.265-.822c.365-.355.646-.788.822-1.265c.151-.388.33-.97.379-2.043c.053-1.16.064-1.508.064-4.445s-.011-3.285-.064-4.445c-.049-1.073-.228-1.655-.379-2.043c-.2-.513-.437-.88-.822-1.265a3.4 3.4 0 0 0-1.265-.822c-.388-.151-.97-.33-2.043-.379m-5.85 12.345a3.669 3.669 0 0 0 4-5.986a3.67 3.67 0 1 0-4 5.986M8.002 8.002a5.654 5.654 0 1 1 7.996 7.996a5.654 5.654 0 0 1-7.996-7.996m10.906-.814a1.337 1.337 0 1 0-1.89-1.89a1.337 1.337 0 0 0 1.89 1.89"
                  clip-rule="evenodd"
                />
              </svg>
            </Link>
          </div>
            </div>
          </div>
       
        </div>
        
        <p className="text-sm text-white w-full bg-black  text-center">
        
          © {new Date().getFullYear()} Afham Salam. All Rights Reserved.
        </p>
      </div>
   
  )
}