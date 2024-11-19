import React from 'react'
import Carousel from "../Components/Carousel";
import projectImage1 from "../Assets/beach ticketr site/cap.png";
import projectImage2 from "../Assets/beach ticketr site/MERCH STUNNER.png";
import projectImage3 from "../Assets/beach ticketr site/MERCH STUNNER.png";

const Section3 = () => {
  const projectData = [
    {
      title: "Cap",
      image: projectImage2,
      description: "A brief description of Project 1.",
      link: "https://movie-app-tan-one.vercel.app/", // Link to the project
    },
    {
      title: "Project 2",
      image: projectImage1,
      description: "A brief description of Project 2.",
    },
    {
      title: "Project 3",
      image: projectImage3,
      description: "A brief description of Project 3.",
    },
  ];
  return (
    <div id="Section3" className="bg-black">
      <h2 className="text-3xl font-bold text-center mb-6">Products</h2>
      <div className="max-w-4xl mx-auto">
        <Carousel items={projectData} className="cursor-pointer" />
      </div>
    </div>
  );
}

export default Section3
