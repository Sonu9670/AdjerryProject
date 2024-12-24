import React from 'react'
import { Link } from "react-router-dom";
import "./Top.css"
import Wallet from './images/wallet-icon.png'
import Design from './images/design-icon.png'
import Post from './images/post-icon.png'


const Top = () => {
    return (
        <>
            <div class="retail-container">
                <Link to="/retailer/add-services" class="retail">
                    <div class="retail-icon">
                        <span> <h3>Add Service  </h3>  </span>  <img src={Wallet} alt="Wallet Icon" />
                    </div>
                    <p>A detailed overview of the budget allocation and transaction history.</p>
                </Link>

                <div class="retail">
                    <Link to="/business/view" className='retail-1'>
                        <div class="retail-icon">
                            <span> <h3>My orders</h3></span>    <img src={Design} alt="Design Icon" />
                        </div>
                        <p>A gallery to view and select designs submitted by designers.</p>
                    </Link>
                </div>

                <div class="retail">
                    <Link to="/retailer/my-services" className='retail-1'>
                        <div class="retail-icon">
                            <span> <h3>My services</h3></span>   <img src={Post} alt="Post Icon" />
                        </div>

                        <p>If you have already design for ads then upload it.</p>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Top