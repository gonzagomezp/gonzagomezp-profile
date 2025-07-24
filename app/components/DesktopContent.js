/** @format */

import { Html } from "@react-three/drei";
import { useState, useRef, useEffect } from "react";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Education from "./Education";
import About from "./About";

export default function DesktopContent() {
  const [currentSection, setCurrentSection] = useState("home");
  const [scrollY, setScrollY] = useState(0);
  const contentRef = useRef(null);
  const [maxScroll, setMaxScroll] = useState(0);

  // Calculate max scroll when section changes
  useEffect(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;
      const containerHeight = 980; // Fixed container height
      const calculatedMaxScroll = Math.max(0, contentHeight - containerHeight + 3000); // Increased buffer
      setMaxScroll(calculatedMaxScroll);
      setScrollY(0); // Reset scroll when changing sections
    }
  }, [currentSection]);

  const handleScroll = (direction) => {
    const scrollAmount = 200; // Increased scroll amount
    if (direction === "up") {
      setScrollY((prev) => Math.max(0, prev - scrollAmount));
    } else {
      setScrollY((prev) => Math.min(maxScroll, prev + scrollAmount));
    }
  };

  const renderCurrentSection = () => {
    switch (currentSection) {
      case "about":
        return <About />;
      case "work":
        return <WorkExperience />;
      case "projects":
        return <Projects />;
      case "skills":
        return <Skills />;
      case "education":
        return <Education />;
      case "contact":
        return <Contact />;
      default:
        return (
          <div className="text-center">
            <div className="text-[50px] mb-4 text-green-300">{">>> WELCOME TO MY 3D PORTFOLIO <<<"}</div>
            <div className="text-[120px] text-green-400 font-bold tracking-wider">GONZALO GÓMEZ PIZARRO</div>
            <div className="text-[50px] mb-8 text-green-300">
              [JUNIOR FULL STACK ENGINEER] • [PYTHON | REACT.JS | GCP]
            </div>

            <div className="text-center text-[30px] mb-[120px] opacity-60 mt-16 pb-8">
              {"< READY FOR NEW OPPORTUNITIES >"}
              <br />
              {"SELECT A SECTION TO EXPLORE..."}
            </div>
            {/* Navigation Menu - 3x2 Grid */}
            <div className="grid grid-cols-3 gap-8 mb-12">
              <button
                onClick={() => setCurrentSection("about")}
                className="bg-green-800 border-4 border-green-300 text-green-100 p-8 rounded-xl text-[50px] font-bold hover:bg-green-700 hover:text-white hover:border-green-200 transition-all duration-300 hover:shadow-2xl hover:shadow-green-400/80 transform"
                style={{
                  textShadow: "0 0 20px rgba(0, 255, 0, 0.8)",
                  boxShadow: "0 0 30px rgba(0, 255, 0, 0.4), inset 0 0 20px rgba(0, 255, 0, 0.1)",
                }}
              >
                [1] ABOUT
              </button>
              <button
                onClick={() => setCurrentSection("work")}
                className="bg-green-800 border-4 border-green-300 text-green-100 p-8 rounded-xl text-[50px] font-bold hover:bg-green-700 hover:text-white hover:border-green-200 transition-all duration-300 hover:shadow-2xl hover:shadow-green-400/80 transform"
                style={{
                  textShadow: "0 0 20px rgba(0, 255, 0, 0.8)",
                  boxShadow: "0 0 30px rgba(0, 255, 0, 0.4), inset 0 0 20px rgba(0, 255, 0, 0.1)",
                }}
              >
                [2] EXPERIENCE
              </button>
              <button
                onClick={() => setCurrentSection("projects")}
                className="bg-green-800 border-4 border-green-300 text-green-100 p-8 rounded-xl text-[50px] font-bold hover:bg-green-700 hover:text-white hover:border-green-200 transition-all duration-300 hover:shadow-2xl hover:shadow-green-400/80 transform"
                style={{
                  textShadow: "0 0 20px rgba(0, 255, 0, 0.8)",
                  boxShadow: "0 0 30px rgba(0, 255, 0, 0.4), inset 0 0 20px rgba(0, 255, 0, 0.1)",
                }}
              >
                [3] PROJECTS
              </button>
              <button
                onClick={() => setCurrentSection("skills")}
                className="bg-green-800 border-4 border-green-300 text-green-100 p-8 rounded-xl text-[50px] font-bold hover:bg-green-700 hover:text-white hover:border-green-200 transition-all duration-300 hover:shadow-2xl hover:shadow-green-400/80 transform"
                style={{
                  textShadow: "0 0 20px rgba(0, 255, 0, 0.8)",
                  boxShadow: "0 0 30px rgba(0, 255, 0, 0.4), inset 0 0 20px rgba(0, 255, 0, 0.1)",
                }}
              >
                [4] SKILLS
              </button>
              <button
                onClick={() => setCurrentSection("education")}
                className="bg-green-800 border-4 border-green-300 text-green-100 p-8 rounded-xl text-[50px] font-bold hover:bg-green-700 hover:text-white hover:border-green-200 transition-all duration-300 hover:shadow-2xl hover:shadow-green-400/80 transform"
                style={{
                  textShadow: "0 0 20px rgba(0, 255, 0, 0.8)",
                  boxShadow: "0 0 30px rgba(0, 255, 0, 0.4), inset 0 0 20px rgba(0, 255, 0, 0.1)",
                }}
              >
                [5] EDUCATION
              </button>
              <button
                onClick={() => setCurrentSection("contact")}
                className="bg-green-800 border-4 border-green-300 text-green-100 p-8 rounded-xl text-[50px] font-bold hover:bg-green-700 hover:text-white hover:border-green-200 transition-all duration-300 hover:shadow-2xl hover:shadow-green-400/80 transform"
                style={{
                  textShadow: "0 0 20px rgba(0, 255, 0, 0.8)",
                  boxShadow: "0 0 30px rgba(0, 255, 0, 0.4), inset 0 0 20px rgba(0, 255, 0, 0.1)",
                }}
              >
                [6] CONTACT
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <Html transform occlude position={[17.6, 114, 5.75]} rotation={[0, Math.PI / 2 + Math.PI, 0]} scale={1}>
      <div
        className="w-[2080px] h-[1200px] bg-black border-4 border-green-500 text-green-400 p-8 rounded-xl font-mono shadow-2xl relative"
        style={{
          fontFamily: "'Courier New', 'Lucida Console', 'Monaco', monospace",
          background: "linear-gradient(45deg, #001100, #002200)",
          boxShadow: "0 0 50px rgba(0, 255, 0, 0.3), inset 0 0 50px rgba(0, 255, 0, 0.1)",
        }}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between mb-6 border-b-2 border-green-500 pb-4">
          <div className="flex items-center space-x-4">
            <div className="w-6 h-6 rounded-full bg-red-500"></div>
            <div className="w-6 h-6 rounded-full bg-yellow-500"></div>
            <div className="w-6 h-6 rounded-full bg-green-500"></div>
          </div>
          <div className="text-[40px] text-green-300">PORTFOLIO.EXE</div>
          {currentSection !== "home" && (
            <button
              onClick={() => setCurrentSection("home")}
              className="bg-green-800 border-4 border-green-300 text-green-100 px-8 py-4 rounded-xl text-[40px] font-bold hover:bg-green-700 hover:text-white hover:border-green-200 transition-all duration-300 hover:shadow-2xl hover:shadow-green-400/80 transform"
              style={{
                textShadow: "0 0 20px rgba(0, 255, 0, 0.8)",
                boxShadow: "0 0 30px rgba(0, 255, 0, 0.4), inset 0 0 20px rgba(0, 255, 0, 0.1)",
              }}
            >
              [HOME]
            </button>
          )}
        </div>

        {/* Custom Scroll Controls */}
        {currentSection !== "home" && (
          <div className={"absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-10"}>
            <button
              onClick={() => handleScroll("up")}
              disabled={scrollY === 0}
              className="w-[80px] h-[100px] bg-blue-900 border-2 border-blue-400 text-blue-300 rounded-lg text-[35px] font-bold hover:bg-blue-800 hover:text-blue-200 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ textShadow: "0 0 10px rgba(59, 130, 246, 0.5)" }}
            >
              ▲
            </button>
            <button
              onClick={() => handleScroll("down")}
              disabled={scrollY >= maxScroll}
              className="w-[80px] h-[100px] bg-blue-900 border-2 border-blue-400 text-blue-300 rounded-lg text-[35px] font-bold hover:bg-blue-800 hover:text-blue-200 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ textShadow: "0 0 10px rgba(59, 130, 246, 0.5)" }}
            >
              ▼
            </button>
          </div>
        )}

        {/* Content Area with scroll functionality */}
        <div
          className="h-[980px] overflow-hidden pr-20 relative"
          style={{
            clipPath: "inset(0 0 0 0)",
          }}
        >
          <div
            ref={contentRef}
            className="absolute top-0 left-0 w-full"
            style={{
              transform: `translateY(-${scrollY}px)`,
              transition: "transform 0.3s ease-out",
            }}
          >
            {renderCurrentSection()}
          </div>
        </div>
      </div>
    </Html>
  );
}
