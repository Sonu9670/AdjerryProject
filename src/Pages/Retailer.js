import React, { useEffect, useState } from 'react';
import './Retailer.css';
import Sidebar from "./R-component/Sidebar";
import Top from "./R-component/Top";
import Bottom from "./R-component/Bottom"

const Business = () => {
    return (
        <div>
            <div className="retailer-main0">
                <Sidebar />
                <div className="retailer-main1">
                    <Top />
                    <div className="retailer-main2">
                   <Bottom/>
                    </div>
                </div>
            </div>

        </div>
    );
}


export default Business;