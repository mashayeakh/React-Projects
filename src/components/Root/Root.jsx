import React from 'react'
import Home from '../Home/Home'
import Navbar from './../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <>
            <div className='max-w-4xl  mx-auto'>
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        </>
    )
}

export default Root