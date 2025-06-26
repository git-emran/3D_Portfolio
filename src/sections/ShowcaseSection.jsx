import React from "react";

const ShowcaseSection = () => {
  return (
    <div id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT */}
          <div className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Ryde" />
            </div>
            <div className="text-content">
              <h2>
                A Dashboard Capable of Handling Complex Data with Multi-Tiered
                Roles and Accesses.{" "}
              </h2>
              <p className="text-white-50 md:text-xl">
                Comprehensive dashboard for a complex system. Redesigned & Built
                with React, JavaScript.
              </p>
            </div>
          </div>
          {/* RIGHT - 1  */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project">
              <div className="image-wrapper bg-[#ffefdb]">
                <img
                  src="/images/get_genie.gif"
                  alt="Library Management Platform"
                />
                <h2>
                  Your Personal AI Content Generator. With Built in SERP
                  analysis and Advance Content Scoring.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;
