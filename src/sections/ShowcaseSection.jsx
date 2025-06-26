import React from "react";
import { useRef } from "react";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Ryde" />
            </div>
            <div className="text-content">
              <h2>
                A FujiFilm Dashboard Capable of Handling Complex Data with
                Multi-Tiered Roles.{" "}
              </h2>
              <p className="text-white-50 md:text-xl">
                Building a Comprehensive dashboard for a laboratory that handles
                sensitive data. The front end is redesigned & Built using
                JavaScript.
              </p>
            </div>
          </div>
          {/* RIGHT - 1  */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img
                  src="/images/project2.gif"
                  alt="Library Management Platform"
                  className="rounded-2xl"
                />
              </div>
              <div className="text-content">
                <h2>
                  Personal AI Content Generator. With Built in SERP analysis.
                </h2>
                <p>
                  GetGenie AI was built using JavaScript. It is a WordPress
                  Gutenberg Plugin.
                </p>
              </div>
            </div>
            {/* RIGHT 2 */}
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <a href="">
                  <img
                    src="/images/project3.png"
                    alt="Library Management Platform"
                    className="rounded-2xl"
                  />
                </a>
              </div>
              <div className="text-content">
                <h2>
                  A Mobile application to Manage Professional Tennis Teams.
                </h2>
                <p>
                  A B2C SaaS app to manage professional Tennis athletes, track
                  equipment, and monitor performance, improving team efficiency
                  , specially in Denmark.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;
