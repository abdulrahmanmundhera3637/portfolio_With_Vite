import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";


const projects = [
    {
      id: 1,
      name: "Ecommerce App",
      technologies: "MERN Stack",
      image: project1,
      github: "https://github.com/abdulrahmanmundhera3637/MERN-ECOMMERCACE-APP",
      website: "https://mern-frontend-phi-mauve.vercel.app",
    },
    {
      id: 2,
      name: "Simon Says Game",
      technologies: "HTML CSS JS",
      image: project2,
      github: "https://github.com/abdulrahmanmundhera3637/Simon_Says-Game",
      website: "https://simon-says-game-orcin.vercel.app",
    },
    {
      id: 3,
      name: "Portfolio App",
      technologies: "MERN Stack",
      image: project3,
      github: "https://github.com/abdulrahmanmundhera3637/MERN-PORTFOLIO-APP",
      website: "https://my-personal-portfolio-frontend-qekm.vercel.app",
    },
  ];
  

  const Projects = () => {
    return (
      <div className="bg-black text-white py-20" id="project">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
              transform transition-transform duration-300 hover:scale-105">
                <img src={project.image} alt={project.name} className="rounded-lg mb-4 
                w-full h-48 object-cover" />
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-400 mb-4">{project.technologies}</p>
                <div className="flex gap-4">
                  <a href={project.github} className="inline-block bg-gradient-to-r 
                  from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" 
                  rel="noopener noreferrer">Source Code</a>
                  <a href={project.website} className="inline-block bg-gradient-to-r 
                  from-blue-400 to-purple-500 text-white px-4 py-2 rounded-full" target="_blank" 
                  rel="noopener noreferrer">View Website</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  

export default Projects;