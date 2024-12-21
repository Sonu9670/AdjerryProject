import React, { useEffect, useState } from 'react';
import './Business.css';
import Sidebar from "./B-component/Sidebar";
import ProjectCard from "./B-component/ProjectCard";
import Top from "./B-component/Top";
import SubmittedDesigns from "./B-component/SubmittedDesigns";

const Business = () => {
    return (
        <div>
            <div className="main0">
                <Sidebar />
                <div className="main1">
                    <Top />
                    <div className="main2">
                        <ProjectCard />
                        <SubmittedDesigns />
                    </div>
                </div>
            </div>

        </div>
    );
}


export default Business;