/** @format */

import { Html } from "@react-three/drei";
import { useState, useRef, useEffect } from "react";
import WorkExperienceMobile from "./mobile/WorkExperienceMobile";
import ProjectsMobile from "./mobile/ProjectsMobile";
import SkillsMobile from "./mobile/SkillsMobile";
import ContactMobile from "./mobile/ContactMobile";
import EducationMobile from "./mobile/EducationMobile";
import AboutMobile from "./mobile/AboutMobile";

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
        return <AboutMobile />;
      case "work":
        return <WorkExperienceMobile />;
      case "projects":
        return <ProjectsMobile />;
      case "skills":
        return <SkillsMobile />;
      case "education":
        return <EducationMobile />;
      case "contact":
        return <ContactMobile />;
      default:
        return (
          <div className="text-center px-4 py-6">
            <div className="text-lg mb-4 text-gray-800 font-semibold">Welcome to my Portfolio</div>
            <div className="text-3xl text-blue-600 font-bold mb-2">GONZALO GÓMEZ PIZARRO</div>
            <div className="text-sm mb-6 text-gray-950">
              Junior Full Stack Engineer <br /> Python | React.js | GCP
            </div>

            <div className="text-xs mb-8 text-gray-500">
              Ready for new opportunities
              <br />
              Select a section to explore...
            </div>

            {/* Navigation Menu - 2x3 Grid for mobile */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button
                onClick={() => setCurrentSection("about")}
                className="bg-blue-500 text-white p-3 rounded-xl text-sm font-semibold hover:bg-blue-600 transition-all duration-300 shadow-lg"
              >
                About
              </button>
              <button
                onClick={() => setCurrentSection("work")}
                className="bg-purple-500 text-white p-3 rounded-xl text-sm font-semibold hover:bg-purple-600 transition-all duration-300 shadow-lg"
              >
                Experience
              </button>
              <button
                onClick={() => setCurrentSection("projects")}
                className="bg-green-500 text-white p-3 rounded-xl text-sm font-semibold hover:bg-green-600 transition-all duration-300 shadow-lg"
              >
                Projects
              </button>
              <button
                onClick={() => setCurrentSection("skills")}
                className="bg-orange-500 text-white p-3 rounded-xl text-sm font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg"
              >
                Skills
              </button>
              <button
                onClick={() => setCurrentSection("education")}
                className="bg-indigo-500 text-white p-3 rounded-xl text-sm font-semibold hover:bg-indigo-600 transition-all duration-300 shadow-lg"
              >
                Education
              </button>
              <button
                onClick={() => setCurrentSection("contact")}
                className="bg-pink-500 text-white p-3 rounded-xl text-sm font-semibold hover:bg-pink-600 transition-all duration-300 shadow-lg"
              >
                Contact
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <Html transform occlude position={[-.005, 0.03, -.07097]} rotation={[0,Math.PI,0]} scale={0.1}>
      <div
        className="w-[275px] h-[545px] rounded-b-[40px] bg-opacity-90 bg-white text-gray-800 overflow-hidden relative"
        style={{
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
        }}
      >
        {/* iPhone-style Header */}
        <div className="flex items-center justify-between p-4  border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <div className="text-sm font-semibold text-gray-700">Portfolio</div>
          {currentSection !== "home" && (
            <button
              onClick={() => setCurrentSection("home")}
              className="bg-blue-500 text-white px-3 py-1 rounded-lg text-xs font-semibold hover:bg-blue-600 transition-all duration-300"
            >
              Home
            </button>
          )}
        </div>

        {/* Custom Scroll Controls */}
        {currentSection !== "home" && (
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2 z-10">
            <button
              onClick={() => handleScroll("up")}
              disabled={scrollY === 0}
              className="w-8 h-10 bg-neutral-800 text-gray-600 rounded-full text-xs font-bold hover:bg-gray-950 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
            >
              ▲
            </button>
            <button
              onClick={() => handleScroll("down")}
              disabled={scrollY >= maxScroll}
              className="w-8 h-10 bg-neutral-800 text-gray-600 rounded-full text-xs font-bold hover:bg-gray-950 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
            >
              ▼
            </button>
          </div>
        )}

        {/* Content Area with scroll functionality */}
        <div className="h-[485px] overflow-hidden relative">
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