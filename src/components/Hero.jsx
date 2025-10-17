import React from "react";
import TiltedCard from "../ui/TiltedCard";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Skills from "./Skills";

const Hero = () => {
  return (
    <div className="relative bg-transparent w-full h-[600px]">

      {/* Text on top but still transparent to see effect */}
      <div className="bg-transparent absolute inset-0 z-10 flex justify-around items-center">
        <div className="bg-transparent">
          <div className="bg-transparent py-2">Hi, I am</div>
          <div className="bg-transparent font-bold text-3xl">Aditya Jha</div>
          <p className="bg-transparent text-xl mt-4 text-white/70 w-4/5">
            I am an aspiring software developer, currently exploring full-stack
            web development and problem solving.
          </p>
          <div className="flex bg-transparent">
            <a
              href="https://github.com/Adi-Codes-well/" // replace with your actual GitHub URL
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github
                size={32}
                className="mt-4 p-2 stroke-slate-500 cursor-pointer hover:stroke-white"
              />
            </a>
            <a
              href="https://linkedin.com/in/adicodeswell" // replace with your actual GitHub URL
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin
                size={32}
                className="mt-4 p-2 stroke-slate-500 cursor-pointer hover:stroke-white
            "
              />
            </a>
            <a
              href="https://mail.google.com/mail/u/2/#inbox?compose=GTvVlcRzDDMSFRKGfpRCkcQlMnwWkzbFFMhFqCqtLwNHFzxgcxpnZGtgZlrgsRZpNWdHqnXLjtVCV" // replace with your actual GitHub URL
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail
                size={32}
                className="mt-4 p-2 stroke-slate-500 cursor-pointer hover:stroke-white"
              />
            </a>
          </div>
        </div>
        <TiltedCard
          imageSrc="/MyImage.jpg"
          captionText="Aditya Jha"
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={8}
          scaleOnHover={1.01}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={false}
          overlayContent={<p className="tilted-card-demo-text">Aditya Jha</p>}
        />
        {/* <h1 className="text-5xl font-bold text-white/90">Welcome to My Portfolio</h1> */}
      </div>
    </div>
  );
};

export default Hero;
