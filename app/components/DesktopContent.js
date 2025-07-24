/** @format */

import { Html } from "@react-three/drei";
import { useState, useRef, useEffect } from "react";
import WorkExperience from "./desktop/WorkExperience";
import Projects from "./desktop/Projects";
import Skills from "./desktop/Skills";
import Contact from "./desktop/Contact";
import Education from "./desktop/Education";
import About from "./desktop/About";

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
    const scrollAmount = 400; // Increased scroll amount
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
            <div className="text-[50px] mb-4 text-green-400">{">>> WELCOME TO MY 3D PORTFOLIO <<<"}</div>
            <div className="text-[120px] text-gray-100 font-bold tracking-wider mb-4">GONZALO GÓMEZ PIZARRO</div>
            <div className="text-[50px] mb-8 text-gray-400">
              [JUNIOR FULL STACK ENGINEER] • [PYTHON | REACT.JS | GCP]
            </div>

            <div className="text-center text-[30px] mb-[120px] opacity-60 mt-16 pb-8 text-gray-500">
              {"< READY FOR NEW OPPORTUNITIES >"}
              <br />
              {"SELECT A SECTION TO EXPLORE..."}
            </div>
            {/* Navigation Menu - 3x2 Grid */}
            <div className="grid grid-cols-3 gap-8 mb-12">
              <button
                onClick={() => setCurrentSection("about")}
                className="bg-gray-900 text-gray-300 p-8 rounded-xl text-[50px] font-bold hover:bg-gray-800 hover:text-green-400 hover:border-green-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20"
                style={{
                  textShadow: "0 0 10px rgba(156, 163, 175, 0.3)",
                  boxShadow: "0 0 15px rgba(0, 0, 0, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.05)",
                }}
              >
                [1] ABOUT
              </button>
              <button
                onClick={() => setCurrentSection("work")}
                className="bg-gray-900 text-gray-300 p-8 rounded-xl text-[50px] font-bold hover:bg-gray-800 hover:text-green-400 hover:border-green-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20"
                style={{
                  textShadow: "0 0 10px rgba(156, 163, 175, 0.3)",
                  boxShadow: "0 0 15px rgba(0, 0, 0, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.05)",
                }}
              >
                [2] EXPERIENCE
              </button>
              <button
                onClick={() => setCurrentSection("projects")}
                className="bg-gray-900 text-gray-300 p-8 rounded-xl text-[50px] font-bold hover:bg-gray-800 hover:text-green-400 hover:border-green-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20"
                style={{
                  textShadow: "0 0 10px rgba(156, 163, 175, 0.3)",
                  boxShadow: "0 0 15px rgba(0, 0, 0, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.05)",
                }}
              >
                [3] PROJECTS
              </button>
              <button
                onClick={() => setCurrentSection("skills")}
                className="bg-gray-900 text-gray-300 p-8 rounded-xl text-[50px] font-bold hover:bg-gray-800 hover:text-green-400 hover:border-green-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20"
                style={{
                  textShadow: "0 0 10px rgba(156, 163, 175, 0.3)",
                  boxShadow: "0 0 15px rgba(0, 0, 0, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.05)",
                }}
              >
                [4] SKILLS
              </button>
              <button
                onClick={() => setCurrentSection("education")}
                className="bg-gray-900 text-gray-300 p-8 rounded-xl text-[50px] font-bold hover:bg-gray-800 hover:text-green-400 hover:border-green-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20"
                style={{
                  textShadow: "0 0 10px rgba(156, 163, 175, 0.3)",
                  boxShadow: "0 0 15px rgba(0, 0, 0, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.05)",
                }}
              >
                [5] EDUCATION
              </button>
              <button
                onClick={() => setCurrentSection("contact")}
                className="bg-gray-900 text-gray-300 p-8 rounded-xl text-[50px] font-bold hover:bg-gray-800 hover:text-green-400 hover:border-green-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20"
                style={{
                  textShadow: "0 0 10px rgba(156, 163, 175, 0.3)",
                  boxShadow: "0 0 15px rgba(0, 0, 0, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.05)",
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
        className="w-[2080px] h-[1200px] bg-black text-gray-300 p-8 rounded-xl font-mono shadow-2xl relative"
        style={{
          fontFamily: "'Courier New', 'Lucida Console', 'Monaco', monospace",
          background: "linear-gradient(135deg, #0a0a0a, #1a1a1a)",
          boxShadow: "0 0 30px rgba(34, 197, 94, 0.2), inset 0 0 30px rgba(0, 0, 0, 0.5)",
        }}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between mb-6 border-b-[4px] border-gray-600 pb-4">
          <div className="flex items-center space-x-4">
            <div className="w-6 h-6 rounded-full bg-red-500"></div>
            <div className="w-6 h-6 rounded-full bg-yellow-500"></div>
            <div className="w-6 h-6 rounded-full bg-green-500"></div>
          </div>
          <div className="text-[40px] text-green-400">PORTFOLIO.EXE</div>
          {currentSection !== "home" && (
            <button
              onClick={() => setCurrentSection("home")}
              className="bg-gray-800 text-green-400 px-8 py-4 rounded-xl text-[40px] font-bold hover:bg-gray-700 hover:text-green-300 hover:border-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30"
              style={{
                textShadow: "0 0 10px rgba(34, 197, 94, 0.5)",
                boxShadow: "0 0 15px rgba(34, 197, 94, 0.2)",
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
              className="w-[80px] h-[100px] bg-green-900 text-green-400 rounded-lg text-[35px] font-bold hover:bg-green-800 hover:text-green-300 hover:border-green-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ textShadow: "0 0 5px rgba(156, 163, 175, 0.3)" }}
            >
              ▲
            </button>
            <button
              onClick={() => handleScroll("down")}
              disabled={scrollY >= maxScroll}
              className="w-[80px] h-[100px] bg-green-900 text-green-400 rounded-lg text-[35px] font-bold hover:bg-green-800 hover:text-green-300 hover:border-green-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ textShadow: "0 0 5px rgba(156, 163, 175, 0.3)" }}
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
