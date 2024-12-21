import React from "react";
import "./Designer.css";
import Sidebar from "./D-component/Sidebar";
import ProjectCard from "./D-component/ProjectCard";
import SubmittedDesigns from "./D-component/SubmittedDesigns";

const Designer = () => {
  return (
    <div className="main">
      <Sidebar />
      <ProjectCard />
      <SubmittedDesigns />
    </div>
  );
};

export default Designer;
