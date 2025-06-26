import React from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags = [],
}) => {
  return (
    <>
      <div className="flex-wrap gap-6 items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0">
        <div>
          <p className="text-2xl">{title}</p>
          <div className="flex gap-5 mt-2 text-sand">
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>
        <button className="flex items-center gap-1 cursor-pointer hover-animation">
          Read More
          <img
            src="/images/arrow-right-white.svg"
            className="w-5"
            alt="arrow-icon"
          />
        </button>
        <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
     
      </div>
      
    </>
  );
};

export default Project;
