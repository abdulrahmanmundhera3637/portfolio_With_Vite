import React from 'react';
import heroImg from "../assets/me.jpg";

const Hero = () => {
  const phoneNumber = "+923043637810";
  const resumeLink = "/Resume.pdf"; 

  return (
    <div className='bg-black text-white text-center py-16'>
      <img 
        src={heroImg} 
        alt="Abdul Rahman" 
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'
      />
      <h1 className='text-4xl font-bold'>
        I am{" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
          Abdul Rahman
        </span>
        , Full-Stack Developer
      </h1>
      <p className='mt-4 text-lg text-gray-300'>
        I am specialized in building modern and responsive web applications.
      </p>
      <div className='mt-8 space-x-4 flex justify-center'>
        <a 
          href={`tel:${phoneNumber}`} 
          className='bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
        >
          Contact With Me
        </a>
        <a 
          href={resumeLink} 
          download="Resume.pdf" 
          className='bg-gradient-to-r from-pink-400 to-yellow-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
        >
          Resume
        </a>
      </div>
    </div>
  );
}

export default Hero;
