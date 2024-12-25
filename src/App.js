import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom'; // No Router here

// layout page
import Header from './Pages/Layouts/Header';
import Footer from './Pages/Layouts/Footer';

// comman page
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Join from './Pages/Join';
import Checkout from './Pages/Checkout';
import Contactpage from './Pages/Contactpage';


// business user page
import Bussiness from './Pages/Business';
import Orders from './Pages/Orders';
import View from "./Pages/View"
import Productdesign from './Pages/Productdesign';
import Payment from "./Pages/Payment"
import Service from "./Pages/Service"
import About from "./Pages/About"



// designer user page
import Designerpage from "./Pages/Designer";
import Wallet from './Pages/Wallet';
import Adv from './Pages/Adv';
import EditProfile from './Pages/EditProfile';
import Profile from './Pages/Profile';
import Invoicepage from './Pages/Invoicepage';

//retailer user page
import Retailer from './Pages/Retailer';
import AddService from "./Pages/AddService"
import MyService from "./Pages/MyService"
import UpdateService from "./Pages/UpdateService"


function App() {
  const [user, setUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const ProtectedRoute = ({ element }) => {
    // const token = localStorage.getItem('token');
    // if (token) {
      // const decodedToken = JSON.parse(atob(token.split('.')[1]));
      // // const currentTime = Date.now() / 1000;
      // // if (decodedToken.exp < currentTime) {
      // //   localStorage.removeItem('token');
      // //   setUser(null);
      // //   navigate('/login');
      // // } else {
        // setUser(decodedToken);
        return element;
      // }
    // } else {
    //   return <Navigate to="/login" />;
    // }
  };

  return (
    <div>
      <Header />
    
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/signup/:type' element={<Signup />} />
        <Route path='/proceed' element={<Join />} />
        <Route path='/contact' element={<Contactpage />} />
       
        
        <Route path='/business/home' element={<ProtectedRoute element={<Bussiness />} />} />
        <Route path='/business/view' element={<ProtectedRoute element={<View />} />} />
        <Route path='/business/view/:ads_id' element={<ProtectedRoute element={<View />} />} />
        <Route path='/business/wallet' element={<ProtectedRoute element={<Wallet />} />} />
        <Route path='/business/orders' element={<ProtectedRoute element={<Orders />} />} />
        <Route path='/orders/invoice/:order_id' element={<ProtectedRoute element={<Invoicepage />} />} />
        <Route path='/business/service' element={<ProtectedRoute element={<Service />} />} />
        <Route path='/about' element={<ProtectedRoute element={<About/>} />} />
        
        
        <Route path='/designer/home' element={<ProtectedRoute element={<Designerpage />} />} />
        <Route path='/designer/view' element={<ProtectedRoute element={<View />} />} />
        <Route path='/designer/wallet' element={<ProtectedRoute element={<Wallet />} />} />
        <Route path='/productdesign/:id' element={<ProtectedRoute element={<Productdesign />}/>} />
        <Route path='/editprofile' element={<ProtectedRoute element={<EditProfile />} />} />
        <Route path='/uploadDesign' element={<ProtectedRoute element={<Adv />} />} />
        <Route path='/checkout' element={<ProtectedRoute element={<Checkout />} />} />
        <Route path='/payment' element={<ProtectedRoute element={<Payment />} />} />
        
        
        
        <Route path='/retailer/wallet' element={<ProtectedRoute element={<Wallet />} />} />
        <Route path='/retailer/home' element={<ProtectedRoute element={<Retailer/>} />} />
        <Route path='/retailer/add-services' element={<ProtectedRoute element={<AddService />} />} />
        <Route path='/retailer/my-services' element={<ProtectedRoute element={<MyService />} />} />
        <Route path='/retailer/update-services/:pincode' element={<ProtectedRoute element={<UpdateService />} />} />


      </Routes>

      <Footer />
    </div>
  );
}

export default App;
